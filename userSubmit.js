const querystring = require('querystring')


function usersubmit(req, res) {

    let databody = []

    req.on("data", (chunks) => {
        databody.push(chunks);
    })    

    res.write("<h1>You can get data from here</h1>")
    

    req.on("end", () => {
        let rawdata = Buffer.concat(databody).toString();
        let readableData = querystring.parse(rawdata);
        console.log(readableData);
    });    


}

module.exports = usersubmit;