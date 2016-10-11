/**
 * router分发
 * @author: xuqi<xuqi@i0011.com>
 * @date: 2016/10/10
 */
'use strict';

module.exports = app => {
    app.use('/', (req, res) => {
        res.render('home');
    });
};
