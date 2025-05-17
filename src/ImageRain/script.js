_images = [];
const START_TOP = 0;
const IMAGE_WIDTH = 5;


addImageBlocks();
addImageBlocks();
addImageBlocks();


function addImageBlocks(){
    const newImage = document.createElement("img");
    newImage.src = "logo.jpg";
    newImage.style.width = IMAGE_WIDTH + '%';
    newImage.style.height = 'auto';

    newImage.style.left = (getRandomIntInRange(IMAGE_WIDTH,100) - IMAGE_WIDTH) + '%';
    newImage.style.top = (getRandomIntInRange(START_TOP,100) - IMAGE_WIDTH) + '%';;

    
    document.getElementById('TestArea').appendChild(newImage);

    _images.push(newImage);

}


function getRandomIntInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(getRandomIntInRange(5, 15)); // z. B. 8
