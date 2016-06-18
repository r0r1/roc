var Router = require('koa-router');
var router = new Router();

require('./controllers/users').register(router);
require('./controllers/tasks').register(router);

module.exports = router.middleware();
