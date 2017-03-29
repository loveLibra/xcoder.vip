/**
 * 弹幕
 * @author: xuqi<xuqi@i0011.com>
 * @date: 2017/3/29
 */
(function($) {
    var barrageOpt = {
        title: '想说点什么...',
        speed: 5
    };

    // 随机色
    function _radomColor() {
        var color = Math.floor(Math.random() * 16777215).toString(16);

        return '#' + ('000000' + color).slice(-6);
    }

    // canvas constructor
    function Canvas($el) {
        this.$el = $el;
    }

    // 新增弹幕实例
    Canvas.prototype.add = function(opt) {
        var _height = this.$el.height();
        var _width = this.$el.width();

        if (!opt.top) {
            opt.top = Math.floor(Math.random() * _height);
        }

        opt.top = parseInt(opt.top) + 'px'; // 取整+单位

        var barrage = new Barrage($.extend({
            color: _radomColor()
        }, opt));

        this.$el.append(barrage.$el);

        setTimeout(function() {
            barrage.$el.animate({
                right: _width
            }, barrage.speed * 1000, function() {
                barrage.$el.remove();
            });
        }, opt.delay * 1000 || 0);
    };

    // barrage constructor
    function Barrage(opt) {

        $.extend(this, barrageOpt, opt);

        this.$el = $('<span class="barrage" style="color:' + opt.color + ';top:' + opt.top + ';">' + this.title + '</span>');
    }

    $.fn.barrage = function(opt) {
        var canvas = new Canvas(this);

        return canvas;
    }
}(jQuery));