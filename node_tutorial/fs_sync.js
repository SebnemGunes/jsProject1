
const {readFileSync , writeFileSync} =require('fs')
console.log('start');
const test1 = readFileSync('./content/subfolder/test1.txt','utf8')
const test2 = readFileSync('./content/subfolder/test2.txt','utf8')

writeFileSync('./content/subfolder/resul_sync.txt',
`Here is the RESULT: ${test1},${test2}`,
{flag:'a'}
)
console.log('done with tihs task');
