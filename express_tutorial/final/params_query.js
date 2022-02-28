const express=require('express');
const app=express();
const {products}=require('./data')
app.get('/',(req,res)=>{
    res.send('<h1>Home Page</h1><a href="/api/products">products</a>') // send a json response
})
app.get('/api/products',(req,res)=>{
    const newProducts=products.map((product)=>{
        const {id,name}=product;
        return {id,name}
    })
    res.json(newProducts)
})
app.get('/api/products/:productID',(req,res)=>{
//    console.log(req);
//    console.log(req.params);
    const {productID}=req.params;

    const singleProduct =products.find((products)=>product.id===Number(productID))
    if(!singleProduct){
        return res.status(404).send('product does not exist')
    }
    console.log(singleProduct);
    res.json(singleProduct)
})


app.get('/api/products/:productID/reviews/:reviewID',(req,res)=>{
    res.send('hello world')
})

app.get('/api/v1/query',(req,res)=>{
    //console.log(req.query);
    const {search,limit}=req.query
    let sortedProducts=[...products]

    if(search){
        sortedProducts=sortedProducts.filter((product)=>{
            return product.name.startsWith(search)
        })
    }
    if(limit){
        sortedProducts=sortedProducts.slice(0,Number(limit))
    }
    if(sortedProducts.length<1){
        //res.status(200).send('no product matched you search')
        return res.status(200).json({success:true,data:[]})
        //http://localhost:5000/api/v1/query?search=b
    }
    res.status(200).json(sortedProducts)
    res.send('hello world!')
    //http://localhost:5000/api/v1/query/?limit=1 
})

app.listen(5000,()=>{
    console.log('server is listening on port 5000..');
})


/*
A new body object containing the parsed data is populated on the request object
 after the middleware (i.e. req.body), or an empty object ({})
  if there was no body to parse, the Content-Type was not matched, or an error occurred.
*/
/* 
note: https://hn.algolia.com/api*/