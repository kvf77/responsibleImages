#Responsible Images (jQuery plugin)

In these examples, a DIV images placed in a CSS style background: url (), and at IMG, respectively, we use the attribute SRC, as it should be.

Attribute img-array contains the URL alternative images for different resolutions. Number of alternative image is not limited to three, the number of them you can easily change.

##Use:

###change background: url():

```html
<div class="resp"
    img-array="{
                800:'images/banner_large.jpg',
                500:'images/banner_medium.jpg',
                0:'images/banner_small.jpg'
               }">
</div>
```

```javascript
$('.resp').responsibleImages({isImg: false, retinaPrefix: '@2x'});
```

###change img src:

```html
<img class="resp2"
    src="filename"
    img-array="{
                800:'images/banner_large.jpg',
                500:'images/banner_medium.jpg',
                0:'images/banner_small.jpg'}" />
```

```javascript
$('.resp2').responsibleImages({isImg: true, retinaPrefix: '@2x'});

options: {
   isImg : true|false, - true - change src, false - change background:url()
   retinaPrefix: {string} - this prefix will be added to the image
                            name before dot, if detected retina screen.
}
```

###How does the substitution of images

```javascript
$(document).ready(function () {
    $(window).resize(function () {
        $('.resp').responsibleImages({isImg: false, retinaPrefix: '@2x'});
        $('.resp2').responsibleImages({isImg: true, retinaPrefix: '@2x'});
    });

    $('.resp').responsibleImages({isImg: false, retinaPrefix: '@2x'});
    $('.resp2').responsibleImages({isImg: true, retinaPrefix: '@2x'});
});
```

Checkpoints are described in a `JSON` object. Where is the key - a reference point, and the value - path to the file and its name. Checkpoint `0` must always be - it controls the `default value`. Ranking of values is not important, the function sorts the array in the right order it.

###Adaptive images for retina-like screens

In fact, in their work function is based on the value of 'devicePixelRatio'. If this value is greater than or equal to 2, then we conclude that the user retina-like screen.

Determine this function adds to the resulting image URL prefix that you specify in the call. In our example URL `image/banner_small.jpg` turn into `image/banner_small@2x.jpg`. That is, the prefix is appended to the name of the image before the extension.

russian dicumentation [http://www.sesmikcms.ru/blog/read/adaptivnye-izobrazhenija-responsive-images/](http://www.sesmikcms.ru/blog/read/adaptivnye-izobrazhenija-responsive-images/)

##Author        Kuzma Feskov <kfeskov@gmail.com>
##Copyright © 2015, Kuzma Feskov
