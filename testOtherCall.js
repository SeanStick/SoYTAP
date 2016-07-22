var http = require('http');

//host: 'localhost',
//port: 3000,
var options = {
  host: 'soytap.azurewebsites.net',
  path: '/api',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'type':'Other'
  }
};

var request = http.request(options, function(res) {
  console.log('STATUS: ' + res.statusCode);
  console.log('HEADERS: ' + JSON.stringify(res.headers));
  res.setEncoding('utf8');
  res.on('data', function (chunk) {
    console.log('BODY: ' + chunk);
  });
})
request.write(JSON.stringify({toast: true, message: 'Hello World!'}));
request.end();
