import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const { name, email, message, phone, city  } = await req.json();

        if (!name || !email || !phone) {
            return NextResponse.json({ success: false, message: "Missing fields" });
        }

        // SMTP transporter
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        });

        await transporter.sendMail({
            from: `Website Form" <${'onlinequrancourse.com'}>`,
            to: email,
            subject: "Sispn Tech Lead Form",
            html: `
   <body
  style="
    margin: 0;
    padding: 0;
    background-color: #0b0b0b;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  "
>
  <table width="100%" cellpadding="0" cellspacing="0" border="0">
    <tr>
      <td align="center" style="padding: 20px 10px">

        <!-- MAIN BOX -->
        <table
          width="620"
          cellpadding="0"
          cellspacing="0"
          style="
            background: #111;
            border-radius: 10px;
            overflow: hidden;
            box-shadow: 0 6px 25px rgba(0,0,0,0.4);
          "
        >
          <!-- TOP BAR -->
          <tr>
            <td style="height:6px; background: linear-gradient(90deg,#B83DC8,#672b6c);"></td>
          </tr>

          <!-- HERO IMAGE -->
          <tr>
            <td>
              <img
                src="https://res.cloudinary.com/dvcfuwk8i/image/upload/v1776730910/logo_mwainc.png"
                width="100%"
                style="display:block;"
              />
            </td>
          </tr>

          <!-- CONTENT -->
          <tr>
            <td style="padding:40px 45px; color:#ffffff;">

              <p style="font-size:16px; color:#ddd;">
                Hello <strong style="color:#B83DC8;">${name}</strong>,
              </p>

              <p style="font-size:16px; line-height:1.7; color:#ccc;">
                You have received a new <strong style="color:#B83DC8;">Tech Service Inquiry</strong> from your website.
                A potential client has submitted their details. Please review and respond as soon as possible.
              </p>

              <p style="margin-top:20px; font-size:16px; color:#fff;">
                Lead Details:
              </p>

              <!-- USER INFO -->
              <table
                width="100%"
                cellpadding="10"
                cellspacing="0"
                style="
                  border:1px solid #333;
                  border-radius:6px;
                  margin-top:10px;
                  color:#fff;
                "
              >
                <tr style="background:#1a1a1a;">
                  <td><strong>Name:</strong></td>
                  <td>${name}</td>
                </tr>
                <tr>
                  <td><strong>Email:</strong></td>
                  <td>${email}</td>
                </tr>
                <tr style="background:#1a1a1a;">
                  <td><strong>Phone:</strong></td>
                  <td>${phone}</td>
                </tr>
                <tr>
                  <td><strong>Country/City:</strong></td>
                  <td>${city}</td>
                </tr>
                <tr style="background:#1a1a1a;">
                  <td><strong>Service Interested:</strong></td>
                  <td>${message}</td>
                </tr>
              </table>

              <!-- BUTTON -->
              <table width="100%" style="margin-top:30px;">
                <tr>
                  <td align="center">
                    <a
                      href="https://sispntech.com"
                      style="
                        background: linear-gradient(90deg,#B83DC8,#672b6c);
                        color:#ffffff;
                        padding:14px 28px;
                        text-decoration:none;
                        border-radius:6px;
                        font-weight:600;
                        display:inline-block;
                      "
                    >
                      View Website
                    </a>
                  </td>
                </tr>
              </table>

              <p style="margin-top:30px; font-size:14px; color:#bbb;">
                This is an automated lead notification from your website contact form.
              </p>

              <p style="font-size:14px; color:#bbb;">
                Regards,<br />
                <strong style="color:#B83DC8;">Sispn Tech System</strong>
              </p>

            </td>
          </tr>

          <!-- FOOTER -->
          <tr>
            <td
              style="
                background:#0a0a0a;
                text-align:center;
                padding:20px;
                font-size:13px;
                color:#888;
              "
            >
              info@sispntech.com <br />
              www.sispntech.com
            </td>
          </tr>

        </table>

      </td>
    </tr>
  </table>
</body>   `
        });

        return NextResponse.json({ success: true });

    } catch (error) {

        console.log(error);

        return NextResponse.json({
            success: false,
            message: "Server error"
        });
    }
}