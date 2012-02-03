$(function () {
    var selector = {
        photo   : '.list',
        obi     : '#list',
        visible : '#listbox',
        left    : '#left',
        right   : '#right',
        screen  : '#bigscreen',
        info    : '#info'
    };
    var pos = 0;
    var slideWide = $(selector.visible).innerWidth();
    var num = $(selector.photo).length;
    if (num === 0) {
        $(selector.left).css('display', 'none');
        $(selector.right).css('display', 'none');
    } else {
        var photoWidth = $(selector.photo).outerWidth({margin:true});

        $(selector.obi).css('width', (num * photoWidth) + 'px');

        // 右側がクリックされたらulを左にずらす
        $(selector.right).click(function(){
            if (pos <= slideWide * -1 * (num / 5 - 1)) {
                pos = pos;
            } else {
                pos -= slideWide;
                $(selector.obi).animate({'left': pos + 'px'}, 'normal', 'swing');
            }
        })

        // 左側がクリックされたらulを右にずらす
        $(selector.left).click(function(){
            if (pos >= 0) {
                pos = pos;
            } else {
                pos += slideWide;
                $(selector.obi).animate({'left': pos + 'px'}, 'normal', 'swing');
            }
        })

        // liがクリックされたら内容をdivに書き込み、pにidを付与する
        $(selector.photo).click(function(){
            var im = $(this)[0].childNodes[0].childNodes[0].src,
                alt = $(this)[0].childNodes[0].childNodes[0].alt;
            $(selector.screen).children()[0].childNodes[0].src = im;
            $(selector.info).html(alt);
        })
    }
});
