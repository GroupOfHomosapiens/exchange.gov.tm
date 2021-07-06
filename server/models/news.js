const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const newsScheme = new Schema({
  title: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  },
  smallImage: {
    type: String,
    // required: [true, 'Kici surat hokmany']
  },
  largeImage: {
    type: String,
    // required: [true, 'Uly surat hokmany!']
  }
}, { timestamps: true });

const News = mongoose.model('News', newsScheme);

module.exports = News;