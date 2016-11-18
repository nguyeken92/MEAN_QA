app.controller('userController', function($scope, userFactory, $location, $routeParams) {

	if($routeParams.id) {
		userFactory.getUser($routeParams.id, function(data) {
			$scope.user = data.data.user;
		})
	}
	userFactory.checkSess(function(data){
		$scope.currUser = data.user;
		if(!$scope.currUser) {
			$location.url('/')
		}
	})
	$scope.login = function() {
		if(!$scope.user || $scope.user.name.length < 3) {
			alert('Name is too short!');
		} else {
			userFactory.login($scope.user)
			$location.url('/dashboard')
		}
	}

});
