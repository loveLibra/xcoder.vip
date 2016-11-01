/**
 * xcoder main
 * @author: xuqi<xuqi@i0011.com>
 * @date: 2016/10/10
 */
'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const at = require('art-template');

const dispatcher = require('./dispatcher');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

// set view engine
at.config('extname', '.html');
app.engine('.html', at.__express);
app.set('view engine', 'html');
app.set('views', path.join(__dirname, 'views'));

// router dispatcher
dispatcher(app);

app.listen(3000);