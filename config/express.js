var config = require('./config'),
  express = require('express'),
	bodyParser = require('body-parser'),
  path = require('path');

module.exports = function() {
	var app = express();
  // body parser
  app.use(bodyParser.urlencoded({extended: false}));
  app.use(bodyParser.json());
  // point static path to dist
  app.use(express.static(path.join(config.appDir, 'dist')));
  // routes
  require('../app/routes/index.routes')(app);

	return app;
};