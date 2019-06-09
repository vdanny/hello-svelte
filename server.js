const path = require('path');
const express = require('express');
const app = require('./public/App.js');
const template = require('./src/core/templates/index');

const server = express();

server.use(express.static(path.join(__dirname, 'public')));

server.get('*', function (req, res) {
  const { html } = app.render({ url: req.url });

  res.write(template(html));

  res.end();
});

const port = 5000;
server.listen(port, (err) => {
  if (err) {
    console.error('An error has occured:', err);
  }
  else {
    console.log(`Listening on port ${port}`);
  }
});