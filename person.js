var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PersonSchema = new Schema({
    id: String,
    name: String,
    clientToken: {
        token: String,
        created: {type: Date, default: Date.now}
    }
});

module.exports = mongoose.model('Person', PersonSchema);