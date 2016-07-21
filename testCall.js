var http = require('http');

var options = {
  host: 'localhost',
  port: 3000,
  path: '/api',
  method: 'POST',
  headers: {
    "type":"RTC"
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
request.write('this');
request.end();
