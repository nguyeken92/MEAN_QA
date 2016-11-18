app.factory('userFactory', ['$http', '$location', function($http, $location){

	var factory = {};
	var users = [];

	factory.login = function(user) {
		$http.post('/login', user).then(function(data) {
			if(data.data.status) {
				$location.url('/dashboard')
			} else{
				alert("something went wrong");
			}
		})
	}

	factory.checkSess = function(callback) {
		$http.get('/checkSess').then(function(data) {
			callback(data.data);
		})
	}

	factory.getUser = function(id, callback) {
		$http.get('/user/' + id).then(function(data) {
			callback(data)
		})
	}

	return factory;
}])
