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
  switch(req.headers.type) {
    case 'RTC':
        if(Object.keys(req.body).length > 0
            && req.body.card && req.body.card.length > 0
            && req.body.user && req.body.user.length > 0){
          console.log('in req.body');
          console.log('BODY: ' + JSON.stringify(req.body));
          res.json({ message: 'So... You took a picture? ...and it was: ' + JSON.stringify(req.body) });
        } else {
          res.json({ message: 'Need to send these options: card, user, openTab, and toast'});
        }
        break;
    case 'Other':
        //do other stuff
        break;
    default:
        res.json({message:'Invalid type specified in header'});
  }
});

app.use('/api', router);

app.listen(port);
console.log('Use this port:  ' + port);
