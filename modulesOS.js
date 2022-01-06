
//OS MODULE : Provides information about the operation system
const os = require('os')
//info about current user
const user=os.userInfo()
console.log(user);

//method returns
console.log(`The system Uptime is ${os.uptime()} seconds`); //Returns the uptime of the operating system, in seconds

const currentOS={
    name:os.type(),
    release: os.release(),
    totalMem: os.totalmem(), // number of total memory of the system
    freeMem: os.freemem(),  //freememory
}
console.log(currentOS)