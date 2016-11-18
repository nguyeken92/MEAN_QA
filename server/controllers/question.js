console.log("Question controller server");
var mongoose = require('mongoose')
var Question = mongoose.model('Question')

module.exports = (function() {

	return {
		createQuestion: function(req, res) {
			var question = new Question(req.body);
			question.user = req.session.user;
			question.save(function(err, question) {
				if(err) {
					return res.json({err:err});
				} else {
					return res.json({question: question})
				}
			})
		},
		showAll: function(req, res) {
			Question.find({}, function(err, questions) {
				if(err) {
					return res.json({err: err})
				} else {
					return res.json({questions: questions})
				}
			})
		},
		questionAnswer: function(req, res) {
			Question.findOne({_id: req.params.id}).populate({path: 'answers', populate: {path: 'question', path: 'user'}, options: {sort: {'likes': -1}}}).exec(function(err, question) {
				if(err) {
					return res.json({err: err})
				} else {
					return res.json({question: question})
				}
			})
		}
	}



})();
