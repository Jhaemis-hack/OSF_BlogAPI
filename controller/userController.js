const { JsonWebTokenError } = require('jsonwebtoken');
const User = require('../model/userSchema');
const bcrypt = require('bcrypt');

const SignUp = async (req, res) => {
    try {
        const {firstName, lastName, email, password} = req.body;

        const userExist = await User.findOne({ email: email});

        if(userExist){
            return res.status(400).json({ message: 'User already exists'});
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = new User({
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: hashedPassword
        });

        await user.save();
        return res.status(201).json({msg: 'User saved successfully'});
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Server Error'});
        
    }
}

const logIn = async (req, res) => {
    try {
        const {email, password} = req.body;

        const isValidUser = await User.findOne({email: email});

        if(!isValidUser){
            return res.status(400).json({ message: 'User not found'});
            
        }

        const isMatch = await bcrypt.compare(password, isValidUser.password);

        if(!isMatch) {
            return res.status(401).json({ message: 'Invalid credentials'});
        }

        if(isMatch.disabled == true ) {
            return res.status(403).json({ message: "Log In Failed", message: 'Your account has been locked.' });
        }

        const token = jwt.sign({ 
            id: isValidUser._id,
            email: isValidUser.email,
            role: isValidUser.role
        }, 
            process.env.JWT_SECRET, 
            { 
                expiresIn: '1h' 
            });
        return res.status(201).json(({msg: 'Login successful', token: token}))
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Server Error'});
        
    }
}
    















        // return res.status(201).json(({msg: 'Login successful'}))

module.exports = { SignUp, logIn }