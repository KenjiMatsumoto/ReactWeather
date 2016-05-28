var express = require('express');

//create our app
var app = express();

app.use(express.static('public'));

app.listen(8090, function(){
  console.log('Express server is up on part 8090')
});
