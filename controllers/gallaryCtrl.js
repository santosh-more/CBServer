app.controller("gallaryCtrl", function($scope, $http, $state) {
    // $state.go("default.gallary");
    $scope.getCat = function() {
        $http({
            url: "http://localhost:8080/getCatAll",
            method: "GET",
        }).then(function(res) {
            $scope.category_ = res.data.docs;
            console.log(res.statusText);
        })
    }
    $scope.getArticles = function() {
        $http({
            url: "http://localhost:8080/allArticles",
            method: "GET",
        }).then(function(res) {
            $scope.articles = res.data.docs;
            console.log($scope.articles);
            console.log(res.statusText);
        })
    }
    $scope.count = function(cat) {
        var count = 0;
        angular.forEach($scope.articles, function(value, key) {
            for (var i = 0; i < value.category.length; i++) {
                if (value.category[i] == cat) count++;
            }
        });
        return count;
    }
});
