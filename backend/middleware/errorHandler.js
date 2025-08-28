module.exports = (err, req, res, next) => {
    console.error('Unhandled Error:', err);
    res.status(500).json({
        success: false,
        message: 'Something went wrong, please try again later.'
    });
};