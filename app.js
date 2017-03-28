/**
 * xcoder main
 * @author: xuqi<xuqi@i0011.com>
 * @date: 2016/10/10
 */
'use strict';

const http = require('http');
const path = require('path');

const koa = require('koa');
const hbs = require('koa-hbs');
const serve = require('koa-static');

let app = new koa();

app.use(hbs.middleware({
    viewPath: __dirname + '/view',
    extname: '.hbs',
    partialsPath: __dirname + '/view/partial',
    defaultLayout: 'layout'
}));

app.use(serve(__dirname + '/public'));

require('./dispatcher')(app);

// http.createServer(app.callback()).listen(3000);

app.listen(3000, () => {
    console.log('xcoder power by koa2');
});