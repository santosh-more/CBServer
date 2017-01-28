app.controller("articleCtrl", function($scope, $http, $state, $stateParams) {
    console.log("articleCtrl");
    $scope.name = localStorage.getItem("name");
    console.log($scope.id);
    $scope.getCat = function() {
        $http({
            url: "http://localhost:8080/getCat",
            method: "GET",
        }).then(function(res) {
            $scope.category_ = res.data.docs;
            console.log(res.statusText);
        })
    }
    $scope.addArticle = function() {
        var articleData = new FormData(document.getElementById("article"));
        console.log($scope.keywords);
        console.log(article);
        $http({
            url: "http://localhost:8080/addArticle",
            method: "POST",
            data: articleData,
            headers: {
                "Content-Type": undefined
            }
        }).then(function(res) {
            $state.go("dashboard.articles");
            console.log(res.statusText);
        })
    }
    $scope.getArticleList = function() {
        $http({
            url: "http://localhost:8080/getArticleList/" + $stateParams.category,
            method: "GET",
        }).then(function(res) {
            $scope.articleCat = res.data.docs;
            console.log($scope.articleCat);
            console.log(res.statusText);
        })
    }
});
