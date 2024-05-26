const path = require("path")
require("dotenv").config({
    path: path.join(__dirname, "../.env")
})

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require("mongoose")
const appRouter = require("./router")
const cors = require("cors");
const SendPaymentMessage = require("./util/payment")
const cron = require("node-cron")
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect(process.env.MONGO_HOST, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log('DB connect')
}).catch((err)=>{
    console.log(err)
})

app.use(cors());

app.use("/api" , appRouter)

cron.schedule('0 8 1 * *', () => {
    SendPaymentMessage()
});



app.listen(process.env.PORT , ()=>{
    console.log('Server ishga tushti')
})