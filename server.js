const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const path = require('path');
const multer = require('multer');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'build')));

// Multer setup for file uploads
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Nodemailer transporter setup
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// Helper function to format order details into HTML
const formatOrderDetailsToHTML = (orderDetails) => {
  return `
    <h1>New Order Submission</h1>
    <p><strong>Email:</strong> ${orderDetails.email}</p>
    <p><strong>Order Type:</strong> ${orderDetails.orderType}</p>
    <p><strong>Academic Level:</strong> ${orderDetails.level}</p>
    <p><strong>Deadline:</strong> ${orderDetails.deadline}</p>
    <p><strong>Pages:</strong> ${orderDetails.pages}</p>
    <p><strong>Number of Cited Resources:</strong> ${orderDetails.resources}</p>
    <p><strong>Formatting Style:</strong> ${orderDetails.formattingStyle} ${orderDetails.otherFormattingStyle ? `(${orderDetails.otherFormattingStyle})` : ''}</p>
    <p><strong>Subject:</strong> ${orderDetails.subject}</p>
    <p><strong>Topic:</strong> ${orderDetails.topic}</p>
    <p><strong>Instructions:</strong> ${orderDetails.instructions}</p>
    <p><strong>Price:</strong> $${orderDetails.price}</p>
  `;
};

// API Route to handle order submission
app.post('/submit-order', upload.array('files'), (req, res) => {
  try {
    console.log('Order details received:', req.body);
    const orderDetails = req.body;
    const files = req.files;

    console.log('Files received:', files);

    const attachments = files ? files.map(file => ({
      filename: file.originalname,
      content: file.buffer
    })) : [];

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: 'New Order Submission',
      html: formatOrderDetailsToHTML(orderDetails),
      attachments: attachments
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error sending email:', error);
        res.status(500).send('Error sending email');
      } else {
        console.log('Email sent:', info.response);
        res.status(200).send('Order submitted successfully');
      }
    });
  } catch (err) {
    console.error('Error processing order:', err);
    res.status(500).send('Error processing order');
  }
});

// Catch-all handler for any requests that don't match the ones above
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
