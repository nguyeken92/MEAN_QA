app.factory('answerFactory', ['$http', '$location', '$routeParams', function($http, $location, $routeParams){
    var factory = {};

    factory.checkSess = function(cb) {
        $http.get('/checkSess').then(function(data) {
            cb(data.data);
        })
    }
    factory.createAnswer = function(answer, cb) {
        $http.post('/answer', answer).then(function(data) {
            cb(data);
        })
        $location.url('/dashboard')
    }
    return factory;
}])
