import express from "express";
import mongoose from "mongoose";
import multer from "multer";
import path from 'path';

const app = express();

app.use(express.urlencoded({ extended: true }))

import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
    cloud_name: 'dikkqjynx',
    api_key: '824166225566736',
    api_secret: 'NczP4hUppuAofCeIoqCmBMEQ-M4' // Click 'View API Keys' above to copy your API secret
});


mongoose.connect("mongodb+srv://vishal7it:oestrae1rY04bAKj@cluster0.uwkso45.mongodb.net/", { dbName: "Nodes_Mastery_Course" }).then(() => { console.log("MongoDB is connected ....!") }).catch((err) => { console.log(err) })


//rendering login ejs file

app.get("/", (req, res) => {
    res.render('login.ejs', { url: null })
})


//rendering Regiister ejs file
app.get("/register", (req, res) => {
    res.render('register.ejs', { url: null })
})



const storage = multer.diskStorage({
    // destination: './public/uploads',
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + path.extname(file.originalname)
        cb(null, file.fieldname + "-" + uniqueSuffix)
    }
})

const upload = multer({ storage: storage })

const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    fileName: String,
    public_id: String,
    imgUrl: String
});

const User = mongoose.model("user", UserSchema)

app.post('/register', upload.single("file"), async (req, res) => {

    const file = req.file.path

    const { name, email, password } = req.body

    const cloudinaryRes = await cloudinary.uploader.upload(file, {
        folder: "Nodejs_Mastery_Course"
    })

    //Creating User
    const db = await User.create({
        name,
        email,
        password,
        fileName: file.originalname,
        public_id: cloudinaryRes.public_id,
        imgUrl: cloudinaryRes.secure_url,

    })


    res.redirect("/")
    // res.render("register.ejs", { url: cloudinaryRes.secure_url })

    // res.json({ message: 'file uploaded successfully', cloudinaryRes })

    // req.file is the `avatar` file
    // req.body will hold the text fields, if there were any
})

app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    // console.log("whatb is in body ", req.body)

    let user = await User.findOne({ email })
    if (!user) res.render("login.ejs")
    else if (user.password != password) {
        res.render("login.ejs")
    } else {
        res.render("profile.ejs", { user })
    }
})

const port = 1234;

app.listen(port, () => {
    console.log(`server is running on port = `, port)
})  