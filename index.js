const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const studentRoute = require('./routes/studentRoute')
const authRoute = require('./routes/authRoute')

dotenv.config();

const port = process.env.PORT || 5000;
const app = express();

app.use(express.urlencoded());

app.use('/auth', authRoute)
app.use('/', studentRoute)

mongoose.connect(`mongodb+srv://test1234:baka1234@cluster0.vugwe.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`).then(()=>{
    console.log("Connected to DB.");
    app.listen(port, ()=>{
        console.log(`Listening to port ${port}`);
    })
}).catch(err=>{
    console.log(err.messages);
})