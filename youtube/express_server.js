const express = require('express')
app = express()

app.listen(3000);
console.log("Express Server Listening!!!");


app.get('/', function(req, res) {
    res.send("<h1> Hello</h1>")
    // res.write("<h2> World</h2>")   // Does not work
    res.end// This Works, its coincidence that it is having same name as http Server response callback
})
