'use strict';

let router = require('koa-router')();

router.get('/', async (ctx, next) => {
    await ctx.display('home', {
        title: 'Welcome',
        style: [
            '/home/index.css'
        ],
        script: [
            '//cdn.bootcss.com/jquery/3.2.1/jquery.min.js',
            '/home/barrage.js',
            '/home/index.js'
        ]
    });
});

module.exports = router;
