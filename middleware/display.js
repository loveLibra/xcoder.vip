/**
 * 渲染中间件
 * 扩展默认参数
 * @author: xuqi<xuqi@i0011.com>
 * @date: 2017/3/29
 */

'use strict';

const config = require('../config');
const _ = require('lodash');

module.exports = async (ctx, next) => {

    ctx.display = async (view, option) => {
        let title = option.title ? `${option.title} | ${config.title}` : config.title;

        if (option.style) {
            option.style.map(style => config.static + style);
        }

        if (option.script) {
            option.script.map(script => config.static + style);
        }

        await ctx.render(view, _.extend(option, {
            title: title,
            keywords: config.keywords,
            description: config.description
        }));
    }

    await next();
};