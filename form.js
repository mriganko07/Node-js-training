const http = require('http')

const fs = require('fs')

const querystring = require('querystring')



http.createServer((req, res) => {


    res.writeHead(200, { 'content-type': 'text/html' })

    console.log(req.url);

    if (req.url == "/") {

        res.write(`

            <form action="/submit" method="post">
                <input type="text" name="name"> </br> </br>

                <input type="email" name="email"> </br> </br>

                <button type="submit">Submit</button>
            </form>        

            `) 
        res.end("")
    }

    else if (req.url == "/submit") {
        res.write("<h1>Data Successfully Submitted</h1>")
    }

    res.end("")

}).listen(4004)






// http.createServer((req, res) => {

//     fs.readFile("form.html", "utf-8", (err, data) => {


//         if (err) {
//             res.writeHead(500, { 'content-type': 'text/html' });
//             res.end("<h1>Internal server error</h1>");
//             return
//         }

//         else if (req.url == "/") {
//             res.write(data);
//             res.end();
//             // return
//         }

//         else if (req.url == "/submit") {

//             let databody = []

//             req.on("data", (chunks) => {
//                 databody.push(chunks);
//             })

//             req.on("end", () => {
//                 let rawdata = Buffer.concat(databody).toString();
//                 let readableData = querystring.parse(rawdata);
//                 console.log(readableData);
//             });

//             res.write("<h1>Data sumbitted</h1>");

//             res.end();
//             // return

//         }

//     });


// }).listen(5555);