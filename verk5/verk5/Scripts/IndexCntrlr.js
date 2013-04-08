﻿app.controller('IndexCntrlr', ['$scope', '$resource', function ($scope, $resource) {
	$scope.name = "Sindri sindri";
	$scope.Lectures = [];
	$scope.Comments = [];
	$scope.nowPlaying = '';
	$scope.currentID = 0;

	$scope.$watch('nowPlaying', function () {
		console.log('watch!');
	});

	console.log('halló ' + $scope.name);

	var Lectures = $resource('/api/v1/lectures');

//	var Comments = $resource('api/v1/Lectures/'+id+'/Comment');

	var lectures = Lectures.query(function () {
//		console.log("fyrsti lecturinn : " + lectures[0].LectureURL);
		$scope.Lectures = lectures;
		lectures.$save;

		$scope.nowPlaying = lectures[0].LectureURL;
	});

	var commentlist = [];

	$scope.getComments = function (currentID) {
		var Comments = $resource('api/v1/Lectures/' + $scope.currentID + '/Comment');
		var comments = Comments.query(function () {
			for (comment in comments) {
				console.log("fyrsta comment : " + comments[0].CommentText);
			}
			console.log("current id: " + $scope.currentID);
			$scope.Comments = comments;
			comments.$save;
		});
	}
	
	$scope.newLecture = function () {
		var lecture1 = new Lectures();
		lecture1.LectureURL = $scope.URL;
		lecture1.Title = $scope.Title;
		lecture1.$save();

	}
	$scope.Newcomment = function () {
		var comment1 = new Comment();
		comment1.CommentText = $scope.Commenttxt;
		comment1.$save();
	}

	$scope.selectLecture = function (lectureURL, lectureID) {
//		$scope.$apply(function()
//		{
		console.log("selecting a lecture", lectureURL);
		$scope.nowPlaying = lectureURL;
		console.log("now playing " + $scope.nowPlaying);
		console.log("id: " + lectureID);
		$scope.currentID = lectureID;
		console.log("current id: " + $scope.currentID);
	};
}]);