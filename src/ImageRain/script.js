_images = [];
const START_TOP = 0;
const IMAGE_WIDTH = 25;
const SPEED = 1;
const UNIT = 'px';

setInterval(moveBlocks,1); 


function moveBlocks(){
  _images.forEach(element => {
    let parsedTop = parseFloat(getComputedStyle(element).top)
    if(parsedTop<0)parsedTop='100';
    if(parsedTop>100)parsedTop='0';
    element.style.top = (parsedTop + SPEED) + UNIT;
  });
}



function addImageBlocks(anzahl = 1){
  for(let ni = 1;ni<anzahl;ni++){
    newImage = document.createElement("img");
    newImage.src = "logo.jpg";
    newImage.style.width = IMAGE_WIDTH + UNIT;
    newImage.style.height = 'auto';
    newImage.style.left = (getRandomIntInRange(IMAGE_WIDTH,100) - IMAGE_WIDTH) + UNIT;
    newImage.style.top = (getRandomIntInRange(START_TOP,100) - IMAGE_WIDTH) + UNIT;;
    document.getElementById('TestArea').appendChild(newImage);
    _images.push(newImage);
  }
}


function getRandomIntInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(getRandomIntInRange(5, 15)); // z. B. 8
