 var app = angular.module('app', ['ui.router']);

console.log("Angular App Is working...");

app.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("main");
    $stateProvider
        .state("main", {
            url: "/main",
            templateUrl: "/",
            controller: "mainCtrl"
        })
        .state("default", {
            url: "/default",
            templateUrl: "./dashboard/Default.html",
            controller: "defaultCtrl",
            abstract: true
        })
        .state("default.gallary", {
            url: "/gallary/",
            templateUrl: "./views/gallary.html",
            controller: "gallaryCtrl"
        })
        .state("login", {
            url: "/login",
            templateUrl: "./views/login.html",
            controller: "loginCtrl"
        })
        .state("signup", {
            url: "/signup",
            templateUrl: "./views/signup.html",
            controller: "signupCtrl"
        })
        .state("default.articleslist", {
            url: "/articleslist/:category",
            templateUrl: "./views/articleList.html",
            controller: "articleCtrl"
        })
        .state("default.articles", {
            url: "/articles/:article",
            templateUrl: "./views/articles.html",
            controller: "articleOneCtrl"
        })
        .state("dashboard", {
            url: "/dashboard",
            templateUrl: "./dashboard/dashboardUser.html",
            controller: "dashboardCtrl",
            abstract: true
        })
        .state("dashboard.user", {
            url: "/user",
            templateUrl: "./views/user.html",
            controller: "userCtrl"
        })
        .state("dashboard.article", {
            url: "/article",
            templateUrl: "./views/manageArticles.html",
            controller: "articleCtrl"
        })
        .state("dashboard.passwordChng", {
            url: "/passwordChng/:id",
            templateUrl: "./views/passwordChng.html",
            controller: "dashboardCtrl"
        })
        .state("dashboard.category", {
            url: "/category/",
            templateUrl: "./views/manageCategory.html",
            controller: "categoryCtrl"
        })
        .state("dashboard.addcat", {
            url: "/addcat/",
            templateUrl: "./views/addCatagory.html",
            controller: "categoryCtrl"
        })
        .state("dashboard.articles", {
            url: "/articles/",
            templateUrl: "./views/articles.html",
            controller: "articleCtrl"
        })
});

/*app.run(function($rootScope, $state) {
    $rootScope.$on("$stateChangeStart", function(event, toState, toParams, fromState, fromParams) {
        var id = localStorage.getItem("id");
        var type = localStorage.getItem("type");
        console.log("id :", id, "UserType:", type);
        console.log(toState.name);
        if (!id && toState.name != 'login') {
            event.preventDefault();
            $state.go("main");
        }
        if (id && toState.name == 'login') {
            event.preventDefault();
            $state.go("dashboard.home");
        }
    })
})
*/