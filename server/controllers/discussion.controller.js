const Discussion = require('../models/discussion.model')

module.exports = {
    
    findPost: (req, res) => {
        Discussion.findOne({_id: req.params.id})
            .then((onePost)=>{
                console.log(onePost)
                res.json(onePost)
            })
            .catch((err) => {
                console.log(err)
                res.json({message: "An error occurred with findOnePost", error:err})
            }) 
    },
    
    findAllPosts: (req, res) => {
        Discussion.find()
            .then((allPosts)=>{
                console.log(allPosts)
                res.json(allPosts)
            })
            .catch((err) => {
                console.log(err)
                res.json({message: "An error occurred with findAllPosts", error:err})
            }) 
    },

    createPost: (req, res) => {
        Discussion.create(req.body)
            .then((newPost)=>{
                console.log(newPost);
                res.json(newPost)
            })
            .catch((err)=>{
                console.log("An error occurred with createPost")
                res.status(400).json(err)
            })
    },

    deletePost: (req, res) => {
        Discussion.deleteOne({_id: req.params.id})
            .then((deletedPost)=>{
                console.log(deletedPost);
                res.json(deletedPost);
            })
            .catch((err)=>{
                console.log("Delete Post query has failed");
                res.json({message: "Something went wrong with deleteOnePost query", error: err})
            })
            
    },

    editPost: (req, res) => {
        Discussion.findOneAndUpdate({_id: req.params.id},
            req.body,
            {new: true, runValidators: true}
            )
            .then((updatedPost) =>{
                console.log(updatedPost);
                res.json(updatedPost);
            })
            .catch((err)=>{
                console.log("Update Post query has failed");
                res.json({message: "Something went wrong with findOneAndUpdatePost query", error: err})
            })
    }







}