const http = require('http');
const fs = require('fs');

http.createServer((req, res) =>{

    fs.readFile("./html/index.html", 'utf-8', (err, data)=>{
        if(err){
            res.writeHead(500, {'content-type': 'text/plain'})
            res.end("Internal Server Error")
            return false;
        }
        
        res.write(data)


        res.end("Chachi")
        // else if(){

        // }
    })


}).listen(5555)