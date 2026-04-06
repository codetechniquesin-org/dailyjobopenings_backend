const nodemailer = require("nodemailer");

// const transporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: process.env.EMAIL,
//     pass: process.env.PASSWORD
//   }
// });
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD
  }
});
const sendEmail = async (to, subject, html) => {
  try {
    const info = await transporter.sendMail({
      from: `"Daily Job Openings" <${process.env.EMAIL}>`,
      to,
      subject,
      html
    });

    console.log("✅ Email sent:", info.response);
  } catch (error) {
    console.error("❌ Email error:", error);
    throw error; // VERY IMPORTANT
  }
};

transporter.verify((error, success) => {
  if (error) {
    console.error("❌ SMTP Error:", error);
  } else {
    console.log("✅ SMTP Server is ready");
  }
});


module.exports = sendEmail;