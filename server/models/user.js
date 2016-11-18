var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = mongoose.Schema({
	name: String,
})
mongoose.model('User', UserSchema)
