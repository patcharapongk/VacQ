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

        // Create JWT Token (by signing ID)
        const token = user.getSignedJwtToken();

        res.status(200).json({ success: true, token});
    }
    catch (error) {
        res.status(400).json({ success: false, error: error.message });
        console.log(err.stack);
    }
}

//@desc    Login user  
//@route   POST /api/v1/auth/login
//@access  Public
exports.login = async (req, res, next) => {
    const {email, password} = req.body;

    if (!email || !password) {
        return res.status(400).json({ success: false, error: "Please provide email and password"});
    }

    // retreive user from DB
    const user = await User.findOne({email}).select('+password');

    if (!user) {
        return res.status(401).json({ success: false, error: "Invalid credentials"});
    }

    // Check if password matches
    const isMatch = await user.matchPassword(password);

    const token = user.getSignedJwtToken();
    res.status(200).json({ success: true, token});
}