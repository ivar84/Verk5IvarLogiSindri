﻿app.controller('IndexCntrlr', ['$scope', '$resource', function ($scope, $resource) {
	$scope.name = "Sindri sindri";
	$scope.Lectures = [];
	$scope.Comments = [];
	$scope.nowPlaying = '';

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

	$scope.getComments = function (id) {
		var Comments = $resource('api/v1/Lectures/'+id+'/Comment');
		var comments = Comments.query(function () {
			for (comment in comments) {
				console.log("fyrsta comment : " + comments[0].CommentText);
			}
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

	$scope.selectLecture = function (lectureURL) {
//		$scope.$apply(function()
//		{
		console.log("selecting a lecture", lectureURL);
		//if(!$scope.$$phase) {
			//$digest or $apply
			$scope.$apply(function(){
				$scope.nowPlaying = lectureURL;
				console.log("now playing" + $scope.nowPlaying);
			});
		//}	

//		});
	};
	console.log("lectures ", lectures);
}]);