const express = require('express')
const app = express()

app.get('/hello', function(req, res){
    res.send('Chegou a resposta')
})
app.get('/hello', function(req, res){
    res.send('aiin ricardin ')
})
app.get('/hello', function(req, res){
    res.send('gordin amassou o mc')
})
app.get('/hello', function(req, res){
    res.send('pedrin caixa d agua')
})

app.listen(3000, function(){
    console.log('Server Up port 3000')
})