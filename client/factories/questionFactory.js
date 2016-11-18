app.factory('questionFactory', ['$http', '$location', '$routeParams', function($http, $location, $routeParams){

	var factory = {};
	var questions = [];

	factory.checkSess = function(cb) {
		$http.get('/checkSess').then(function(data) {
			cb(data.data);
		})
	}

	factory.createQuestion = function(question, cb) {
		$http.post('/question', question).then(function(data){
			cb(data);
		})
		$location.url('/dashboard')
	}

	factory.showAll = function(cb) {
		$http.get('/question').then(function(data) {
			cb(data.data.questions)
		})
	}

	factory.questionAnswer = function(id, cb) {
		$http.get('/question/' + id).then(function(data) {
			cb(data.data.question)
		})
	}

	factory.like = function(id, cb) {
		$http.put('/answer/' + id).then(function(data) {
			cb(data.data.question)
		})
		$location.url('/question/'+$routeParams.id)
	}

	return factory;
}])
