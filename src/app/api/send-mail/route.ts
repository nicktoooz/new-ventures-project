import { NextRequest, NextResponse } from 'next/server';
import { createTransport } from 'nodemailer';

async function handler(req: NextRequest) {
  try {
    const { name, streetAddress, suburb, email, mobileNumber, service, details } = await req.json();
    const html = `
          <div>
            <div style="background-color: #788bff; display: flex; padding: 1.5em; justify-content: space-between; align-items: center">
              <h1 style="margin: 0; color: #fff; font-family: Arial, Helvetica, sans-serif">New Request</h1>
            </div>
            <div style="background-color: #99afff20; padding: 1em">
              <div style="display: grid; grid-template-columns: 10em auto">
                <p style="font-family: Arial, Helvetica, sans-serif; font-weight: bold">Name:</p>
                <p style="font-family: Arial, Helvetica, sans-serif">${name}</p>
                <p style="font-family: Arial, Helvetica, sans-serif; font-weight: bold">Address:</p>
                <p style="font-family: Arial, Helvetica, sans-serif">${streetAddress}</p>
                <p style="font-family: Arial, Helvetica, sans-serif; font-weight: bold">Suburb:</p>
                <p style="font-family: Arial, Helvetica, sans-serif">${suburb}</p>
                <p style="font-family: Arial, Helvetica, sans-serif; font-weight: bold">Email:</p>
                <p style="font-family: Arial, Helvetica, sans-serif">${email}</p>
                <p style="font-family: Arial, Helvetica, sans-serif; font-weight: bold">Mobile Number:</p>
                <p style="font-family: Arial, Helvetica, sans-serif">${mobileNumber}</p>
                <p style="font-family: Arial, Helvetica, sans-serif; font-weight: bold">Service:</p>
                <p style="font-family: Arial, Helvetica, sans-serif">${service}</p>
                <p style="font-family: Arial, Helvetica, sans-serif; font-weight: bold">Details:</p>
                <p style="font-family: Arial, Helvetica, sans-serif">${details}</p>
                <a style="background-color: #5465ff; width: fit-content; padding: 12px 50px; font-family: Arial, Helvetica, sans-serif; text-decoration: none; color: white; border-radius: 4px" href="mailto:${email}">Reply</a>
              </div>
            </div>
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
