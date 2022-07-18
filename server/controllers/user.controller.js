const User = require('../models/user.model')

module.exports = {
    
    findOneUser: (req, res) => {
        Numericle.findOne({_id: req.params.id})
            .then((oneUser)=>{
                console.log(oneUser)
                res.json(oneUser)
            })
            .catch((err) => {
                console.log(err)
                res.json({message: "An error occurred with findOne", error:err})
            }) 
    },
    
    findAllUsers: (req, res) => {
        Numericle.find()
            .then((allUsers)=>{
                console.log(allUsers)
                res.json(allUsers)
            })
            .catch((err) => {
                console.log(err)
                res.json({message: "An error occurred with findAllUsers", error:err})
            }) 
    },

    createUser: (req, res) => {
        Numericle.create(req.body)
            .then((newUser)=>{
                console.log(newUser);
                res.json(newUser)
            })
            .catch((err)=>{
                console.log("An error occurred with createUser")
                res.status(400).json(err)
            })
    },

    deleteUser: (req, res) => {
        Numericle.deleteOne({_id: req.params.id})
            .then((deletedUser)=>{
                console.log(deletedUser);
                res.json(deletedUser);
            })
            .catch((err)=>{
                console.log("Delete User query has failed");
                res.json({message: "Something went wrong with deleteOne query", error: err})
            })
            
    },

    editUser: (req, res) => {
        Numericle.findOneAndUpdate({_id: req.params.id},
            req.body,
            {new: true, runValidators: true}
            )
            .then((updatedUser) =>{
                console.log(updatedUser);
                res.json(updatedUser);
            })
            .catch((err)=>{
                console.log("Update User query has failed");
                res.json({message: "Something went wrong with findOneAndUpdate query", error: err})
            })
    }







}