const express = require('express');
const path = require('path');
const nodemailer = require('nodemailer');
const multer = require('multer');
const fs = require('fs');
const app = express();

const PORT = process.env.PORT || 3001;
const upload = multer({ dest: 'uploads/' });

// Middleware to parse JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve the React app
app.use(express.static(path.join(__dirname, 'client/build')));

app.post('/submit-order', upload.array('files'), (req, res) => {
  const { email, orderType, deadlineDate, deadlineTime, pages, citedResources, formattingStyle, subject, topic, detailedInstructions } = JSON.parse(req.body.orderDetails);
  const files = req.files;

  console.log('Order details received:', req.body.orderDetails);
  console.log('Files received:', files);

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  const attachments = files.map(file => ({
    filename: file.originalname,
    path: file.path
  }));

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    subject: 'New Order Submission',
    html: `
      <h1>Order Details</h1>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Order Type:</strong> ${orderType}</p>
      <p><strong>Deadline Date:</strong> ${deadlineDate}</p>
      <p><strong>Deadline Time:</strong> ${deadlineTime}</p>
      <p><strong>Pages:</strong> ${pages}</p>
      <p><strong>Cited Resources:</strong> ${citedResources}</p>
      <p><strong>Formatting Style:</strong> ${formattingStyle}</p>
      <p><strong>Subject:</strong> ${subject}</p>
      <p><strong>Topic:</strong> ${topic}</p>
      <p><strong>Detailed Instructions:</strong> ${detailedInstructions}</p>
    `,
    attachments: attachments
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      return res.status(500).send('Error submitting order. Please try again.');
    } else {
      console.log('Email sent:', info.response);
      files.forEach(file => fs.unlinkSync(file.path)); // Delete files after sending
      return res.status(200).send('Order submitted successfully!');
    }
  });
});

// Catch-all handler for any other requests
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
