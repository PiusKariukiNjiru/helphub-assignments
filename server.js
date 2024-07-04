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
  const files = orderDetails.files && orderDetails.files.length > 0 ? orderDetails.files.join(', ') : 'No files attached';
  return `
    <h1>New Order Received</h1>
    <p><strong>Order Type:</strong> ${orderDetails.orderType}</p>
    <p><strong>Deadline Date:</strong> ${orderDetails.deadlineDate}</p>
    <p><strong>Deadline Time:</strong> ${orderDetails.deadlineTime}</p>
    <p><strong>Pages:</strong> ${orderDetails.pages}</p>
    <p><strong>Cited Resources:</strong> ${orderDetails.citedResources}</p>
    <p><strong>Formatting Style:</strong> ${orderDetails.formattingStyle}</p>
    <p><strong>Subject:</strong> ${orderDetails.subject}</p>
    <p><strong>Topic:</strong> ${orderDetails.topic}</p>
    <p><strong>Detailed Instructions:</strong> ${orderDetails.detailedInstructions}</p>
    <p><strong>Attached Files:</strong> ${files}</p>
  `;
};

// API Route to handle order form submission
app.post('/submit-order', upload.array('files'), (req, res) => {
  try {
    console.log('Order details received:', req.body.orderDetails);
    const orderDetails = JSON.parse(req.body.orderDetails);
    const files = req.files;

    console.log('Files received:', files);

    const attachments = files.map(file => ({
      filename: file.originalname,
      content: file.buffer
    }));

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: 'New Order Received',
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

// Helper function to format contact us details into HTML
const formatContactUsDetailsToHTML = (contactDetails) => {
  return `
    <h1>Contact Us Message</h1>
    <p><strong>Full Name:</strong> ${contactDetails.fullName}</p>
    <p><strong>Email:</strong> ${contactDetails.email}</p>
    <p><strong>Phone:</strong> ${contactDetails.phone}</p>
    <p><strong>Message:</strong> ${contactDetails.message}</p>
  `;
};

// API Route to handle contact form submission
app.post('/send-message', (req, res) => {
  const { fullName, email, phone, message } = req.body;

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    subject: 'New Contact Us Message',
    html: formatContactUsDetailsToHTML({ fullName, email, phone, message })
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      res.status(500).send('Error sending email');
    } else {
      console.log('Email sent:', info.response);
      res.status(200).send('Message sent successfully');
    }
  });
});

// Catch-all handler for any requests that don't match the ones above
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
