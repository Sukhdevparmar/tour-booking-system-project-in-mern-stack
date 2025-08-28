const jwt = require("jsonwebtoken");
const User = require('../../../models/User');

exports.register = async (req, res, next) => {
    try {
        const { username, email, password } = req.body;

        if (!username || !email || !password) {
            return res.status(400).json({ msg: "Please add all values in the request body" });
        }

        const foundUser = await User.findOne({ email });
        if (foundUser) {
            return res.status(400).json({ msg: "Email already in use" });
        }

        const person = new User({
            name: username,
            email,
            password,
        });

        await person.save();

        const { _id, name } = person;
        res.status(201).json({ User: { _id, name, email } });

    } catch (err) {
        next(err);
    }
};

exports.login = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                msg: "Bad request. Please add email and password in the request body",
            });
        }

        const foundUser = await User.findOne({ email });
        if (!foundUser) {
            return res.status(400).json({ msg: "Invalid email or password" });
        }

        const isMatch = await foundUser.comparePassword(password);
        if (!isMatch) {
            return res.status(400).json({ msg: "Invalid email or password" });
        }

        const token = jwt.sign(
            { id: foundUser._id, name: foundUser.name },
            process.env.JWT_SECRET,
            { expiresIn: "30d" }
        );

        res.status(200).json({ msg: "User logged in", token });
    } catch (err) {
        next(err);
    }
};


exports.changePassword = async (req, res, next) => {
    try {
        const { email, currentPassword, newPassword } = req.body;

        if (!email || !currentPassword || !newPassword) {
            return res.status(400).json({ msg: "Please provide email, current password, and new password" });
        }

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({ msg: "User not found" });
        }

        const isMatch = await user.comparePassword(currentPassword);
        if (!isMatch) {
            return res.status(400).json({ msg: "Current password is incorrect" });
        }

        user.password = newPassword;
        await user.save();

        res.status(200).json({ msg: "Password changed successfully" });

    } catch (err) {
        next(err);
    }
};
