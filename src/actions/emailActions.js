"use server";
import nodemailer from "nodemailer";
import * as handlebars from "handlebars";
import { invoiceTemplate } from "@/lib/emailTemplates/invoice";

// https://www.usewaypoint.com/open-source/emailbuilderjs

function compileInvoiceTemplate(name, amount, status, createdAt, _id) {
    const template = handlebars.compile(invoiceTemplate);
    const htmlBody = template({ name, amount, status, createdAt, _id });
    //return templateSource(data);
    return htmlBody;
}

export const sendEmail = async ({ subject, message, email, data }) => {
    //console.log("sendEmail=>  ", subject, message, email, data, process.env.EMAIL_USERNAME);
    const transporter = nodemailer.createTransport({
        service: "gmail",
        host: process.env.EMAIL_HOST, // process.env.EMAIL_HOST
        port: 587, //465
        secure: true, // true
        auth: {
            user: process.env.EMAIL_USERNAME, //process.env.EMAIL_USERNAME
            pass: process.env.EMAIL_PASSWORD, // process.env.EMAIL_PASSWORD
        },
    });
    const template = compileInvoiceTemplate(data.name, data.amount, data.status, data.createdAt, data._id);
    
    const mailOptions = {
        from: process.env.EMAIL_USERNAME, // process.env.EMAIL_USERNAME
        to: email,
        subject: subject,
        html: template,
    };


    try {
        await new Promise((resolve, reject) => {
            transporter.sendMail(mailOptions, function(err,info){
                if (err) {
                    console.log(err);
                    reject(err)
                } else {
                    console.log("Email Sent", info.response);
                    resolve(info.response);
                }
            });
        });
        return {
            message: "Email sent successfully",
        }
    } catch (error) {
        return {
            error: "Email not sent",
        }
    }
};
    