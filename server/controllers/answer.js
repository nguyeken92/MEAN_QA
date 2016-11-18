console.log("Answer controller server");
var mongoose = require('mongoose')
var Question = mongoose.model('Question')
var Answer = mongoose.model('Answer')

module.exports = (function() {

	return {

		createAnswer: function(req, res) {
			var answer = new Answer(req.body);
			answer.user = req.session.user;
			answer.likes = 0;
			answer.save(function(err, answer) {
				if(err) {
					return res.json({err: err});
				} else {
					return res.json({answer: answer})
				}
			})
			var question = Question.findOne({_id: req.body.question}, function(err, question) {
				if(err) {
					return res.json({err: err});
				} else {
					question.answers.push(answer);
					question.save();
				}
			})
		},

		like: function(req, res) {
			var answer = Answer.findOne({_id: req.params.id}, function(err, answer) {
				if (err) {
					return res.json({err: err})
				} else {
					answer.likes += 1
					answer.save()
					return res.json({answer: answer})
				}
			})
		}
	}

})();
