const express = require('express');
const app = express();
const path = require('path');
const port = 8080;
const fs = require('fs');
const bodyParser = require('body-parser')

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));;

app.get('/', (req, res) => {
  console.log(Date.now());
  res.sendFile(path.join(__dirname + "/public/index.html"));
  }
);

//Submits email into email storage
app.post('/', function(req,res){
  let date = new Date();
  let month = date.getUTCMonth() + 1; //months from 1-12
  let day = date.getUTCDate();
  let year = date.getUTCFullYear();
  let hour = date.getHours();
  let name = JSON.stringify(req.body.name);
  let email = JSON.stringify(req.body.email);
  let newDate = month + "/" + day + "/" + year + " --- Hour: " + hour;
  fs.appendFile('./emailList.txt', name + ' --- ' + email + ' --- ' + newDate + '\n', function (err) {
    if (err) throw err;
      console.log('Saved Email!');
    });

  res.sendFile(path.join(__dirname + "/public/afterSubmit.html"));
});

app.listen(port, () => console.log('About Us app listening on port ' + port));
