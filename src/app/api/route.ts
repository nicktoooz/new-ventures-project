import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { Simulate } from 'react-dom/test-utils';

async function handler(req: NextRequest) {
  try {
    const { name, streetAddress, suburb, email, mobileNumber, service, details } = await req.json();

    const html = `
        <!DOCTYPE html>
        <html style="margin: 0; padding: 0; border: 0; font: inherit; font-size: 100%; -webkit-font-smoothing: antialiased; box-sizing: border-box; margin: 0px; height: 100%">
          <head>
            <meta charset="utf-8" />
          </head>
          <body style="margin: 0; padding: 0; border: 0; font: inherit; font-size: 100%; line-height: 1; -webkit-font-smoothing: antialiased; box-sizing: border-box; margin: 0px; height: 100%">
            <table border="0" cellpadding="0" cellspacing="0" class="frame" style="border-collapse: separate; padding: 0; border: 0; font: inherit; font-size: 100%; -webkit-font-smoothing: antialiased; box-sizing: border-box; position: relative; background-color: #ffffff; width: 100%">
              <tr>
                <td align="left" style="position: relative; width: 100%">
                  <table border="0" cellpadding="0" cellspacing="0" class="div" style="border-collapse: separate; padding: 35px 70px; border: 0; font: inherit; font-size: 100%; -webkit-font-smoothing: antialiased; box-sizing: border-box; width: 100%; background-color: #788bff; position: relative; text-align: left; height: 0px">
                    <tr style="vertical-align: middle">
                      <td style="position: relative; width: fit-content">
                        <div class="text-wrapper" style="margin: 0; padding: 0; border: 0; font: inherit; font-size: 68px; -webkit-font-smoothing: antialiased; box-sizing: border-box; position: relative; width: fit-content; margin-top: -1px; font-family: 'Inter-SemiBold', Helvetica; font-weight: 600; color: #ffffff; letter-spacing: 0; line-height: normal; text-align: left">Incoming Request</div>
                      </td>
                      <td style="width: 100%"></td>
                      <td style="position: relative; width: fit-content">
                        <div class="text-wrapper-2" style="margin: 0; padding: 0; border: 0; font: inherit; font-size: 60px; -webkit-font-smoothing: antialiased; box-sizing: border-box; position: relative; width: fit-content; font-family: 'Island Moments-Regular', Helvetica; font-weight: 400; color: #000000; letter-spacing: 0; line-height: normal; white-space: nowrap; text-align: left">Don Denciong</div>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
              <tr>
                <td align="left" style="position: relative; width: 100%">
                  <table border="0" cellpadding="0" cellspacing="0" class="div-2" style="border-collapse: separate; padding: 50px; border: 0; font: inherit; font-size: 100%; -webkit-font-smoothing: antialiased; box-sizing: border-box; width: 100%; background-color: #99afff33; position: relative; text-align: left">
                    <tr>
                      <td align="left" style="position: relative">
                        <table border="0" cellpadding="0" cellspacing="0" class="div-3" style="border-collapse: separate; padding: 0; border: 0; font: inherit; font-size: 100%; -webkit-font-smoothing: antialiased; box-sizing: border-box; position: relative; text-align: left; height: 0px">
                          <tr style="vertical-align: top">
                            <td align="left" style="position: relative; width: 420px">
                              <div class="text-wrapper-3" style="margin: 0; padding: 0; border: 0; font: inherit; font-size: 46px; -webkit-font-smoothing: antialiased; box-sizing: border-box; width: 420px; font-family: 'Inter-SemiBold', Helvetica; font-weight: 600; position: relative; margin-top: -1px; color: #000000; letter-spacing: 0; line-height: normal; text-align: left">Name:</div>
                            </td>
                            <td style="width: 10px; min-width: 10px; padding: 0px"></td>
                            <td align="left" style="position: relative; width: fit-content">
                              <div class="text-wrapper-4" style="margin: 0; padding: 0; border: 0; font: inherit; font-size: 46px; -webkit-font-smoothing: antialiased; box-sizing: border-box; position: relative; width: fit-content; margin-top: -1px; font-family: 'Inter-Regular', Helvetica; font-weight: 400; color: #000000; letter-spacing: 0; line-height: normal; text-align: left">${name}</div>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                    <tr style="height: 20px"></tr>
                    <tr>
                      <td align="left" style="position: relative">
                        <table border="0" cellpadding="0" cellspacing="0" class="div-3" style="border-collapse: separate; padding: 0; border: 0; font: inherit; font-size: 100%; -webkit-font-smoothing: antialiased; box-sizing: border-box; position: relative; text-align: left; height: 0px">
                          <tr style="vertical-align: top">
                            <td align="left" style="position: relative; width: 420px">
                              <div class="text-wrapper-3" style="margin: 0; padding: 0; border: 0; font: inherit; font-size: 46px; -webkit-font-smoothing: antialiased; box-sizing: border-box; width: 420px; font-family: 'Inter-SemiBold', Helvetica; font-weight: 600; position: relative; margin-top: -1px; color: #000000; letter-spacing: 0; line-height: normal; text-align: left">Address:</div>
                            </td>
                            <td style="width: 10px; min-width: 10px; padding: 0px"></td>
                            <td align="left" style="position: relative; width: fit-content">
                              <div class="text-wrapper-4" style="margin: 0; padding: 0; border: 0; font: inherit; font-size: 46px; -webkit-font-smoothing: antialiased; box-sizing: border-box; position: relative; width: fit-content; margin-top: -1px; font-family: 'Inter-Regular', Helvetica; font-weight: 400; color: #000000; letter-spacing: 0; line-height: normal; text-align: left">${streetAddress}</div>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                    <tr style="height: 20px"></tr>
                    <tr>
                      <td align="left" style="position: relative">
                        <table border="0" cellpadding="0" cellspacing="0" class="div-3" style="border-collapse: separate; padding: 0; border: 0; font: inherit; font-size: 100%; -webkit-font-smoothing: antialiased; box-sizing: border-box; position: relative; text-align: left; height: 0px">
                          <tr style="vertical-align: top">
                            <td align="left" style="position: relative; width: 420px">
                              <div class="text-wrapper-3" style="margin: 0; padding: 0; border: 0; font: inherit; font-size: 46px; -webkit-font-smoothing: antialiased; box-sizing: border-box; width: 420px; font-family: 'Inter-SemiBold', Helvetica; font-weight: 600; position: relative; margin-top: -1px; color: #000000; letter-spacing: 0; line-height: normal; text-align: left">Suburb:</div>
                            </td>
                            <td style="width: 10px; min-width: 10px; padding: 0px"></td>
                            <td align="left" style="position: relative; width: fit-content">
                              <div class="text-wrapper-4" style="margin: 0; padding: 0; border: 0; font: inherit; font-size: 46px; -webkit-font-smoothing: antialiased; box-sizing: border-box; position: relative; width: fit-content; margin-top: -1px; font-family: 'Inter-Regular', Helvetica; font-weight: 400; color: #000000; letter-spacing: 0; line-height: normal; text-align: left">${suburb}</div>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                    <tr style="height: 20px"></tr>
                    <tr>
                      <td align="left" style="position: relative">
                        <table border="0" cellpadding="0" cellspacing="0" class="div-3" style="border-collapse: separate; padding: 0; border: 0; font: inherit; font-size: 100%; -webkit-font-smoothing: antialiased; box-sizing: border-box; position: relative; text-align: left; height: 0px">
                          <tr style="vertical-align: top">
                            <td align="left" style="position: relative; width: 420px">
                              <div class="text-wrapper-3" style="margin: 0; padding: 0; border: 0; font: inherit; font-size: 46px; -webkit-font-smoothing: antialiased; box-sizing: border-box; width: 420px; font-family: 'Inter-SemiBold', Helvetica; font-weight: 600; position: relative; margin-top: -1px; color: #000000; letter-spacing: 0; line-height: normal; text-align: left">Email:</div>
                            </td>
                            <td style="width: 10px; min-width: 10px; padding: 0px"></td>
                            <td align="left" style="position: relative; width: fit-content">
                              <div class="text-wrapper-4" style="margin: 0; padding: 0; border: 0; font: inherit; font-size: 46px; -webkit-font-smoothing: antialiased; box-sizing: border-box; position: relative; width: fit-content; margin-top: -1px; font-family: 'Inter-Regular', Helvetica; font-weight: 400; color: #000000; letter-spacing: 0; line-height: normal; text-align: left">${email}</div>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                    <tr style="height: 20px"></tr>
                    <tr>
                      <td align="left" style="position: relative">
                        <table border="0" cellpadding="0" cellspacing="0" class="div-3" style="border-collapse: separate; padding: 0; border: 0; font: inherit; font-size: 100%; -webkit-font-smoothing: antialiased; box-sizing: border-box; position: relative; text-align: left; height: 0px">
                          <tr style="vertical-align: top">
                            <td align="left" style="position: relative; width: 420px">
                              <div class="text-wrapper-3" style="margin: 0; padding: 0; border: 0; font: inherit; font-size: 46px; -webkit-font-smoothing: antialiased; box-sizing: border-box; width: 420px; font-family: 'Inter-SemiBold', Helvetica; font-weight: 600; position: relative; margin-top: -1px; color: #000000; letter-spacing: 0; line-height: normal; text-align: left">Mobile Number :</div>
                            </td>
                            <td style="width: 10px; min-width: 10px; padding: 0px"></td>
                            <td align="left" style="position: relative; width: fit-content">
                              <div class="text-wrapper-4" style="margin: 0; padding: 0; border: 0; font: inherit; font-size: 46px; -webkit-font-smoothing: antialiased; box-sizing: border-box; position: relative; width: fit-content; margin-top: -1px; font-family: 'Inter-Regular', Helvetica; font-weight: 400; color: #000000; letter-spacing: 0; line-height: normal; text-align: left">${mobileNumber}</div>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                    <tr style="height: 20px"></tr>
                    <tr>
                      <td align="left" style="position: relative">
                        <table border="0" cellpadding="0" cellspacing="0" class="div-3" style="border-collapse: separate; padding: 0; border: 0; font: inherit; font-size: 100%; -webkit-font-smoothing: antialiased; box-sizing: border-box; position: relative; text-align: left; height: 0px">
                          <tr style="vertical-align: top">
                            <td align="left" style="position: relative; width: 420px">
                              <div class="text-wrapper-3" style="margin: 0; padding: 0; border: 0; font: inherit; font-size: 46px; -webkit-font-smoothing: antialiased; box-sizing: border-box; width: 420px; font-family: 'Inter-SemiBold', Helvetica; font-weight: 600; position: relative; margin-top: -1px; color: #000000; letter-spacing: 0; line-height: normal; text-align: left">Service :</div>
                            </td>
                            <td style="width: 10px; min-width: 10px; padding: 0px"></td>
                            <td align="left" style="position: relative; width: fit-content">
                              <div class="text-wrapper-4" style="margin: 0; padding: 0; border: 0; font: inherit; font-size: 46px; -webkit-font-smoothing: antialiased; box-sizing: border-box; position: relative; width: fit-content; margin-top: -1px; font-family: 'Inter-Regular', Helvetica; font-weight: 400; color: #000000; letter-spacing: 0; line-height: normal; text-align: left">${service}</div>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                    <tr style="height: 20px"></tr>
                    <tr>
                      <td align="left" style="position: relative; width: 100%">
                        <table border="0" cellpadding="0" cellspacing="0" class="div-4" style="border-collapse: separate; padding: 0; border: 0; font: inherit; font-size: 100%; -webkit-font-smoothing: antialiased; box-sizing: border-box; width: 100%; position: relative; text-align: left; height: 0px">
                          <tr style="vertical-align: top">
                            <td align="left" style="position: relative; width: 420px">
                              <div class="text-wrapper-3" style="margin: 0; padding: 0; border: 0; font: inherit; font-size: 46px; -webkit-font-smoothing: antialiased; box-sizing: border-box; width: 420px; font-family: 'Inter-SemiBold', Helvetica; font-weight: 600; position: relative; margin-top: -1px; color: #000000; letter-spacing: 0; line-height: normal; text-align: left">Details:</div>
                            </td>
                            <td style="width: 10px; min-width: 10px; padding: 0px"></td>
                            <td align="left" style="position: relative">
                              <p class="p" style="margin: 0; padding: 0; border: 0; font: inherit; font-size: 46px; -webkit-font-smoothing: antialiased; box-sizing: border-box; position: relative; flex: 1; margin-top: -1px; font-family: 'Inter-Regular', Helvetica; font-weight: 400; color: #050315; letter-spacing: 0; line-height: normal; text-align: left">${details}</p>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                    <tr style="height: 20px"></tr>
                    <tr>
                      <td align="left" style="position: relative">
                        <table onclick="location.href='mailto:${email}'" border="0" cellpadding="0" cellspacing="0" class="div-wrapper" style="border-collapse: separate; padding: 18px 45px; border: 0; font: inherit; font-size: 100%; -webkit-font-smoothing: antialiased; box-sizing: border-box; background-color: #5465ff; border-radius: 10px; overflow: hidden; position: relative; text-align: left; height: 0px">
                          <tr style="vertical-align: top">
                            <td align="center" style="position: relative; width: fit-content">
                              <div class="text-wrapper-5" style="margin: 0; padding: 0; border: 0; font: inherit; font-size: 23px; -webkit-font-smoothing: antialiased; box-sizing: border-box; position: relative; width: fit-content; margin-top: -1px; font-family: 'Inter-Medium', Helvetica; font-weight: 500; color: #ffffff; letter-spacing: 0; line-height: normal; text-align: left">Reply</div>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                    <tr style="height: 100%"></tr>
                  </table>
                </td>
              </tr>
              <tr style="height: 100%"></tr>
            </table>
          </body>
        </html>
        `;
    const transporter = nodemailer.createTransport({
      host: 'mail.dondenciong.com.au',
      port: 465,
      secure: true,
      auth: {
        user: 'service@dondenciong.com.au',
        pass: 'tB37pvpH.29A',
      },
    });

    transporter.sendMail(
      {
        from: 'service@dondenciong.com.au',
        to: 'info@dondenciong.com.au',
        subject: 'New Request',
        html: html,
      },
      (error, info) => {
        if (error) {
          return NextResponse.json({ message: 'err' });
        } else {
          return NextResponse.json({ message: 'success' });
        }
      }
    );
    return NextResponse.json({ message: 'success' });
  } catch (error) {
    return NextResponse.json({ message: 'err' });
  }
}

export { handler as POST };
