const mongoose = require("mongoose")

const DiscussionSchema = new mongoose.Schema({

    //_id

    name: {
        type: String,
        required: [true, "You must enter a name"],
        minlength: [2, "The name must be at least 2 characters in length!"]
    },

    date: {
        type: Date,
        required: [true, "You must enter a date for this post!"]
    },

    description: {
        type: String,
        required: [true, "You must enter a description for your discussion post!"],
        minlength: [10, "The name must be at least 10 characters in length!"]
    },

}, {timestamps: true})


const Discussion = mongoose.model("Discussion", DiscussionSchema)

module.exports = Discussion;