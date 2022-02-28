const http=require('http')
const {readFileSync}=require('fs');

//get all files
const homePage=readFileSync('./express_tutorial/navbar_app/index.html')
const homeStyles=readFileSync('./express_tutorial/navbar_app/styles.css')
const homeImage=readFileSync('./express_tutorial/navbar_app/logo.png')
const homeLogic=readFileSync('./express_tutorial/navbar_app/browser_app.js')


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
    //styles
else if(url==='/styles.css'){
    res.writeHead(200,{'content_type':'text/css'})
    res.write(homeStyles)
    res.end()

    }
    //image/logo
else if(url==='/logo.png'){
    res.writeHead(200,{'content_type':'image/png'})
    res.write(homeImage)
    res.end()

    }
else if(url==='/browser_app.js'){
    res.writeHead(200,{'content_type':'text/javascript'})
    res.write(homeLogic)
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