const sgMail = require("@sendgrid/mail");

exports.handler = async (event) => {
  // destructed data received from client
  const { name, email, message, phone } = JSON.parse(event.body);

  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  const mail = {
    to: email,
    from: process.env.SENDER_EMAIL,
    subject: message,
    html: `Name: ${name} <br /><br /> Email: ${email} <br /><br /> Phone: ${phone} <br /><br /><br />  Message: ${message}`,
  };

  try {
    await sgMail.send(mail);
    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Success sending email" }),
    };
  } catch (error) {
    console.log(error.message);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed sending email" }),
    };
  }
};
