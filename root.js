const http = require ("http")

const userform = require('./userForm')
const usersubmit = require('./userSubmit')
const querystring = require('querystring')


http.createServer((req,res) => {

    res.writeHead(200, { 'content-type': 'text/html' })

    if(req.url == "/"){
        userform(req,res)
        res.end()
    }

    else if(req.url == "/submit"){
        usersubmit(req,res)
        res.end()
    }

    res.end()

}).listen(9090)