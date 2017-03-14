var express = require('express');

var app = express();

app.use((req,res,next) => {
  if (req.headers['x-forward-proto'] === 'http') {
    next();
  } else {
    res.redirect('http://' + req.hostname + req.url);
  }
})

app.use(express.static('public'));

const port = process.env.port || 3000;

app.listen(port, function () {
  console.log(`Express server is up on port ${port}`);
});
