app.controller('IndexCntrlr', ['$scope', '$resource', function ($scope, $resource) {
	$scope.name = "Sindri sindri";
	$scope.Lectures = [];
	$scope.Comments = [];
	$scope.nowPlaying = '';
	$scope.currentID = 0;
	$scope.showComments = false;

	var Lectures = $resource('/api/v1/lectures');

	var lectures = Lectures.query(function () {
		$scope.Lectures = lectures;
		lectures.$save;

		$scope.nowPlaying = lectures[0].LectureURL;
		$scope.currentID = lectures[0].ID;
	});

	$scope.getComments = function (currentID) {
		var Comments = $resource('api/v1/Lectures/' + $scope.currentID + '/Comment');
		var comments = Comments.query(function () {

			$scope.showComments = true;

			console.log('showcomments: ' + $scope.showComments);

			$scope.Comments = comments;
			comments.$save;
		});
	}

	$scope.hideComments = function () {

		$scope.showComments = false;
		console.log('showcomments: ' + $scope.showComments);
	}
	
	$scope.newLecture = function () {
		var lecture1 = new Lectures();
		lecture1.LectureURL = $scope.URL;
		lecture1.Title = $scope.Title;
		lecture1.$save();

	}
	$scope.newComment = function () {
	    console.log("eg komst whoop whoop ");
	    var Comments = $resource('api/v1/Lectures/' + $scope.currentID + '/Comment');
	    var comment1 = new Comments();
		comment1.CommentText = $scope.Commenttxt;
		comment1.Lecture_ID = $scope.currentID;
		comment1.$save();

	};

	$scope.selectLecture = function (lectureURL, lectureID) {
		$scope.nowPlaying = lectureURL;
		$scope.currentID = lectureID;
		$scope.getComments();
	};
}]);