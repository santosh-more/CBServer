app.controller("dashboardCtrl", function($http, $scope, $stateParams, $state) {
    $scope.logout=function(){
        localStorage.removeItem("email");
        localStorage.removeItem("password");
        localStorage.removeItem("id");
        localStorage.removeItem("type")
        $state.go("default.gallary");
    }
});
