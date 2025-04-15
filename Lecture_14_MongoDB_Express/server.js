import express from "express"
import mongoose from "mongoose";
const app = express()

mongoose.connect("mongodb+srv://vishal7it:oestrae1rY04bAKj@cluster0.uwkso45.mongodb.net/", { dbName: "Nodejs mastery course" }).then(() => console.log("MongoDB connected succesfully ......!")).catch((err) => console.log(err))

const port = 1234;
app.listen(port, () => {
    console.log(`server is runninig on port = ${port}`)
})