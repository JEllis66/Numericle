const mongoose = require("mongoose")

const isValidEmail = function(email) { 
    var testCase = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; 
    return testCase.test(email) 
}

const UserSchema = new mongoose.Schema({

    //_id

    firstName: {
        type: String,
        required: [true, "You must enter a first name"],
        minlength: [2, "User's first name must be at least 2 characters in length!"]
    },

    lastName: {
        type: String,
        required: [true, "You must enter a last name!"],
        minlength: [2, "User's last name must be at least 2 characters in length!"]
    },

    username: {
        type: String,
        required: [true, "You must enter a username for the account!"],
        lowercase: true,
        unique: [true, "Please choose a unique username."]
    },

    email: {
        type: String,
        required: [true, "You must an email address for the User!"],
        trim: true,
        lowercase: true,
        unique: [true, "Please choose a unique email address."],
        validate: [isValidEmail, "Please enter a valid email address!"],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "Please enter a valid email address!"]
    },

    password: {
        type: String,
        required: [true, "You must enter a password for the User!"],
        minlength: [8, "Your password must be at least 8 characters in length!!"],
        maxlength: [12, "Your password can be no longer than 12 characters in length!!"]
    },

    confirmPassword: {
        type: String,
        required: [true, "You must enter a password for the User!"],
        match: [this.confirmPassword == this.password, "Your password entries must match!!"]
    },

    gamesPlayed: {
        type: String,
    },

    winPercent: {
        type: String
    },

    oneGuessWin: {
        type: String,
    },

    twoGuessWin: {
        type: String,
    },

    threeGuessWin: {
        type: String,
    },
    
    fourGuessWin: {
        type: String,
    },

    fiveGuessWin: {
        type: String,
    },

    sixGuessWin: {
        type: String,
    },

    alternateSolution: {
        type: String,
    },

}, {timestamps: true})


const User = mongoose.model("User", UserSchema)

module.exports = User;