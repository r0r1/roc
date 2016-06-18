'use strict';

var userService = require('../services/users');

module.exports.register = function (router) {
  router
  .get('/users', function *() {
    userService.get();
    this.body = yield userService.get();
  })
  .get('/users/:id', function *(next) {
    this.body = 'show user by id';
    yield next;
  })
  .post('/users/', function *(next) {

    yield userService.create({
      name: 'abc',
      password: '123',
      email: 'abc@sample.net'
    });

  })
  .patch('/users/:id', function *(next) {
    this.body = 'update user';
    yield next;
  })
  .delete('/users/:id', function *(next) {
    this.body = 'delete user by id';
    yield next;
  });
};
