import express, { urlencoded } from "express";
import mongoose from "mongoose";
import { userRegister } from "./controllers/user.js";
import { config } from "dotenv"

const app = express();

config({ path: ".env" })

app.use(express.urlencoded({ extended: true }))

mongoose.connect(process.env.MONGO_URI, { dbName: "Nodejs_Mastery_course" }).then(() => { console.log("MongoDB is connected ....!") }).catch((err) => { console.log(err) })


app.get("/", (req, res) => {
    res.render("index.ejs")
})

app.post("/form-submit", userRegister)
const port = process.env.PORT;

app.listen(port, () => {
    console.log(`server is running on port ${port}`)
})