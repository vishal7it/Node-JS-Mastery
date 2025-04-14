import express from "express";

const app = express();


//C = Create => post (method)
//R = Read => post (method)
//U = Update => post (method)
//D = Delete => post (method)

app.get("/hel", (req, res) => {
    res.send(`<h1>you are in hel</h1>`)
})

app.post("/instagram_post", (req, res) => {
    res.send
})
const port = 1234;

app.listen(port, () => {
    console.log(`server is running on port = ${port} `);
})
