const nodemailer = require('nodemailer');

const sendEmail = (options) => {
  //1) Create a transporter
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
    // ACTIVATE IN GMAIL "LESS SECURE APP' OPTION
  });
  // 2) DEFINE THE EMAIL OPTIONS

  //3) ACTUALLYSEND THE EMAIL
};
