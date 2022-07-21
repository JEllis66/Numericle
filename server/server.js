const express = require("express")
const cors = require("cors")
const app = express()

app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(cors({
    origin: "http://localhost:3000"
}))

require("./config/mongoose.config");
require("./routes/numericle.routes")(app);
require("./routes/user.routes")(app);
require("./routes/discussion.routes")(app);

const portNumber = 8000;
app.listen(portNumber, ()=>console.log(`You have successfully connected to port ${portNumber}!`));
