function userform(req, res) {
    
    res.write(`
    
        <form action="/submit" method="post">
            <input type="text" name="name"> </br> </br>

            <input type="email" name="email"> </br> </br>

            <button type="submit">Submit</button>
        </form>         
    `)

    
}

module.exports = userform;