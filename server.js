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



// Helper function to format Hero form details into HTML
const formatHeroFormDetailsToHTML = (formDetails) => {
  return `
    <h1>New Hero Form Submission</h1>
    <p><strong>Service:</strong> ${formDetails.service}</p>
    <p><strong>Full Name:</strong> ${formDetails.fullName}</p>
    <p><strong>Email:</strong> ${formDetails.email}</p>
    <p><strong>Phone Number:</strong> ${formDetails.phoneNumber}</p>
    <p><strong>Subject/Course Code:</strong> ${formDetails.subject}</p>
    <p><strong>Assignment Description:</strong> ${formDetails.description}</p>
  `;
};


// API Route to handle Hero form submission
app.post('/submit-hero-form', upload.single('file'), (req, res) => {
  try {
    console.log('Hero form details received:', req.body);
    const formDetails = req.body;
    const file = req.file;

    console.log('File received:', file);

    const attachments = file ? [{
      filename: file.originalname,
      content: file.buffer
    }] : [];

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: 'New Hero Order Submission',
      html: formatHeroFormDetailsToHTML(formDetails),
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
    console.error('Error processing form:', err);
    res.status(500).send('Error processing form');
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
  console.log('Received contact form submission:', req.body);
  const { fullName, email, phone, message } = req.body;

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    subject: 'New Contact Us Message',
    html: formatContactUsDetailsToHTML({ fullName, email, phone, message })
  };

  console.log('Attempting to send email with options:', mailOptions);

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

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
