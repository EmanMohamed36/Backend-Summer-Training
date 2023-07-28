const express = require("express")

const app = express();

//connect with db
require("./connection/mongoose");


// morgan package 
const morgan = require("morgan");
app.use(morgan("dev"))


//cors package 
const cors = require("cors");
app.use(cors())

// body-parser package 

const bodyParser = require("body-parser")
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))


// routes 

const Client = require("./routes/Client");

app.use('/client' , Client);



// listen port
const port = process.env.PORT || 3000;

app.listen(port , ()=> {
    console.log(`staring with port: ${port}...`)
})