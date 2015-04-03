Responsible Images.
http://www.sesmikcms.ru/blog/read/adaptivnye-izobrazhenija-responsive-images/

Use:
change background: url():
< div class="resp"
    img-array="{
                800:'images/banner_large.jpg',
                500:'images/banner_medium.jpg',
                0:'images/banner_small.jpg'
               }">
</div>
$('.resp').responsibleImages({isImg: false, retinaPrefix: '@2x'});

change img src:
< img class="resp2"
    src="filename"
    img-array="{
                800:'images/banner_large.jpg',
                500:'images/banner_medium.jpg',
                0:'images/banner_small.jpg'}" />
$('.resp2').responsibleImages({isImg: true, retinaPrefix: '@2x'});

options: {
   isImg : true|false, - true - change src, false - change background:url()
   retinaPrefix: {string} - this prefix will be added to the image
                            name before dot, if detected retina screen.
 }

Author        Kuzma Feskov <kfeskov@gmail.com>
Copyright (c) 2015, Kuzma Feskov
