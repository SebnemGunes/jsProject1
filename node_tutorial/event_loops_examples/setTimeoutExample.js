//start
console.log('first')
setTimeout(()=>{
    console.log('second')
},0)
console.log('third')
//completed and exited operating system process
/* output:
first
third
second
*/