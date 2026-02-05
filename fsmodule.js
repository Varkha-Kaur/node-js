//file system
const fs = require('fs')
//import fs from 'fs'
// create or write file
fs.writeFileSync('node.txt','hello nodejs')
console.log("file is written sync,completely")