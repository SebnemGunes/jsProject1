
//refactor to async

const { readFile, writeFile } = require('fs').promises
// const util = require('util')
// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)

const start = async () => {
  try {
    const test1 = await readFile('./content/subfolder/test1.txt', 'utf8')
    const test2 = await readFile('./content/subfolder/test2.txt', 'utf8')
    await writeFile(
      './content/result-mind.txt',
      `THIS IS  : ${test1} ${test2}`,
      { flag: 'a' }
    )
    console.log(test1, test2)
  } catch (error) {
    console.log(error)
  }
}

start()


/*.promise : 

The .then() function is called for the steps to be taken after the Promise performs the expected operation. 
The parameter of the function inside is the parameter sent with resolve().
If reject() is called or the promise fails due to an unexpected error, the function in .catch() is called.
*/

// const getText = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, 'utf8', (err, data) => {
//       if (err) {
//         reject(err)
//       } else {
//         resolve(data)
//       }
//     })
//   })
// }
// getText('./content/first.txt')
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err))