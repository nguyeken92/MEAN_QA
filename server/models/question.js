var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var QuestionSchema = Schema({
	question: String,
	description: String,
	user: {type: Schema.Types.ObjectId, ref: "User"},
	answers: [{type: Schema.Types.ObjectId, ref: "Answer"}],
})

mongoose.model('Question', QuestionSchema)
