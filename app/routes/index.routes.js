var config = require('../../config/config'), 
    path = require('path');

module.exports = function(app) {
  app.get('/api', (req, res) => { 
    res.send('GET /api');
  });
  // all other routes send to index.html
  app.get('*', (req, res) => {
    res.sendFile(path.join(config.appDir, 'dist/index.html'));
  });
}