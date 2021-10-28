var express = require('express');
var app = express();
var mongoose = require('mongoose');
const cors = require('cors');
const exercisesRouter = require("./routes/exercises.js");
const usersRouter = require("./routes/users.js");

app.use(express.json())
app.use(cors())
require('dotenv').config();

var port = process.env.PORT||4000;


const uri = process.env.ATLAS_URI;
mongoose.connect(uri)

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("connection between the database has been established");
})

app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter)



app.listen(port, () => {
    console.log("currently using port "+ port)
})