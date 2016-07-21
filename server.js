var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 3000;        // set our port

// ROUTES FOR OUR API
var router = express.Router();

// test route to make sure everything is working (accessed at GET http://localhost:3000/api)
router.post('/', function(req, res) {
  console.log(req.headers);
  var body = '';
  req.on('data',function(data){
    body += data;
  })
  req.on('end', function(){
    console.log(body);
    res.json({ message: 'You just took a picture!' });
  })
});

app.use('/api', router);

app.listen(port);
console.log('Use this port:  ' + port);
