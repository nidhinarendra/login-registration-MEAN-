//loading the 'login' angularJS module

var login = angular.module('login', []);
// defining the login controller
login.controller('login', function($scope, $http) {
	$scope.invalid_login = true;
	$scope.unexpected_error = true;

	$scope.signIn = function() {
		$http({
			method : "POST",
			url : '/checklogin',
			data : {
				"email" : $scope.email,
				"password" : $scope.password
			}
		}).success(function(data) {
			// checking the response data for statusCode
			if (data.statusCode == 401) {
				$scope.invalid_login = false;
				$scope.unexpected_error = true;
			} else
				// Making a get call to the '/redirectToHomepage' API

				window.location.assign("/homepage");
		}).error(function(error) {
			$scope.unexpected_error = false;
			$scope.invalid_login = true;
		});
	};

	$scope.register = function() {
		$http({
			method : "POST",
			url : '/register',
			data : {
				"email" : $scope.email,
				"password" : $scope.password,
				"firstname" : $scope.firstname,
				"lastname" : $scope.lastname,
				"birthday" : $scope.birthday
			}
		}).success(function(data) {
			// checking the response data for statusCode
			console.log("in angular login");
			// Making a get call to the '/redirectToHomepage' API
			window.location.assign("/homepage");
		}).error(function(error) {
			$scope.unexpected_error = false;
		});
	};

	$scope.logout = function(){
		$http({
			method: "GET",
			url: "/logout"
		}).success(function(){
			window.location.assign("/");
		}).error(function(err){
			console.log("error: "+ err);
		});
	};
})
