app.controller("categoryCtrl", function($scope, $http, $state) {
    console.log("categoryCtrl")
    $scope.addCat = function() {
        var catData = new FormData(document.getElementById('addcat'));
        $http({
            url: "http://localhost:8080/addCat",
            method: "POST",
            data: catData,
            headers: {
                "Content-Type": undefined
            }
        }).then(function(res) {
            console.log(res.statusText);
            $state.go("dashboard.category", { reload: true });
        })
    }
    $scope.getCatAll = function() {
        $http({
            url: "http://localhost:8080/getCatAll",
            method: "GET",
        }).then(function(res) {
            $scope.category_All= res.data.docs;
            console.log($scope.category_All);
        })
    }
    $scope.getCat = function() {
        $http({
            url: "http://localhost:8080/getCat/"+localStorage.getItem("name"),
            method: "GET",
        }).then(function(res) {
            $scope.category_ = res.data.docs;
            console.log(res.statusText);
        })
    }
    $scope.deleteCat = function(cat) {
        $http({
            url: "http://localhost:8080/deleteCat/"+cat,
            method: "DELETE",
        }).then(function(res) {
            console.log(res.data.docs.category,"deleted successfully");
            console.log(res.statusText);
            $state.go("dashboard.category",{reload:true});
        })
    }
});
