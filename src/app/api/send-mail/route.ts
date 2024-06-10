import { NextRequest, NextResponse } from 'next/server';
import { createTransport } from 'nodemailer';

async function handler(req: NextRequest) {
  try {
    const { name, streetAddress, suburb, email, mobileNumber, service, details } = await req.json();
    console.log(service)
    const html = `
          <div style="background-color: #99afff20">
            <table style="background-color: #99afff20; padding: 20px; width: 100%;">
                <tr>
                    <td style="background-color: #788bff; color: #fff; font-family: Arial, Helvetica, sans-serif; padding: 15px; text-align: start;">
                        <h1 style="margin: 0;">New Request</h1>
                    </td>
                </tr>
            </table>
            <table style="background-color: #99afff20; padding: 20px; width: 100%; margin-bottom: 50px;">
                <tr>
                    <td style="font-family: Arial, Helvetica, sans-serif; font-weight: bold; width: 10em; padding-top: 12px;">Name:</td>
                    <td style="font-family: Arial, Helvetica, sans-serif; padding-top: 12px;">${name}</td>
                </tr>
                <tr>
                    <td style="font-family: Arial, Helvetica, sans-serif; font-weight: bold; padding-top: 12px;">Address:</td>
                    <td style="font-family: Arial, Helvetica, sans-serif; padding-top: 12px;">${streetAddress}</td>
                </tr>
                <tr>
                    <td style="font-family: Arial, Helvetica, sans-serif; font-weight: bold; padding-top: 12px;">Suburb:</td>
                    <td style="font-family: Arial, Helvetica, sans-serif; padding-top: 12px;">${suburb}</td>
                </tr>
                <tr>
                    <td style="font-family: Arial, Helvetica, sans-serif; font-weight: bold; padding-top: 12px;">Email:</td>
                    <td style="font-family: Arial, Helvetica, sans-serif; padding-top: 12px;">${email}</td>
                </tr>
                <tr>
                    <td style="font-family: Arial, Helvetica, sans-serif; font-weight: bold; padding-top: 12px;">Mobile Number:</td>
                    <td style="font-family: Arial, Helvetica, sans-serif; padding-top: 12px;">${mobileNumber}</td>
                </tr>
                <tr>
                    <td style="font-family: Arial, Helvetica, sans-serif; font-weight: bold; padding-top: 12px;">Service:</td>
                    <td style="font-family: Arial, Helvetica, sans-serif; padding-top: 12px;">${service}</td>
                </tr>
                <tr>
                    <td style="font-family: Arial, Helvetica, sans-serif; font-weight: bold; padding-top: 12px;">Details:</td>
                    <td style="font-family: Arial, Helvetica, sans-serif; padding-top: 12px;">${details}</td>
                </tr>
            </table>
            <a style="background-color: #5465ff; width: fit-content; padding: 12px 50px; font-family: Arial, Helvetica, sans-serif; text-decoration: none; color: white; border-radius: 4px" href="mailto:${email}">Reply</a>
          </div>
        `;

    const transporter = createTransport({
      host: 'mail.dondenciong.com.au',
      port: 465,
      secure: true,
      auth: {
        user: 'service@dondenciong.com.au',
        pass: 'tB37pvpH.29A',
      },
    });

    const endpoint = createTransport({
      host: 'mail.dondenciong.com.au',
      port: 465,
      secure: true,
      auth: {
        user: 'info@dondenciong.com.au',
        pass: 'eVKy59vLghe2xMr',
      },
    });

    await endpoint.sendMail({
      from: 'info@dondenciong.com.au',
      to: email,
      subject: 'Cleaning Enquiry Received',
      html: `
      <table style="font-family: Arial, Helvetica, sans-serif">
        <tr>
          <td>
            <table style="background-color: #99afff20; width: 100%">
              <tr>
                <td style="background-color: #788bff; color: #fff; padding: 30px 15px; text-align: center">
                  <h1 style="margin: 0; font-size: 40px">Enquiry Received</h1>
                </td>
              </tr>
            </table>
            <table style="background-color: #99afff20; padding: 50px 25px; font-size: 25px">
              <tr>
                <td><p>Thank you for your enquiry regarding our cleaning services. We appreciate the opportunity to assist you with your cleaning needs. We've received your request and will review it carefully to ensure we understand your requirements fully. Our team will reach out shortly to discuss your specific needs and provide you with a tailored cleaning solution. Thank you for considering us, and we look forward to working with you!</p></td>
              </tr>
              <tr>
                <td><p style="padding-top: 60px">Best Regards</p></td>
              </tr>
              <tr>
                <td><p>Don Denciong Cleaning Services</p></td>
              </tr>
            </table>
          </td>
        </tr>
      </table>

      `,
    });

    await transporter.sendMail({
      from: 'service@dondenciong.com.au',
      to: 'info@dondenciong.com.au',
      subject: 'New Request',
      html,
    });

    return new NextResponse(JSON.stringify({ message: 'Success' }), { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: 'err' });
  }
}

export { handler as POST };
