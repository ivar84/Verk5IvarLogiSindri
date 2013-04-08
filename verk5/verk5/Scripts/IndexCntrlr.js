app.controller('IndexCntrlr', ['$scope', '$resource', function ($scope, $resource) {
	$scope.name = "Sindri sindri";
	$scope.Lectures = [];
	$scope.Comments = [];

	console.log('halló ' + $scope.name);

	var Lectures = $resource('/api/v1/lectures');

//	var Comments = $resource('api/v1/Lectures/'+id+'/Comment');

	var lectures = Lectures.query(function () {
//		console.log("fyrsti lecturinn : " + lectures[0].LectureURL);
		$scope.Lectures = lectures;
		lectures.$save;
	});

	var commentlist = [];

	var Comments = $resource('api/v1/Lectures/1/Comment');
	var comments = Comments.query(function () {
		for (comment in comments)
		{
			console.log("fyrsta comment : " + comments[0].CommentText);//[0].CommentText);
		}
		$scope.Comments = comments;
		comments.$save;
	});

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

	console.log("lectures ", lectures);
}]);