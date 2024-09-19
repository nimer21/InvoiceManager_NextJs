export const invoiceTemplate = `
<!doctype html>
<html>
  <body>
    <div
      style='background-color:#F5F5F5;color:#242424;font-family:"Helvetica Neue", "Arial Nova", "Nimbus Sans", Arial, sans-serif;font-size:16px;font-weight:400;letter-spacing:0.15008px;line-height:1.5;margin:0;padding:32px 0;min-height:100%;width:100%'
    >
      <table
        align="center"
        width="100%"
        style="margin:0 auto;max-width:600px;background-color:#F5F5F5"
        role="presentation"
        cellspacing="0"
        cellpadding="0"
        border="0"
      >
        <tbody>
          <tr style="width:100%">
            <td>
              <div style="background-color:#f5f5f5;padding:16px 24px 16px 24px">
                <table
                  align="center"
                  width="100%"
                  cellpadding="0"
                  border="0"
                  style="table-layout:fixed;border-collapse:collapse"
                >
                  <tbody style="width:100%">
                    <tr style="width:100%">
                      <td
                        style="box-sizing:content-box;vertical-align:middle;padding-left:0;padding-right:0"
                      >
                        <div style="padding:0px 0px 0px 0px">
                          <div style="padding:0px 0px 0px 0px;text-align:left">
                            <a
                              href="https://linktr.ee/nimer219"
                              style="text-decoration:none"
                              target="_blank"
                              ><img
                                alt="TIGER.BAR"
                                src="data:image/png;base64,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"
                                height="18"
                                style="height:18px;outline:none;border:none;text-decoration:none;vertical-align:middle;display:inline-block;max-width:100%"
                            /></a>
                          </div>
                        </div>
                      </td>
                      <td
                        style="box-sizing:content-box;vertical-align:middle;padding-left:0;padding-right:0"
                      >
                        <div style="padding:0px 0px 0px 0px">
                          <div style="text-align:right;padding:0px 0px 0px 0px">
                            <a
                              href="https://payment-fs-ecommerce-6yfc.vercel.app"
                              style="color:#242424;font-size:14px;font-weight:normal;background-color:#FFFFFF;border-radius:64px;display:inline-block;padding:12px 20px;text-decoration:none"
                              target="_blank"
                              ><span
                                ><!--[if mso
                                  ]><i
                                    style="letter-spacing: 20px;mso-font-width:-100%;mso-text-raise:30"
                                    hidden
                                    >&nbsp;</i
                                  ><!
                                [endif]--></span
                              ><span>Sign in</span
                              ><span
                                ><!--[if mso
                                  ]><i
                                    style="letter-spacing: 20px;mso-font-width:-100%"
                                    hidden
                                    >&nbsp;</i
                                  ><!
                                [endif]--></span
                              ></a
                            >
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div style="background-color:#ffffff;padding:16px 24px 24px 24px">
                <div style="padding:16px 0px 16px 0px">
                  <table
                    align="center"
                    width="100%"
                    cellpadding="0"
                    border="0"
                    style="table-layout:fixed;border-collapse:collapse"
                  >
                    <tbody style="width:100%">
                      <tr style="width:100%">
                        <td
                          style="box-sizing:content-box;vertical-align:middle;padding-left:0;padding-right:0"
                        >
                          <div style="padding:0px 0px 0px 0px">
                            <div
                              style="font-size:14px;font-weight:normal;text-align:left;padding:0px 0px 0px 0px"
                            >
                              Invoice for {{name}}
                            </div>
                            <h1
                              style="font-weight:bold;text-align:left;margin:0;font-size:32px;padding:16px 0px 0px 0px"
                            >
                              $ {{amount}}
                            </h1>
                            <div
                              style="color:#474849;font-size:14px;font-weight:normal;text-align:left;padding:0px 0px 0px 0px"
                            >
                              {{status}} {{createdAt}}
                            </div>
                            <div style="padding:16px 0px 16px 0px">
                              <hr
                                style="width:100%;border:none;border-top:1px solid #EEEEEE;margin:0"
                              />
                            </div>
                            <div
                              style="font-size:14px;font-weight:normal;text-align:left;padding:0px 0px 0px 0px"
                            >
                              Download receipt
                            </div>
                          </div>
                        </td>
                        <td
                          style="box-sizing:content-box;vertical-align:middle;padding-left:0;padding-right:0"
                        >
                          <div style="padding:0px 0px 0px 0px">
                            <div
                              style="padding:0px 0px 0px 0px;text-align:right"
                            >
                              <a
                                href="http://remix.example.com/receipt/1923-2093"
                                style="text-decoration:none"
                                target="_blank"
                                ><img
                                  alt="Your invoice has been paid."
                                  src="https://d1iiu589g39o6c.cloudfront.net/live/platforms/platform_A9wwKSL6EV6orh6f/images/wptemplateimage_8yUGBZcXaAtTEofB/invoice-skeleton.png"
                                  style="outline:none;border:none;text-decoration:none;vertical-align:middle;display:inline-block;max-width:100%"
                              /></a>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div style="padding:8px 0px 8px 0px">
                  <table
                    align="center"
                    width="100%"
                    cellpadding="0"
                    border="0"
                    style="table-layout:fixed;border-collapse:collapse"
                  >
                    <tbody style="width:100%">
                      <tr style="width:100%">
                        <td
                          style="box-sizing:content-box;vertical-align:middle;padding-left:0;padding-right:0"
                        >
                          <div style="padding:0px 0px 0px 0px">
                            <div
                              style="color:#474849;font-size:14px;font-weight:normal;text-align:left;padding:0px 0px 0px 0px"
                            >
                              Receipt number
                            </div>
                          </div>
                        </td>
                        <td
                          style="box-sizing:content-box;vertical-align:middle;padding-left:0;padding-right:0"
                        >
                          <div style="padding:0px 0px 0px 0px">
                            <div
                              style="font-size:14px;font-weight:normal;text-align:right;padding:0px 0px 0px 0px"
                            >
                              1923-2093
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div style="padding:8px 0px 8px 0px">
                  <table
                    align="center"
                    width="100%"
                    cellpadding="0"
                    border="0"
                    style="table-layout:fixed;border-collapse:collapse"
                  >
                    <tbody style="width:100%">
                      <tr style="width:100%">
                        <td
                          style="box-sizing:content-box;vertical-align:middle;padding-left:0;padding-right:0"
                        >
                          <div style="padding:0px 0px 0px 0px">
                            <div
                              style="color:#474849;font-size:14px;font-weight:normal;text-align:left;padding:0px 0px 0px 0px"
                            >
                              Invoice number
                            </div>
                          </div>
                        </td>
                        <td
                          style="box-sizing:content-box;vertical-align:middle;padding-left:0;padding-right:0"
                        >
                          <div style="padding:0px 0px 0px 0px">
                            <div
                              style="font-size:14px;font-weight:normal;text-align:right;padding:0px 0px 0px 0px"
                            >
                              {{_id}}
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div style="padding:8px 0px 8px 0px">
                  <table
                    align="center"
                    width="100%"
                    cellpadding="0"
                    border="0"
                    style="table-layout:fixed;border-collapse:collapse"
                  >
                    <tbody style="width:100%">
                      <tr style="width:100%">
                        <td
                          style="box-sizing:content-box;vertical-align:middle;padding-left:0;padding-right:0"
                        >
                          <div style="padding:0px 0px 0px 0px">
                            <div
                              style="color:#474849;font-size:14px;font-weight:normal;text-align:left;padding:0px 0px 0px 0px"
                            >
                              Payment method
                            </div>
                          </div>
                        </td>
                        <td
                          style="box-sizing:content-box;vertical-align:middle;padding-left:0;padding-right:0"
                        >
                          <div style="padding:0px 0px 0px 0px">
                            <div
                              style="font-size:14px;font-weight:normal;text-align:right;padding:0px 0px 0px 0px"
                            >
                              VISA – 4252
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div style="height:24px"></div>
              <div
                style="color:#474849;font-size:12px;font-weight:normal;text-align:left;padding:24px 24px 16px 24px"
              >
                Can we help? Just reply to this email.
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </body>
</html>
`