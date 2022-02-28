const express =require('express');
const app=express();

//setup static and middleware
app.use(express.static('./public'))
app.get('/',(req,res)=>{
res.sendFile(path.resolve(__dirname,'./express_tutorial/navbar_app/index.html'))
})

//all
app.all('*',(req,res)=>{
    res.status(404).send('resource not found')
    
})
app.listen(5000,()=>{
    console.log('server is listenin on port 5000..');
})