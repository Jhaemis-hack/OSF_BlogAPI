const blogSchema = require("../server/model/blogSchema");
const userSchema = require("../server/model/userSchema");

const getUsers = async (req, res) =>{
    try {
        const users = await userSchema.find({role: "user"});

    if(!users){
        return res.status(404).json({message: 'No user found', data: []})
    }

    return res.status(200).json({ users })
    } catch (error) {
        console.log(error);
    }
}

const disabledUsers =async (req, res) => {
    try {
        const users = await userSchema.find({role: "user", disabled: true});

    if(!users){
        return res.status(404).json({message: 'No user found', data: []})
    }

    return res.status(200).json({ users })
    } catch (error) {
        
    }
}

const getUser = async (req, res) => {
    try {
        const email = req.params.email

        const user = await userSchema.findOne({email});

        if(!user){
            return res.status(404).json({message: 'User not found', data: []})
        }

        return res.status(200).json({ user })
    } catch (error) {
        console.log(error.message);
        
    }
}

module.exports = {
    getUsers,
    disabledUsers,
    getUser,
 
};