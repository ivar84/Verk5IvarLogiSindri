var app = angular.module('LectureApp', ['ngResource']);

app.config(function ($routeProvider) {
	$routeProvider.when('/login', { templateUrl: '/Views/Account/login.html', controller: 'LecturesCntrlr' }).
				   when('/', { templateUrl: '/Views/Home/index.cshtml', controller: 'IndexCntrlr' }).
				   when('/lecture/:id', { templateUrl: '/Views/Home/lecture.cshtml', controller: 'LecturesCntrlr' }).
				   otherwise({ redirectTo: '/login' });
});