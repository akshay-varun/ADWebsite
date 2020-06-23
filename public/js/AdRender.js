function getRandomImage() {
    var images = ["images/ads/FRUITS.png", "images/ads/SPORTS.png"];
    var image = images[Math.floor(Math.random()*images.length)];
    return image;
}

function displayRandomImage() {
    var htmlImage = document.getElementById("banner1");
    htmlImage.src = getRandomImage();
   return
}