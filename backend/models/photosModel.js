const mongoose = require('mongoose');


const photoSchema = mongoose.Schema({
  title: { type: String },
  url: { type: String },
  weight: {type: String}
});

module.exports = mongoose.model('photo', photoSchema);
