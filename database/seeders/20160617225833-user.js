'use strict';

let bcrypt = require('bcrypt');

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', [{
      name: 'Admin ROC',
      email: 'admin@roc.com',
      password: this.generateHash('password'),
      remember_token: null,
      avatar: null,
      created_at: new Date(),
      updated_at: new Date()
    }], {});
  },

  down: function (queryInterface, Sequelize) {

  },

  generateHash: function(password) {
    var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync(password, salt);
    return hash;
  }
};
