angular.module("ExpenseManagementApp").controller("ListExpenseController", ['$scope', '$location', 'ExpenseService', function ($scope, $location, ExpenseService) {

  $scope.expenseTasks = [];
    //Open new expense task window
    $scope.openNewExpenseForm = function(){
      $location.path("/newExpense");
    }

    //Get all expense task list
    $scope.getAllExpenseTaskList = function(){
      ExpenseService.getAllExpenseTask(function(err, expenseTasks){
        if(err){
          return console.log('Expense data not saved');
        }
        $scope.expenseTasks = expenseTasks;
      });
    };

    //Edit expense task
    $scope.editExpenseTask = function(expenseTaskId){
      $location.path("/newExpense/" + expenseTaskId);
    };

    //Delete expense task
    $scope.deleteExpenseTask = function(expenseTaskId){

      swal({
        title: "Are you sure?",
        text: "Your will not be able to recover this expense task!",
        type: "warning",
        showCancelButton: true,
        confirmButtonClass: "btn-danger",
        confirmButtonText: "Yes, delete it!",
        closeOnConfirm: false
      },
      function(){
        ExpenseService.deleteExpenseTaskById(expenseTaskId, function(err, deletedExpenseTask){
          if(err){
            return console.log('Expense data not saved');
          }
          $scope.expenseTasks = $scope.expenseTasks.filter(obj => obj.id !== deletedExpenseTask.id);
          swal("Deleted!", "Your expense task has been deleted.", "success");
        });
      });
      
    };
    $scope.showExpenseDetails = function(expenseTaskId){
      $location.path("/detailsExpense/" + expenseTaskId);
    }

    $scope.getAllExpenseTaskList();

}]);