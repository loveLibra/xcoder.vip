/**
 * router分发
 * @author: xuqi<xuqi@i0011.com>
 * @date: 2016/10/10
 */
'use strict';

const router = require('koa-router')();

const home = require('./controller/home');

module.exports = app => {

    // 首页
    router.use('/', home.routes());

    app.use(router.routes()).use(router.allowedMethods());
};
