'use strict';

let router = require('koa-router')();

router.get('/', async (ctx, next) => {
    await ctx.display('home', {
        title: 'Welcome',
        style: ['/home/index.css']
    });
});

module.exports = router;
