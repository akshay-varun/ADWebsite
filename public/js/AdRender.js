function getRandomImage() {
    var images = ["images/ads/fruity.png", "images/ads/fashion.png"];
    var image = images[Math.floor(Math.random()*images.length)];
    return image;
}

function displayRandomImage() {
    var htmlImage = document.getElementById("banner1");
    htmlImage.src = getRandomImage();
   return
}