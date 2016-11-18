console.log("Routes");

var user = require('./../controllers/user.js');
var question = require('./../controllers/question.js')
var answer = require('./../controllers/answer.js')

module.exports = function(app) {
	app.post('/login', user.login);
	app.get('/checksess', user.checkSess);
	app.get('/logout', user.logout);
	app.post('/question', question.createQuestion);
	app.get('/question', question.showAll);
	app.get('/question/:id', question.questionAnswer);
	app.post('/answer/', answer.createAnswer);
	app.put('/answer/:id', answer.like);

}
