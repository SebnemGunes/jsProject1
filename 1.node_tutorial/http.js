
const http = require('http');
const server= http.createServer((req,res) => {
    if(req.url === '/'){
        res.end('Welcome to out home page')
    }
    else if(req.url === '/about'){
        res.end('Here is our short history')
    }
    else{       //localhost:5000/error
    res.end(`
    <h1>Hello!</h1>
    <p>We cant seem to find the page your looking for</p>
    <a href="/">back home</a>
    `)
}
})

server.listen(5001) //Create a server that listens on port 5000 of your computer.