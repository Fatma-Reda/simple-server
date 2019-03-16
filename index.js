var express = require('express')
var app = express()
const path=require('path')

app.get('/',  (req, res)=> {
    res.send('Home Page')
})
app.get('/profile', (req, res) =>{
    res.send('Profile Page')
})
app.get('/file',  (req, res)=> {
    res.sendFile(path.join(__dirname, './assets', req.query.name));
})

app.listen(3000)