'use strict';

var db = require('../models');

module.exports = {
  get: function () {
    return db.User.findAll({
      attributes: ['name', 'email']
    });
  },
  create: function *(data) {
    return db.User.create(data)
      .then(function(data){
        console.log('insert successfull.');
      })
  },
  update: function () {

  },
  destroy: function () {

  }
}
