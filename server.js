var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Content = require('./api/models/contentModel'),
  bodyParser = require('body-parser');


//mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://aelgh:VASAsub100!@cluster0.fizlc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// app.use(function (req, res) {
//   res.status(404).send({ url: req.originalUrl + ' not found' })
// })

var routes = require('./api/routes/contentRoutes');
routes(app);

app.listen(port);



console.log('todo list RESTful API server started on: ' + port);
