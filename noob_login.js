
/* Empty JS object to act as endpoint for all routes */
users_database = {'user':'ahmed', 'pass':'hashed'};

/* Express to run server and routes */
const express = require('express');

/* Start up an instance of app */
const app = express();

/* Dependencies */
const bodyParser = require('body-parser')
/* Middleware*/
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const cors = require('cors');
app.use(cors());

/* Initialize the main project folder*/
app.use(express.static('website'));

const port = 3000;
/* Spin up the server*/
const server = app.listen(port, listening);
 function listening(){
    // console.log(server);
    console.log(`running on localhost: ${port}`);
  };

// TODO-ROUTES!

app.get('/user/123456/pass/123', (req, res) => {
var x = req['_parsedOriginalUrl']['path'];
  var strlength = x.length;
  var n = x.indexOf("user");
  var np = x.indexOf("pass");
  n += 5;
  np += 5;  
  var fin = x.slice(n, 12);
  var hashed = x.slice(np, strlength);
    
    if (fin == '123456') {
res.send('login sucess');
    }
});	
