import express from "express"

const app = express();


app.get('/', (req, res) => {
    res.send("you are requested to blank");
})

app.get('/hel', (req, res) => {
    res.send("Here are u in hel")
})



const port = 1234;

app.listen(port, () => {
    console.log(`server is running on port ${port}`);
})

