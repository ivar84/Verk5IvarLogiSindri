app.controller('LecturesController', ['$scope', '$resource', function ($scope, $resource) {
    $scope.name = "Sindri sindri";
    $scope.nameLectures = [];
    $scope.nameComments = [];
    $scope.URL = "";
    $scope.Title = "";
    $scope.Commenttxt = "";

    console.log('halló ' + $scope.name);

    //	$scope.lecture = { id:'', url:'', date:'' }

    var list = [];
    
    var Lectures = $resource('/api/v1/lectures');
    
    var Comments = $resource('api/v1/Lectures/1/Comment');

    
        var lectures = Lectures.query(function () {
            console.log("fyrsti lecturinn : " + lectures[0].LectureURL);
            $scope.nameLectures = lectures;
            lectures.$save;

            console.log("þetta er skóp gæjinn : " + $scope.nameLectures[0].LectureURL);
            console.log("þetta er skóp gæjinn : " + $scope.nameLectures[0].LectureOwner);
            console.log("þetta er skóp gæjinn : " + $scope.nameLectures[0].Title);

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
    var comments = Comments.query(function () {
console.log("fyrsta comment : " + comments[0].CommentText);
    $scope.nameComments = comments;
    comments.$save;
});




    
    for (lecture in lectures) {
        console.log("URL: " + lecture.LectureURL);
    }

    console.log("lectures: ", lectures);
}]);