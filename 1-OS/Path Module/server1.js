const os = require('os');

console.log(os.type())  
console.log(os.version())
console.log(os.homedir())
console.log(__dirname)
console.log(__filename)

const path = require('path')

console.log(path.dirname(__filename))
console.log(path.basename(__filename))
console.log(path.extname(__filename))

console.log(path.parse(__filename))

// joining
const filePath = path.join(__dirname, 'files', 'notes.txt');
console.log(filePath);
// Example output: C:\Users\Vamsi\Desktop\Node JS\files\notes.txt



