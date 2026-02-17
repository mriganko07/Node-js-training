// const arg = process.argv // Datapass korlam tarpor get korlam

// console.log("-----------------------",arg[0]);



// Dynamic Port Allocation

const http = require('http')

const arg = process.argv 

const port = arg[2];



http.createServer((req, res) => {
    
    res.end("Chodu Minadi")
    
}).listen(port)
