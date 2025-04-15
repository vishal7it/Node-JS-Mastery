import express, { urlencoded } from "express"

const app = express();

app.use(urlencoded({ extended: true }))

app.get("/", (req, res) => {
    res.render('index.ejs')
})

app.post("/form-submit", (req, res) => {
    console.log(req.body)
    res.json({ message: "your form has been submited", success: true })
})

const port = 1234;

app.listen(port, () => {
    console.log(`server is running on port = ${port} `);
})