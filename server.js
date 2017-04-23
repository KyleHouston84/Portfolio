var gzippo = require('gzippo');
var express = require('express');

var app = express();

//app.use(express.logger('dev')); //log cinnections for dev
app.use(gzippo.staticGzip("" + __dirname + "/dist")); //Point Heroku at the dist directory
app.use(function(req, res, next){
  res.status(404);

  // respond with html page
  if (req.accepts('html')) {
		res.status(404).redirect('/#')
    return;
  }

  // respond with json
  if (req.accepts('json')) {
    res.send({ error: 'Not found' });
    return;
  }

  // default to plain-text. send()
  res.type('txt').send('Not found');
});
app.listen(process.env.PORT || 5000);
