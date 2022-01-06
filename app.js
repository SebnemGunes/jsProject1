//__dirname çalıştırılan dosyanın yolunu verir.
//__filename dosya adını verir
//require  JS dosyasını okur, onu yürütür ve ardından dışa aktarma nesnesini döndürmek.function to use modules
//module  mevcut modül hakkında bilgi

//console.log(__dirname)
/*setInterval(()=>{ //belirtilen süre içerisinde kodları yazar
    console.log("hello world")
},10)*/


const {readFileSync , writeFileSync} =require('fs')
console.log('start');
const test1 = readFileSync('./content/test1.txt','utf8')
const test2 = readFileSync('./content/test2.txt','utf8')

writeFileSync('./content/resul_sync.txt',
`Here is the RESULT: ${test1},${test2}`,
{flag:'a'}
)
