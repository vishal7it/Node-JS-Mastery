import express, { urlencoded } from "express";
import mongoose from "mongoose";
import { userRegister } from "./controllers/user.js";

const app = express();

app.use(express.urlencoded({ extended: true }))

mongoose.connect("mongodb+srv://vishal7it:oestrae1rY04bAKj@cluster0.uwkso45.mongodb.net/", { dbName: "Nodejs_Mastery_course" }).then(() => { console.log("MongoDB is connected ....!") }).catch((err) => { console.log(err) })


app.get("/", (req, res) => {
    res.render("index.ejs")
})

app.post("/form-submit", userRegister)
const port = 1234;

app.listen(port, () => {
    console.log(`server is running on port ${port}`)
})