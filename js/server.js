const express = require('express');
const app = express();
const nodemailer = require('nodemailer');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post('/submit-form', (req, res) => {
  const { name, email, message } = req.body;

  // Perform form validation and any other necessary processing
  // ...

  // Send email using Nodemailer
  const transporter = nodemailer.createTransport({
    // Configure your email provider's SMTP settings
    // ...
  });

  const mailOptions = {
    from: email, // Use the email address entered by the form submitter as the sender
    to: 'bwarenghezron@gmail.com', // Replace with the recipient's email address
    subject: 'New Message from Contact Form',
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log('Error sending email:', error);
      res.status(500).send('An error occurred. Please try again later.');
    } else {
      console.log('Email sent:', info.response);
      res.status(200).send('Message sent successfully!');
    }
  });
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
