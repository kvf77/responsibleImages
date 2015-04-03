/**
 * Responsible Images.
 * http://www.sesmikcms.ru/blog/read/adaptivnye-izobrazhenija-responsive-images/
 *
 * Use:
 * change background: url():
 * <div class="resp"
 *      img-array="{
 *                  800:'images/banner_large.jpg',
 *                  500:'images/banner_medium.jpg',
 *                  0:'images/banner_small.jpg'
 *                 }">
 * </div>
 * $('.resp').responsibleImages({isImg: false, retinaPrefix: '@2x'});
 *
 * change img src:
 * <img class="resp2"
 *      src="filename"
 *      img-array="{
 *                  800:'images/banner_large.jpg',
 *                  500:'images/banner_medium.jpg',
 *                  0:'images/banner_small.jpg'}" />
 * $('.resp2').responsibleImages({isImg: true, retinaPrefix: '@2x'});
 *
 * options: {
 *     isImg : true|false, - true - change src, false - change background:url()
 *     retinaPrefix: {string} - this prefix will be added to the image
 *                              name before dot, if detected retina screen.
 * }
 *
 * @author        Kuzma Feskov <kfeskov@gmail.com>
 * @copyright     Copyright (c) 2015, Kuzma Feskov
 */
(function ($) {
    jQuery.fn.responsibleImages = function (options) {
        var data = eval('(' + $(this).attr('img-array') + ")");
        var arr = [];

        jQuery.each(data, function (key, val) {
            arr.push(key);
        });

        arr.sort(function (a, b) {
            return b - a
        });

        img = '';
        jQuery.each(arr, function (key) {
            if (img == '' && $(window).width() > arr[key]) {
                img = data[arr[key]];
            }
        });

        if ('devicePixelRatio' in window && window.devicePixelRatio >= 2) {
            img = img.replace(/\.(png|jpg|gif)+$/i, options['retinaPrefix'] + '.$1');
        }

        if (false !== options['isImg']) {
            $(this).attr('src', img);
        } else {
            $(this).css('background', 'url(' + img + ') no-repeat');
        }
    };
})(jQuery);