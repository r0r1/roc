module.exports.register = function (router) {
  router
  .get('/tasks', function *(next) {
    this.body = 'get tasks';
    yield next;
  });
}
