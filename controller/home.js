'use strict';

let router = require('koa-router')();

router.get('/', async (ctx, next) => {
    await ctx.render('home', {
        title: 'Welcome | x-Man Coder',
        keywords: 'X-Coder,X,Coder,徐祁,南京,前端,有货,启业云',
        description: '这是一个神奇的网站',
        style: ['http://localhost:3000/home/index.css']
    });
});

module.exports = router;
