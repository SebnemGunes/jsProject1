const http=require('http')
const {readFileSync}=require('fs');

//get all files
const homePage=readFileSync('./express_tutorial/navbar_app/index.html')


const server=http.createServer((req,res)=>{
    //console.log(req.method) //GET
    //console.log(req.url) //is trying to access the resource name of url 
    const url=req.url;
    console.log(url)
    //home page
if(url==='/'){
    res.writeHead(200,{'content_type':'text/html'})
    res.write(homePage)
    res.end()
}
    //about page =>http://localhost:5000/about
else if(url==='/about'){
    res.writeHead(200,{'content_type':'text/html'})
    res.write('<h1>about page</h1>')
    res.end()

    }
    //404
else{
    res.writeHead(404,{'content_type':'text/html'})
    res.write('<h1>page not found</h1>')
    res.end()

    }
})
server.listen(5000)