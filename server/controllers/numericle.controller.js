const Numericle = require('../models/numericle.model')


module.exports = {
    
    findEquation: (req, res) => {
        Numericle.findOne({_id: req.params.id})
            .then((oneEquation)=>{
                console.log(oneEquation)
                res.json(oneEquation)
            })
            .catch((err) => {
                console.log(err)
                res.json({message: "An error occurred with findOne Equation query", error:err})
            }) 
    },

    findTodaysEquation: (req, res) => {
        Numericle.findOne({date: req.params.date})
            .then((todaysEquation)=>{
                console.log(todaysEquation)
                res.json(todaysEquation)
            })
            .catch((err) => {
                console.log(err)
                res.json({message: "An error occurred with findTodaysEquation", error:err})
            }) 
    },


    
    findAllEquations: (req, res) => {
        Numericle.find()
            .then((allEquations)=>{
                console.log(allEquations)
                res.json(allEquations)
            })
            .catch((err) => {
                console.log(err)
                res.json({message: "An error occurred with findAllEquations", error:err})
            }) 
    },

    createEquation: (req, res) => {
        Numericle.create(req.body)
            .then((newEquation)=>{
                console.log(newEquation);
                res.json(newEquation)
            })
            .catch((err)=>{
                console.log("An error occurred with createEquation",err)
                res.status(400).json(err)
            })
    },

    deleteEquation: (req, res) => {
        Numericle.deleteOne({_id: req.params.id})
            .then((deletedEquation)=>{
                console.log(deletedEquation);
                res.json(deletedEquation);
            })
            .catch((err)=>{
                console.log("Delete Equation query has failed");
                res.json({message: "Something went wrong with deleteOne query", error: err})
            })
            
    },

    editEquation: (req, res) => {
        Numericle.findOneAndUpdate({_id: req.params.id},
            req.body,
            {new: true, runValidators: true}
            )
            .then((updatedEquation) =>{
                console.log(updatedEquation);
                res.json(updatedEquation);
            })
            .catch((err)=>{
                console.log("Update Equation query has failed");
                res.json({message: "Something went wrong with findOneAndUpdate query", error: err})
            })
    }







}