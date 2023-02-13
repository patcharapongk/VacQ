const User = require('../models/UserModel');


//@desc    Register user
//@route   POST /api/v1/auth/register
//@access  Public
exports.register = async (req, res, next) => {
    try {

        if (!req.body || Object.keys(req.body).length === 0) {
            const errmsg = "No data provided in request body";
            console.log(errmsg);
            return res.status(400).json({ success: false, error: "No data provided in request body"});
        } 

        const { name, email, password, role } = req.body;

        if (!name || !email || !password ) {
            const errmsg = "Please provide name, email and password";
            console.log(errmsg);
            return res.status(400).json({ success: false, error: errmsg});
        }

        const user = await User.create({
            name,
            email,
            password,
            role
        })
        res.status(200).json({ success: true });
    }
    catch (error) {
        res.status(400).json({ success: false, error: error.message });
        console.log(err.stack);
    }
}