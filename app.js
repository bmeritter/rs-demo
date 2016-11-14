var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

const app = express();

app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));


app.use(express.static('public'));

app.get('/', (req, res)=> {
  res.send('hello');
});

app.use('*', (req, res)=> {
  res.sendFile(path.resolve('./public/main.html'));
});

app.listen(4444, function () {
  console.log('server started at http://localhost:4444'); // eslint-disable-line no-console
});
