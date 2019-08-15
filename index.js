const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');

const indexRouter = require('./routes/index');
const ActivitySchema = require('../schemas/activity-schema');
const credentials = require('./server');
mongoose.connect(`mongodb://${db.host}:${db.port}/${db.collection}`);

const PORT = process.env.PORT || 3000;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', indexRouter);

app.listen(PORT, (error) => {
  if(error) {
    console.error(error.message);
    process.exit();
  }

  console.log(`App running on port ${PORT}`);
});