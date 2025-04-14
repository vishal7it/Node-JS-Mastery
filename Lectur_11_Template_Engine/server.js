import express from "express"

const app = express();

let products = [{ title: "iphone 15", price: 65000 }, { title: "samsung 15", price: 655000 }, { title: "google", price: 85000 }]

app.get('/', (req, res) => {
    let name = "Ram"
    res.render('index.ejs', { name, products })
})

const port = 1234;

app.listen(port, () => {
    console.log(`server is running on port ${port}`);
})