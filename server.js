var express = require('express');
var app = express();

app.get('/',function(req,res){
   res.send('HEllo world');
});
app.listen(3000);
