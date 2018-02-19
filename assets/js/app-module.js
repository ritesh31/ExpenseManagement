
var app = angular.module("ExpenseManagementApp", ["ngRoute"]);

app.config(function($routeProvider) {
    $routeProvider
    .when("/listExpense", {
        templateUrl : "templates/list-expense.html",
        controller: 'ListExpenseController'
    })
    .when("/newExpense", {
        templateUrl : "templates/new-expense.html",
        controller: 'NewExpenseController'
    })
    .when("/newExpense/:taskId", {
        templateUrl : "templates/new-expense.html",
        controller: 'NewExpenseController'
    })
    .when("/detailsExpense/:taskId", {
        templateUrl : "templates/details-expense.html",
        controller: 'DetailsExpenseController'
    }).
    otherwise({
        redirectTo: '/listExpense'
    });
});
