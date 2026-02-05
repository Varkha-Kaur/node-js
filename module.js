
// core modules
// alreday predefined in nodejs lib
const fs = require('fs')
const moment = require('moment')



//local modules
const add = require('./test.js')
const sum = add(10,5)
console.log("sum is:",sum)
fs.writeFileSync('output.txt',`the sum is ${sum}`)

// third party modules
//install - npm intall moment
console.log('current Date and Time is: ',moment().format('MMMM DO YYYY ,h:mm:ss'))