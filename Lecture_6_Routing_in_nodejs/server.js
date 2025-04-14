import http from 'http'

const server = http.createServer((req, res) => {
    // console.log(req);
    // res.end('<h1>Your request has been accepected</h1>')

    if (req.url === "/hel") {
        res.end("<h1>welcome to hel</h1>")
    } else if (req.url == "/hev") {
        res.end("<h1>welcome to hev</h1>")
    } else {
        res.end("<h1>Invalid req</h1>")
    }
})

const port = 1234;

server.listen(port, () => {
    console.log(`server is running on port ${port}`)
})