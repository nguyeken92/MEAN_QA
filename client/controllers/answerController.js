app.controller('answerController', function($scope, answerFactory, questionFactory, $location, $routeParams){

    answerFactory.checkSess(function(data){
		$scope.currUser = data.user;
		if(!$scope.currUser) {
			$location.url('/')
		}
	})
    $scope.createAnswer = function() {
        if($scope.answer && $scope.answer.answer.length >= 5) {
            $scope.answer.question = $routeParams.id
            answerFactory.createAnswer($scope.answer, questionAnswer);
        } else {
            alert('Your answer is not long enough!')
        }
    }
    function questionAnswer() {
        questionFactory.questionAnswer($routeParams.id, function(data) {
            $scope.question = data;
        });
    }
});
