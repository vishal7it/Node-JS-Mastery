import express from "express";
import mongoose from "mongoose";
import multer from "multer";
import path from 'path';
import { config } from 'dotenv'

const app = express();

config({ path: ".env" });
import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
    cloud_name: 'dikkqjynx',
    api_key: '824166225566736',
    api_secret: 'NczP4hUppuAofCeIoqCmBMEQ-M4' // Click 'View API Keys' above to copy your API secret
});


mongoose.connect(process.env.MONGO_URI, { dbName: "Nodejs_Mastery_Course" }).then(() => { console.log("MongoDB is connected ....!") }).catch((err) => { console.log(err) })


//rendering ejs file

app.get("/", (req, res) => {
    res.render('index.ejs', { url: null })
})

const storage = multer.diskStorage({
    // destination: './public/uploads',
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + path.extname(file.originalname)
        cb(null, file.fieldname + "-" + uniqueSuffix)
    }
})

const upload = multer({ storage: storage })

const imageSchema = new mongoose.Schema({
    fileName: String,
    public_id: String,
    imgUrl: String
});

const File = mongoose.model("cloudinary", imageSchema)

app.post('/upload', upload.single("file"), async (req, res) => {

    const file = req.file.path

    const cloudinaryRes = await cloudinary.uploader.upload(file, {
        folder: "Nodejs_Mastery_Course"
    })

    //save to database
    const db = await File.create({
        fileName: file.originalname,
        public_id: cloudinaryRes.public_id,
        imgUrl: cloudinaryRes.secure_url,

    })

    res.render("index.ejs", { url: cloudinaryRes.secure_url })

    // res.json({ message: 'file uploaded successfully', cloudinaryRes })

    // req.file is the `avatar` file
    // req.body will hold the text fields, if there were any
})

const port = process.env.PORT;

app.listen(port, () => {
    console.log(`server is running on port = `, port)
})