import express from "express"
import mongoose from "mongoose";
import { shortUrl, getOrignalUrl } from "./Controllers/url.js"
import { config } from "dotenv"



const app = express();

config({ port: ".env" })

app.use(express.urlencoded({ extended: true }))


mongoose.connect(process.env.MONGO_URI, { dbName: "Nodejs_Mastery_Course" }).then(() => { console.log("MongoDB is connected ....!") }).catch((err) => { console.log(err) })

//renddering ejs

app.get("/", (req, res) => {
    res.render("index.ejs", { shortUrl: null })
})

app.post("/short", shortUrl)

//redirect to orignal url

app.get("/:shortCode", getOrignalUrl)

const port = process.env.PORT;

app.listen(port, () => {
    console.log(`server is running on port = `, port)
})