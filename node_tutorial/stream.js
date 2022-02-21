const {createReadStream}=require('fs');

const stream=createReadStream('./content/subfolder/big.txt',{
    higWaterMark:900,
    encoding: 'utf8'
});
//default 64kb last buffer -remainder
//higWaterMark - control size :The amount of data that will potentially be buffered depends on the highWaterMark option which is passed into the constructor.
//const stream=createReadStream('./content/subfolder/big.txt'{higWaterMark:90000});
//const stream=createReadStream('./content/subfolder/big.txt'{encoding:'utf8'});
stream.on('data',(result)=>{
    console.log(result)
})
stream.on('error',(err)=>console.log(err))