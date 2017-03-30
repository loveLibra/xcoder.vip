var barrage = $('.top').barrage();

barrage.add({
    title: 'Hello, I am x-coder'
});

barrage.add({
    title: '哈！你可能看到了一个假的弹幕...',
    delay: 4
});

$('#add-barrage').mouseenter(function() {
});

var $barrageTitle = $('.barrage-title');
$('#send-barrage').click(function() {
    var title = $.trim($barrageTitle.val()) || $barrageTitle.attr('placeholder');

    barrage.add({
        title: title
    });
});