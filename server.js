const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");
require("dotenv").config();
// server used to send send emails
const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(5001, () => console.log("Server Running"));
console.log(process.env.EMAIL_USER);
console.log(process.env.EMAIL_PASS);

const contactEmail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});

router.post("/contact", (req, res) => {
  const { firstName, lastName, email, phone, message } = req.body;



  const fullName = `${firstName} ${lastName}`;

  const mail = {
    from: `"${fullName}" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_USER,
    replyTo: email,
    subject: `📨 New Portfolio Contact from ${fullName}`,
    html: `
      <div style="
        font-family: Arial, Helvetica, sans-serif;
        max-width: 650px;
        margin: auto;
        border: 1px solid #e5e7eb;
        border-radius: 12px;
        overflow: hidden;
        box-shadow: 0 4px 12px rgba(0,0,0,0.1);
      ">

        <!-- Header -->
        <div style="
          background: linear-gradient(135deg, #6a11cb, #2575fc);
          padding: 30px;
          text-align: center;
        ">
          <h1 style="
            color: #ffffff;
            margin: 0;
            font-size: 28px;
          ">
            📩 New Contact Form Submission
          </h1>

          <p style="
            color: rgba(255,255,255,0.9);
            margin-top: 10px;
            font-size: 14px;
          ">
            Portfolio Website Notification
          </p>
        </div>

        <!-- Body -->
        <div style="
          padding: 30px;
          background: #ffffff;
        ">

          <p style="
            font-size: 16px;
            color: #374151;
            margin-bottom: 20px;
          ">
            You have received a new message from your portfolio contact form.
          </p>

          <table style="
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 20px;
          ">

            <tr>
              <td style="
                padding: 12px;
                background: #f9fafb;
                font-weight: bold;
                width: 140px;
                border: 1px solid #e5e7eb;
              ">
                Name
              </td>

              <td style="
                padding: 12px;
                border: 1px solid #e5e7eb;
              ">
                ${fullName}
              </td>
            </tr>

            <tr>
              <td style="
                padding: 12px;
                background: #f9fafb;
                font-weight: bold;
                border: 1px solid #e5e7eb;
              ">
                Email
              </td>

              <td style="
                padding: 12px;
                border: 1px solid #e5e7eb;
              ">
                ${email}
              </td>
            </tr>

            <tr>
              <td style="
                padding: 12px;
                background: #f9fafb;
                font-weight: bold;
                border: 1px solid #e5e7eb;
              ">
                Phone
              </td>

              <td style="
                padding: 12px;
                border: 1px solid #e5e7eb;
              ">
                ${phone || "Not Provided"}
              </td>
            </tr>

            <tr>
              <td style="
                padding: 12px;
                background: #f9fafb;
                font-weight: bold;
                border: 1px solid #e5e7eb;
              ">
                Submitted On
              </td>

              <td style="
                padding: 12px;
                border: 1px solid #e5e7eb;
              ">
                ${new Date().toLocaleString()}
              </td>
            </tr>

          </table>

          <!-- Message -->
          <div style="
            background: #f8fafc;
            border-left: 4px solid #2575fc;
            padding: 20px;
            border-radius: 8px;
          ">

            <h3 style="
              margin-top: 0;
              color: #111827;
            ">
              💬 Message
            </h3>

            <p style="
              color: #374151;
              line-height: 1.7;
              margin: 0;
              white-space: pre-line;
            ">
              ${message}
            </p>

          </div>

        </div>

        <!-- Footer -->
        <div style="
          background: #111827;
          color: #d1d5db;
          text-align: center;
          padding: 20px;
          font-size: 14px;
        ">

          <p style="margin: 0;">
            © ${new Date().getFullYear()} Dinesh Portfolio
          </p>

          <p style="
            margin: 8px 0 0;
            color: #9ca3af;
          ">
            Angular Full Stack Developer
          </p>

        </div>

      </div>
    `,
  };

  contactEmail.sendMail(mail, (error, info) => {
    if (error) {

      return res.status(500).json({
        code: 500,
        status: "Failed",
        message: error.message,
      });
    }


    return res.status(200).json({
      code: 200,
      status: "Message Sent Successfully",
    });
  });
});
app.post("/newsletter", (req, res) => {
  const { email } = req.body;


  const mail = {
    from: `"Dinesh Portfolio" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_USER,
    subject: "🎉 New Newsletter Subscription",
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; border: 1px solid #e5e7eb; border-radius: 12px; overflow: hidden;">
        
        <div style="background: linear-gradient(135deg, #6a11cb, #2575fc); padding: 30px; text-align: center;">
          <h1 style="color: #ffffff; margin: 0;">
            📩 New Newsletter Subscription
          </h1>
        </div>

        <div style="padding: 30px; background: #ffffff;">
          <p style="font-size: 16px; color: #374151;">
            A new user has subscribed to your portfolio newsletter.
          </p>

          <div style="background: #f9fafb; border-left: 4px solid #2575fc; padding: 20px; margin: 20px 0;">
            <p style="margin: 0; color: #111827;">
              <strong>Email Address:</strong><br>
              ${email}
            </p>
          </div>

          <p style="color: #6b7280;">
            Subscription Date:
            <strong>${new Date().toLocaleString()}</strong>
          </p>
        </div>

        <div style="background: #f3f4f6; padding: 20px; text-align: center; color: #6b7280; font-size: 14px;">
          © ${new Date().getFullYear()} Dinesh Portfolio <br>
          Angular Full Stack Developer
        </div>

      </div>
    `,
  };

  contactEmail.sendMail(mail, (error, info) => {
    if (error) {

      return res.status(500).json({
        code: 500,
        message: error.message,
      });
    }

    return res.json({
      code: 200,
      message: "Subscribed Successfully",
    });
  });
});