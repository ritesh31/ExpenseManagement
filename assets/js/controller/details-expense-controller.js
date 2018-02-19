angular.module("ExpenseManagementApp").controller("DetailsExpenseController", ['$scope', '$routeParams', 'ExpenseService', function ($scope, $routeParams, ExpenseService) {
    $scope.expenseTaskId = $routeParams.taskId;
    console.log($scope.expenseTaskId);
    $scope.expenseTask = {};

    //Get expense task by id
    $scope.getExpenseTaskById = function () {
        ExpenseService.getExpenseTaskById($scope.expenseTaskId, function (err, expenseTask) {
            if (err) {
                return console.log('Expense data not saved');
            }
            $scope.expenseTask = expenseTask;
            console.log($scope.expenseTask)
        });
    };
    $scope.getExpenseTaskById();
}]);