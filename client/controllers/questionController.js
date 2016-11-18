app.controller('questionController', function($scope, questionFactory, $location, $routeParams) {

	$scope.questions = [];

	questionFactory.checkSess(function(data){
		$scope.currUser = data.user;
		if(!$scope.currUser) {
			$location.url('/')
		}
	})
	function showAll() {
		questionFactory.showAll(function(data){
			$scope.questions = data;
		})
	}
	showAll();

	function questionAnswer() {
		questionFactory.questionAnswer($routeParams.id, function(data) {
			$scope.question = data;
		});
	}
	if($routeParams.id) {
		questionAnswer();
	}
	$scope.createQuestion = function(){
		if($scope.question && $scope.question.question.length >= 10) {
			questionFactory.createQuestion($scope.question, showAll)
		} else{
			alert('Your question is too short!');
		}
	}
	$scope.like = function(id) {
		questionFactory.like(id, questionAnswer);
		$location.url('/question/'+$routeParams.id)
	}
});
