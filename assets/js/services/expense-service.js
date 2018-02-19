angular.module("ExpenseManagementApp").service("ExpenseService", ['$http', function ($http) {

    //Save expense task service
    this.saveExpenseTask = function (data, callback) {
        $http.post('Expense', data)
            .then(function (response) {
                if (callback) {
                    callback(null, response);
                }
            }).catch(function (err) {
                if (callback) {
                    callback(err, null);
                }
            });
    };

    //Get all expense tasks
    this.getAllExpenseTask = function (callback) {
        $http.get('Expense')
            .then(function (response) {
                if (callback) {
                    callback(null, response.data);
                }
            }).catch(function (err) {
                if (callback) {
                    callback(err, null);
                }
            });
    };

    //Delete expense task by id
    this.deleteExpenseTaskById = function (expenseTaskId, callback) {
        $http.delete('Expense/' + expenseTaskId)
            .then(function (response) {
                if (callback) {
                    callback(null, response.data);
                }
            }).catch(function (err) {
                if (callback) {
                    callback(err, null);
                }
            });
    };

    //Get expense task by id
    this.getExpenseTaskById = function (expenseTaskId, callback) {
        $http.get('Expense/' + expenseTaskId)
            .then(function (response) {
                if (callback) {
                    callback(null, response.data);
                }
            }).catch(function (err) {
                if (callback) {
                    callback(err, null);
                }
            });
    };

    //Update expense task by id
    this.updateExpenseTaskById = function (expenseTaskId, expenseTask, callback) {
        $http.put('Expense/' + expenseTaskId, expenseTask)
            .then(function (response) {
                if (callback) {
                    callback(null, response.data);
                }
            }).catch(function (err) {
                if (callback) {
                    callback(err, null);
                }
            });
    };
}]);
