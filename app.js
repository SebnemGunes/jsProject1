//__dirname çalıştırılan dosyanın yolunu verir.
//__filename dosya adını verir
//require  JS dosyasını okur, onu yürütür ve ardından dışa aktarma nesnesini döndürmek.function to use modules
//module  mevcut modül hakkında bilgi

//console.log(__dirname)
/*setInterval(()=>{ //belirtilen süre içerisinde kodları yazar
    console.log("hello world")
},10)*/


//npm -global command - node package manager
//npm --version : check npm version

//local dependency - use it only particular project
//npm i <packageName>

//global dependency - use it in any project
//npm install -g <packageName>
//sudo install -g <packageName> (mac)

//package.json   :It is a file containing information about the project.
//manual approach( create package.json in the root, create properties etc..)
//npm init  (firstly run) 
//npm init -y (everything default)

const _ =require('lodash')  //is used to import the lodash library into the file.

const items = [1,[2,[3,[4]]]]
const newItems = _.flattenDeep(items); //Tmethod is used to flatten up to depth time that is passed into the function.
console.log(newItems);
