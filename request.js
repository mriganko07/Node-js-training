const http = require('http')

http.createServer((req, res) => {

    console.log(req.method);

    if (req.url == "/") {

        res.write("<h1> I am the brand </h1>")

    }

    else if (req.url == "/priya"){

        res.write("<h1> Priya is so beautiful </h1>")

    }

    else{
        res.write("<h1> Tu gar maraga.. </h1>")
    }


    res.end("Chodu Adhip....")


}).listen('4004')