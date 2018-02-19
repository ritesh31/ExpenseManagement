angular.module("ExpenseManagementApp").controller("NewExpenseController", ['$scope', '$location', '$routeParams', 'ExpenseService', function ($scope, $location, $routeParams, ExpenseService) {

  $scope.expenseTask = {};
  $scope.editExpenseTaskId = $routeParams.taskId;
  $scope.newExpenseTaskState = true;

  $('#createDateTimePicker').datepicker();
  $('#updateDateTimePicker').datepicker();
  
  //Save expense task method
  $scope.saveExpenseTask = function (isValid) {
    if (isValid) {
      alert('our form is amazing');
    }
    ExpenseService.saveExpenseTask($scope.expenseTask, function (err, savedExpenseTask) {
      if (err) {
        console.log('Expense data not saved');
      }
      swal("Task Created!", "Task created successfully!", "success")
      $location.path("/listExpense");
    });
  };

  //Get expense task by id
  $scope.getExpenseTaskById = function () {
    if ($scope.editExpenseTaskId) {
      $scope.newExpenseTaskState = false;
      ExpenseService.getExpenseTaskById($scope.editExpenseTaskId, function (err, expenseTask) {
        if (err) {
          return console.log('Expense data not saved');
        }
        $scope.expenseTask = expenseTask;
      });
    }
  };

  //Update expense task by id
  $scope.updateExpenseTask = function () {
        ExpenseService.updateExpenseTaskById($scope.editExpenseTaskId, $scope.expenseTask, function (err, updatedExpenseTask) {
      if (err) {
        return console.log('Expense data not saved');
      }
      swal("Task Updated!", "Task updated successfully!", "success")
      $location.path("/listExpense");
    });
  };

  $scope.backToListExpenseTask = function(){
    $location.path("/listExpense");
  };

  $scope.getExpenseTaskById();

}]);
