const http = require('http')

const fs = require('fs')

http.createServer((req, res) =>{

    fs.readFile("web.html", "utf-8" , (err, data) =>{

        if(err){
            res.writeHead(500,{'content-type' : 'text/plain'})
            res.write("Internal Server Error")
            res.end("Jai Hind")
            return 
        }


        res.writeHead(200,{'content-type' : 'text/html'})
        res.write(data)
        res.end("Jai Hind")        


    })

    // res.end("OK")

}).listen(6969)