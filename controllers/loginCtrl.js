app.controller("loginCtrl", function($scope, $http, $state) {
    $scope.login = function() {
        $scope.postdata={};
        $scope.postdata.email=$scope.email;
        $scope.postdata.password=$scope.password;
        $http({
            url: "http://localhost:8080/login",
            method: "POST",
            data: $scope.postdata,
            headers: {
                "Content-Type": "application/json"
            }
        }).then(function(res) {
        	console.log(res);
            if (res.data.doc.email == $scope.email) {
                localStorage.setItem("id",res.data.doc._id);
                localStorage.setItem("name",res.data.doc.name);
                $state.go("dashboard.user");
            } else {
                $state.go("login");
            }
        })
    }
});