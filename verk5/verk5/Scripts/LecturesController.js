app.controller('LecturesController', ['$scope', '$resource', function ($scope, $resource) {
	$scope.name = "Sindri sindri";

	console.log('halló ' + $scope.name);

	var Lectures = $resource('/api/v1/lectures');

	var lectures = Lectures.query(function () {
		lectures.$save;
	})
	console.log("lectures: ", lectures);
}]);
