var file = require("fs")

file.writeFileSync("read.txt", "next module");

var os = require("os")
console.log(os.platform())
console.log(os.hostname())
console.log(os.cpus())