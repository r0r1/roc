var koa = require('koa');
var koaRouter = require('koa-router');

var app = koa();
var router = koaRouter();

var mount = require('koa-mount');
var db = require('./app/models');
var co = require('co');
var routes = require('./app/routes');

app.use(mount('/api/v1', routes));

app.listen(3000);
