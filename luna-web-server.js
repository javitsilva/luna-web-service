process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var config = require('./config/config'), 
    express = require('./config/express');

var app = express();

app.listen(config.port);

module.exports = app;

console.log('Running ' + process.env.NODE_ENV + ' luna-web-app on port ' + config.port + '.');