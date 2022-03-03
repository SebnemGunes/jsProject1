const express = require("express");
const app=express()
let{people}=require('./data')
//static assets
app.use(express.static('./methods_public'))

app.get('/api/people',(req,res)=>{
    res.status(200).json({success:true,data:people})
})
app.post('/login',(req,res)=>{
    res.send('POST')
})
app.listen(5000,()=>{
    console.log('server is listening on port 5000...');
})

