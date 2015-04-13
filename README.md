#Responsible Images.

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

russian dicumentation [http://www.sesmikcms.ru/blog/read/adaptivnye-izobrazhenija-responsive-images/](http://www.sesmikcms.ru/blog/read/adaptivnye-izobrazhenija-responsive-images/)

##Author        Kuzma Feskov <kfeskov@gmail.com>
##Copyright © 2015, Kuzma Feskov
