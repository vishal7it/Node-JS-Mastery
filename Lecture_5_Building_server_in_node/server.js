import http from 'http'

const server = http.createServer((req, res) => {

    res.end('you had requeste something sir')
});

const port = 6546;

server.listen(port, () => {
    console.log(`server is runnng on port = ${port}`);
})