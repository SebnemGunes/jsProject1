const {readFile,writeFile, writeFileSync} =require('fs')
console.log('start fs_async');
readFile('./content/subfolder/test1.txt','utf-8',(err,result)=> {
    if(err){
        console.log(err);
        return
    }
    const test1=result;
    readFile('./content/subfolder/test2.txt','utf-8',(err,result)=>{
        if(err){
            console.log(err);
            return
        }
    const test2=result;
    writeFileSync(
        './content/subfolder/resul_sync.txt',
        `Here is the RESULT: ${test1},${test2}`,
        (err,result)=>{
            if(err){
                console.log(err);
                return
            }
            console.log('done with this task');
        }
    )
    })
})

console.log('starting next task');
