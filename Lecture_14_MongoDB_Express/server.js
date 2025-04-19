import express from "express"
import mongoose from "mongoose";
import { config } from "dotenv"

const app = express()

config({ path: ".env" })

mongoose.connect(process.env.MONGO_URI, { dbName: "Nodejs mastery course" }).then(() => console.log("MongoDB connected succesfully ......!")).catch((err) => console.log(err))

const port = process.env.PORT;
app.listen(port, () => {
    console.log(`server is runninig on port = ${port}`)
})