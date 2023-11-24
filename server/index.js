//backend libraries - express,mongoose,body-parser,cors,nodemon
//additional libraries - dotenv,bcrypt,jwt

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const allroutes = require('./routes/index')

const app = express();
app.use(cors({
    origin:"*",
    credentials: true,
    methods:["GET","POST","DELETE","PUT","PATCH"]
}))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

mongoose.connect('mongodb://127.0.0.1:27017/Todonotes')
.then(() => {
    console.log("Connected to database");
})
.catch((error) => {
    console.log("Error connecting to database",error)
})

app.use('/',allroutes);

app.listen(5000,() => {
    console.log("Server is running on port 5000");
})

