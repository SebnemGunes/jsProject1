
const http=require('http')
const server=http.createServer((req,res)=>{
    console.log('request event')
    res.end('Hello Project1')
})

server.listen(5004,()=>{
    console.log('server listenin on port: 5004')
})
//LOOK HERE AGAIN