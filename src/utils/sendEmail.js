const nodemailer = require("nodemailer");


    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "ajilalitha01@gmail.com",
        pass: "zdhc pagt datl hwnk",
      },
      tls: {
        rejectUnauthorized: false // Disable SSL verification for debugging (not recommended for production)
            }
    });

const sendMailToUser = async(mailData) => {
    await  transporter.sendMail(mailData);
   }


const mailSend = async (email, userName, password) => {
    try {
    let mailOptions = {
      from: process.env.EMAIL_ID,
      to: email,
      subject: "Welcome to our Shopping platform", 
      text: `Hello ${userName}. This is your password: ${password}`,
    };

    await sendMailToUser(mailOptions);
    console.log("Mail sent");
  } catch (error) {
    console.log(error);
  }
};

module.exports = mailSend;