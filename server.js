const express = require('express')
const app = express()

app.use(express.static('public'))// 정적인 파일 위치 디렉토리

app.listen(8080,function() {
    console.log("server open")
})

app.get('/',function(req, res){
    res.sendFile(__dirname + '/index.html')    
}) 

app.get('/pet',function(req, res){
    res.send('펫용품이용 페이지')
}) 
