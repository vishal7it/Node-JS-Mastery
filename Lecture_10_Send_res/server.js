import express from "express"
import path from "path"
const app = express();

//send response

const product = [{
    title: 'iphone 15',
    price: 75000
}, {
    title: 'one + ',
    price: 45000
}, {
    title: 'Google pixer',
    price: 55000
}]

app.get("/", (req, res) => {
    // res.json({
    //     message: "fetched all products",
    //     jo_chahe: "de sakte hai",
    //     product: product,
    // })
    // res.send("<h1>this is a response</h1>")

    const dir = path.resolve();
    // console.log("my path is = ", dir);

    const url = path.join(dir, './index.html')

    console.log("full path is = ", url)
    res.sendFile(url)
})



const port = 1234;

app.listen(port, () => {
    console.log(`server is running on port ${port}`)
})