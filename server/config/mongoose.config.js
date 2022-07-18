const mongoose = require("mongoose")

const dbName = "numericleDB"


mongoose.connect(`mongodb://localhost/${dbName}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log(`You are connected to the ${dbName} database!`)
    })
    .catch((err) => {
        console.log(`You had a problem connecting to the ${dbName} database.`)
        console.log(err)
    })