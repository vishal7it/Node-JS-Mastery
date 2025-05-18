import express from "express";
import mongoose from "mongoose";
import bodyParser from "express";
import { config } from "dotenv";
import userRouter from "./Routes/user.js";
import productRouter from "./Routes/product.js"
import cartRouter from "./Routes/cart.js"

const app = express();

app.use(bodyParser.json())

//.env setup
config({ path: '.env' });

//user Router
app.use('/api/user', userRouter);

//product Router

app.use('/api/product', productRouter);

//cart Router
app.use('/api/cart', cartRouter);

//Home route
app.get("/", (req, res) => {
    res.json({ message: "Hey you are on the home route" })
})




mongoose.connect(process.env.MONGO_URI, { dbName: "Nodejs_Mastery_Course_E_Commerce_API" }).then(() => { console.log("MongoDB is connected ....!") }).catch((err) => { console.log(err) })


const port = process.env.PORT
app.listen(port, () => {
    console.log(`server is running on port = ${port}`)
})