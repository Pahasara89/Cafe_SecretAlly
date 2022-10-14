const express=require("express");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const cors = require("cors");
const dotenv=require("dotenv");
const connectDB = require("./config/db");


const productRouter = require("./routes/products.js");
const userRoute=require("./routes/user.route");
const cartRoute=require("./routes/cart.route");


const app  =express();
dotenv.config();
connectDB();
app.use(express.json());

app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

app.use('/uploads', express.static('BACKEND/uploads'));



app.use('/product',productRouter);

app.use("/user",userRoute);

app.use("/cart",cartRoute);

const PORT=process.env.PORT  || 5000;


app.listen(5000,console.log(`server started on port ${PORT}`));