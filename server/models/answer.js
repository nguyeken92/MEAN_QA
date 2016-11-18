var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var AnswerSchema = mongoose.Schema({
	answer: String,
	details: String,
	likes: Number,
	question: {type: Schema.Types.ObjectId, ref: "Question"},
	user: {type: Schema.Types.ObjectId, ref: "User"},
})

mongoose.model('Answer', AnswerSchema)
