const http = require ("http")

http.createServer((request,response) => {
    response.write('Toushik loves chachi \n');
    response.write("<h1> Adhip + Minakshi </h1> \n");
    response.end('Toushik holo be**a')}).listen(4004)

