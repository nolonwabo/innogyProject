var mongoose = require('mongoose');
const MongoURL = process.env.MONGO_DB_URL || "mongodb://localhost/plumber";
console.log(MongoURL);
mongoose.connect(MongoURL, {
  useMongoClient: true
});


var storePlumbers = mongoose.model('storePlumbers', {
  name: String,
  contact_details: Number,
  days: Object,
  slots: Object
 });

module.exports = storePlumbers;
