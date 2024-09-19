"use client";
import React, { useState, useEffect } from 'react'
import ActionModal from '../widgets/ActionModal'
import { Button } from '../ui/button'

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"

  import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"
import { SelectGroup, SelectLabel } from '@radix-ui/react-select';

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Input } from '../ui/input';
import { LoadingButton } from '../widgets/Loader';

import { useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation'
import { createInvoice, updateInvoice, getInvoice } from '@/actions/invoiceActions';
import { toast } from 'react-toastify';
const customers = [
    {
        id: 1,
        name: "Nimer El Sayed",
        image: "https://picsum.photos/400/300?random=1",
        email: "nimerelsayed@hotmail.com"
    },
    {
        id: 2,
        name: "Alaa Khalil",
        image: "https://i.pravatar.cc/300?u=a042581f4e29026703d",
        email: "world-alaa@hotmail.com"
    },
    {
        id: 3,
        name: "Nimer Al Sayed",
        image: "https://picsum.photos/400/300?random=3",
        email: "Nimer.Alsayed@sos-palestine.org"
    },
    {
      id: 3,
      name: "Hmsat Daf2h",
      image: "https://picsum.photos/400/300?random=21",
      email: "angel4ever219@hotmail.com"
  },
]

const formSchema = z.object({
    name: z.string().min(2, {
      message: "Name is Required",
    }),
    status: z.string().min(2, {
        message: "Status is Required",
      }),
    amount: z.string().min(2, {
        message: "Amount is Required",
      }),
  })

const CreateInvoice = () => {
    const [open, setOpen] = useState(false);

    const router = useRouter();
    const searchParams = useSearchParams();
    const id = searchParams.get("id");

      // 1. Define your form.
  const form = useForm({ //<z.infer<typeof formSchema>>
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      amount: "",
      status: "Unpaid",
    },
  });

  const isLoading = form.formState.isSubmitting;

  // 2. Define a submit handler.
  async function onSubmit(values) {
    console.log(values);
    const { name, amount, status } = values;
    const customer = customers.find((c) => c.name === name);
    const formData = {
      amount,
      customer,
      status,
      id: id ? id : ""
    };

    if(id) {
      // update
      const res = await updateInvoice(formData)
      console.log(process.env.MONGODB_URI); // undefined
      console.log(res);
      if(res?.error){
        toast.error(res?.error);
      }
      if(res?.message) {
        toast.success(res?.message);
      }
      form.reset();
      setOpen(false);
    } else {
      // create
      const res = await createInvoice(formData)
      console.log(process.env.MONGODB_URI); // undefined
      console.log(res);
      if(res?.error){
        toast.error(res?.error);
      }
      if(res?.message) {
        toast.success(res?.message);
      }
      form.reset();
      setOpen(false);
    }
  }
  useEffect(() => {
    const fetchInvoice = async () => {
      const res = await getInvoice(id);
      const inv = JSON.parse(res); 

      form.setValue("name", inv?.customer?.name);
      form.setValue("amount", inv?.amount);
      form.setValue("status", inv?.status);
    }
    if(id) {
      setOpen(true);
      fetchInvoice();
    }
  },[id])
  useEffect(() => {
    if(!open) {
      router.replace("/");
    }
  },[open,router]);
  return (
    <div>
        <ActionModal
        title={id ? "Update Invoice" : "Create Invoice"}
        desc={id ? "Update Invoice" : "Create a new Invoice"}
        trigger={
            <Button className="text-white space-x-1">
                <span>Create Invoice</span>                
                <span className="text-lg">+</span>
            </Button>
        }
        open={open}
        setOpen={setOpen}
        // action="Create"
        // buttonText="Create Invoice"
        // modalSize="lg"
        // show        
        >
            <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-3">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <Select
              onValueChange={field.onChange}
              defaultValue={field.value}
              value={field.value}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a Customer" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                    <SelectGroup>
                        <SelectLabel>Customer</SelectLabel>
                        <>
                        {customers?.map((item) => {
                            const {name} = item
                            return (
                            <SelectItem key={item.id} value={name}>
                                {name}
                            </SelectItem>
                            )
                        })}
                        </> 
                    </SelectGroup>
                </SelectContent>
              </Select>
              {/* <FormDescription>
                You can manage email addresses in your{" "}
                <Link href="/examples/forms">email settings</Link>.
              </FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="amount"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Amount</FormLabel>
              <FormControl>
                <Input placeholder="Amount" {...field} />
              </FormControl>
              {/* <FormDescription>
                This is your public display name.
              </FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />

<FormField
          control={form.control}
          name="status"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormLabel>Status</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex flex-col space-y-1"
                >
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="Unpaid" />
                    </FormControl>
                    <FormLabel className="font-normal">
                      Unpaid
                    </FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="Paid" />
                    </FormControl>
                    <FormLabel className="font-normal">
                      Paid
                    </FormLabel>
                  </FormItem>
                  {/* <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="none" />
                    </FormControl>
                    <FormLabel className="font-normal">Nothing</FormLabel>
                  </FormItem> */}
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {isLoading ? (
          <LoadingButton btnText={"Loading"} btnClass="w-full"
          btnVariant={"outline"}/>
        ) : (
          <Button type="submit">{id ? "Update Invoice" : "Create Invoice"}</Button>          
        )}

      </form>
    </Form>
        </ActionModal>
    </div>
  )
}

export default CreateInvoice