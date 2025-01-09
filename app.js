require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const connectDB = require('./server/config/server');
const { errorMonitor } = require('nodemailer/lib/xoauth2');
const app = express();

app.use(morgan('dev'))
app.use(express.json())
const bodyParser = require('body-parser');
const { jwtCheck, jwtAuth } = require('./Protection/Auth-Config/Auth');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

connectDB()

app.use('', require('./server/routes/userRoute'))
app.use('', require('./server/routes/adminRoute'))

app.use(jwtCheck())
app.use(jwtAuth())
app.use((err, req, res, next) => {
    if (err.name === 'UnauthorizedError') {
        return res.status(401).json({ message: 'Invalid or missing token' });
    }
    next(err);
}); 

app.listen(process.env.PORT, (err, res)=>{
    console.log(`app listenning at : http://localhost:${process.env.PORT}`)
})