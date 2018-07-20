const express = require('express');
const app = express();
const path = require('path');
const port = 8080;
const fs = require('fs');
const bodyParser = require('body-parser')

var knex = require('knex')({
  client: 'pg',
  connection: {
    host : 'jivedb.cc7cumgtmetx.us-west-1.rds.amazonaws.com',
    user : 'Jive',
    password : 'storeStuff7',
    database : 'JiveDB'
  },
  acquireConnectionTimeout: 10000
});

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
  const emailObject = {
    name: req.body.name,
    email: req.body.email
  };

  knex.insert(emailObject).into('email_list').asCallback(function(err) {
    if (err) {
      console.log(err);
    }
  });

  /*let newDate = month + "/" + day + "/" + year + " --- Hour: " + hour;
  fs.appendFile('./emailList.txt', name + ' --- ' + email + ' --- ' + newDate + '\n', function (err) {
    if (err) throw err;
      console.log('Saved Email!');
    });

  res.sendFile(path.join(__dirname + "/public/afterSubmit.html"));*/
});

app.listen(port, () => console.log('About Us app listening on port ' + port));
