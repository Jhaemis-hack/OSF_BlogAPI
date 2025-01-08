require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const connectDB = require('./server/config/server');
const { errorMonitor } = require('nodemailer/lib/xoauth2');
const app = express();

app.use(morgan('dev'))
app.use(express.json())
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

connectDB()

app.use('', require('./server/routes/userRoute'))

app.listen(process.env.PORT, (err, res)=>{
    console.log(`app listenning at : http://localhost:${process.env.PORT}`)
})