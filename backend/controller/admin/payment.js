const Razorpay = require('razorpay');


const instance = new Razorpay({
    key_id: process.env.RAZORPAY_API_KEY,
    key_secret: process.env.RAZORPAY_API_SECRET
});

const processPayment = async (req, res) => {
    const options = {
        amount: Number(req.body.amount * 100),
        currency: 'INR'
    };

    try {
        const order = await instance.orders.create(options);
        res.status(200).json({
            success: true,
            order
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Payment processing failed",
            error: error.message
        });
    }
};

const getKey = async (req, res) => {
    res.status(200).json({
        key: process.env.RAZORPAY_API_KEY
    })
}

require('dotenv').config();
const nodemailer = require('nodemailer');

const sendEmail = async (req, res) => {
    const { to, username, tourTitle, passengers, totalPrice } = req.body;

    if (!to || !username || !tourTitle || !Array.isArray(passengers) || !totalPrice) {
        return res.status(400).json({ success: false, error: "Missing required fields" });
    }

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to,
        subject: "Tour Booking Confirmation",
        text: `Hello ${username},

Your booking for "${tourTitle}" is confirmed.

Passengers: ${passengers.length}
Total Price: ₹${totalPrice}

Thanks for booking with us.

- The Tour Team`,
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log("Email sent to:", to);
        res.status(200).json({ success: true });
    } catch (error) {
        console.error("Email sending failed:", error);
        res.status(500).json({ success: false, error: "Failed to send confirmation email" });
    }
};



module.exports = { processPayment, getKey, sendEmail };