const express = require('express');
const path = require('path');
const axios = require('axios');
const btoa = require('btoa');
const nodemailer = require('nodemailer');
const cors = require('cors');

const username = 'arearealestate';
const password = 'DNwYnF2spxsHQ54U';

const app = express();
app.use(cors());

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.get('/call', async (req, res) => {
  res.send('call API');
});

app.get('/token', async (req, res) => {
  try {
    const response = await axios.get('https://move-api.inhabit.com.au/v1/0/listinglist', {
      headers: {
        Authorization: `Basic ${btoa(`${username}:${password}`)}`,
      },
    });

    // Extract the token from the response
    const token = response.headers['your_token_header_key'];
    console.log('Response Headers:', response.headers);
    console.log('Response Data:', response.data);

    res.send(response.data);
  } catch (error) {
    console.error('Error generating token:', error);
    res.status(500).json({ error: 'Failed to generate token' });
  }
});

app.get('/send-email', async (req, res) => {
  // Fetch the contact form data from the request query parameters
  const { name, email, message, option, phone, address } = req.query;

  // Create a transporter using your email service provider's SMTP settings
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'idthemukanoongo@gmail.com',
      pass: 'bnfwddgyrjqrebeg'
    }
  });

  // Define the email details
  const mailOptions = {
    from: 'admin@area-rewa.com.au',
    to: 'admin@area-rewa.com.au',
    subject: 'Area Real estate Website Visiter Query',
    text: `
      Name: ${name}
      Email: ${email}
      Message: ${message}
      Selected Service: ${option}
      Phone: ${phone}
      Address: ${address}
    `
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.send('Error occurred while sending the email.');
    } else {
      console.log('Email sent: ' + info.response);
      res.send('Email sent successfully.');
    }
  });
});

const port = 3000;

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});