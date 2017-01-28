app.controller("articleOneCtrl", function($scope, $http, $state, $stateParams) {
    $scope.getArticle = function() {
        $http({
            url: "http://localhost:8080/getArticle/" + $stateParams.article,
            method: "GET",
        }).then(function(res) {
            $scope.article_ = res.data.docs;
            // $scope.fullstory=
            console.log(res.statusText);
            console.log($scope.article_);
            $scope.temp = "test";
        })
    }
});
