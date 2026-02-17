const http = require('http')

// Array of object
const userdata = [
    {
        name: "Toushik",
        age: 23,
        email: "toushik@example.com"
    },
    {
        name: "Mriganka",
        age: 22,
        email: "mriganka@example.com"
    },
    {
        name: "Adhip",
        age: 23,
        email: "adhip@example.com"
    }
]



http.createServer((req, res)=>{
    res.setHeader('Content-Header', 'Application/json')
    res.write(JSON.stringify(userdata))
    res.end("")
}).listen(4004)