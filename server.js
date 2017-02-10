var path = require('path')
var express = require('express')
var app = express()
var multer  = require('multer')
var fs = require('fs');
var upload = multer({ dest: 'uploads/' })
app.get('/', function(req, res) {
   res.sendFile(path.join(__dirname + '/index.html'));
})
app.post('/get-file-size', upload.single('file'), function (req, res){
  res.send({
        size: req.file.size
    })
})
app.listen(8080)