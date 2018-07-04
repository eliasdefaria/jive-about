const express = require('express');
const app = express();
const path = require('path');
const port = 8080;
const fs = require('fs');
const bodyParser = require('body-parser')

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname + "/public/index.html"))
);

//Submits email into email storage
app.post('/', function(req,res){
  fs.appendFile('./emailList.txt', req.body.name + ' --- ' + req.body.email + '\n', function (err) {
    if (err) throw err;
      console.log('Saved Email!');
    });

  res.sendFile(path.join(__dirname + "/public/afterSubmit.html"));
});

app.listen(port, () => console.log('About Us app listening on port ' + port));
