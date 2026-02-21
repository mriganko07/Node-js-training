const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {

    var collectHeaderdata

    // setTimeout(()=>{

    // })

    collectHeaderdata = fs.readFileSync("./html/header.html", 'utf-8', )

    //     (err, headerdata) => {

    //     if (err) {
    //         res.writeHead(500, { 'content-type': 'text/plain' })
    //         res.end("Internal Server Error")
    //         return false;
    //     }
        
    //     collectHeaderdata = headerdata

    //     // res.write(headerdata)

    //     // res.end()

    // })

    
    
    var file = "/index"

    if(req.url != "/"){
        file = req.url;
    }

    

    if (req.url != "/style.css") {

        fs.readFile("./html"+file+".html", 'utf-8', (err, data) => {
            if (err) {
                res.writeHead(500, { 'content-type': 'text/plain' })
                res.end("Internal Server Error")
                return false;
            }
            
            // console.log(collectHeaderdata);                

            res.write(collectHeaderdata+data)

            res.end()

        })
    }

    else if (req.url == "/style.css") {

        fs.readFile("./html/style.css", 'utf-8', (err, data) => {

            if (err) {
                res.writeHead(500, { 'content-type': 'text/plain' })
                res.end("CSS not found")
                return false;
            }

            res.writeHead(200, { 'content-type': 'text/css' })

            res.end(data)

        })
    }


}).listen(5555)