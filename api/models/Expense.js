/**
 * Expense.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    id: {
      autoIncrement: true,
      primaryKey: true
    },
    title: {
      type: 'string'
    },
    description: {
      type: 'string'
    },
    amount: {
      type: 'integer'
    },
    createdDate: {
      type: 'string'
    },
    updatedDate: {
      type: 'string'
    }
  }
};

