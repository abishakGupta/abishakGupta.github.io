var random_images_array = ['image_1.jpg', 'image_2.jpg', 'grim.gif', 'bomb.gif'];

//var random_images_array = glob('/images/{*.jpg,*.png,*.gif}', GLOB_BRACE);
function getRandomImage(imgAr, path) {
path = path || 'images/'; // default path here
var num = Math.floor( Math.random() * imgAr.length );
var img = imgAr[ num ];
var imgStr = '<img src="' + path + img + '" alt = "" width ="328">';
document.write(imgStr); document.close();
}
            