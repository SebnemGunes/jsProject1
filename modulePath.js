const path =require('path')
console.log(path.sep)
const filePath=path.join('/content','/subfolder','test1.txt')
console.log(filePath);

const base=path.basename(filePath);
console.log(base);

const absolute=path.basename(__dirname,'content','subfolder','test1.txt');
console.log(absolute);