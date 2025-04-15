import express from "express"
import mongoose from "mongoose";
import { shortUrl, getOrignalUrl } from "./Controllers/url.js"


const app = express();

app.use(express.urlencoded({ extended: true }))

mongoose.connect("mongodb+srv://vishal7it:oestrae1rY04bAKj@cluster0.uwkso45.mongodb.net/", { dbName: "Nodejs_Mastery_course" }).then(() => { console.log("MongoDB is connected ....!") }).catch((err) => { console.log(err) })

//renddering ejs

app.get("/", (req, res) => {
    res.render("index.ejs", { shortUrl: null })
})

app.post("/short", shortUrl)

//redirect to orignal url

app.get("/:shortCode", getOrignalUrl)

const port = 1234;

app.listen(port, () => {
    console.log(`server is running on port = `, port)
})