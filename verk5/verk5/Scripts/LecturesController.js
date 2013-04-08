app.controller('LecturesController', ['$scope', '$resource', function ($scope, $resource) {
    $scope.name = "Sindri sindri";
    $scope.nameLectures = [];
    $scope.nameComments = [];

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