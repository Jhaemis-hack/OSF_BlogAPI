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

const getDisabledUsers = async (req, res) =>{
    try {
        const users = await userSchema.find({role: "user", disabled: true});

    if(!users){
        return res.status(404).json({message: 'No user found', data: []})
    }

    return res.status(200).json({ users })
    } catch (error) {
        console.log(error);
    }
}

const disableUsers =async (req, res) => {
    try {
        const id = req.params.id

        const users = await userSchema.find({_id: id});

    if(!users){
        return res.status(404).json({message: 'No user found', data: []})
    }

    const { disabled } =req.body;

    if(!disabled ){
        return res.status(400).json({message: 'Invalid request, disabled field is required', data: null})
    }
    
    const updatedDisabled = await userSchema.findByIdAndUpdate(id, {$set: {disabled: disabled}},{ new: true })    

    if(disabled == "false"){
        return res.status(200).json({message: 'User enabled successfully', updatedDisabled})
    }

    return res.status(200).json({ message: "user disabled successfullly", updatedDisabled})
    } catch (error) {
        console.log(error.message);
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
    disableUsers,
    getUser,
    getDisabledUsers,
};