var express =   require("express");
var bodyParser =    require("body-parser");
var multer  =   require('multer');
var app =   express();
app.use(bodyParser.json());
var storage =   multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, './uploads');
  },
  filename: function (req, file, callback) {
    callback(null, file.fieldname + '-' + Date.now());
  }
});
var upload = multer({ storage : storage }).array('uploadedfiles',3);

app.post('/uploadmultipleFiles',(req,res) => {
    upload(req,res,(err) => {
        console.log(req.files);
        if(err) {
            return console.log(err);
        }
        res.send("File is uploaded");
    });
});

app.listen(3000,function(){
    console.log("Working on port 3000");
});