const express = require('express');
const newsRoutes = require('./routes/newsRoutes');
const mongoose = require('mongoose');
const fileUpload = require('express-fileupload');

const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(fileUpload());

mongoose.connect("mongodb://localhost:27017/exchange", {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(res => {
  app.listen(8080, () => {
    console.log('http://localhost:8080');
  })
})
.catch(err => console.log(err));


app.use('/api', newsRoutes);