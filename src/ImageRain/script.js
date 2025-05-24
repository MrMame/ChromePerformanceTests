_images = [];
const START_TOP = 0;
const IMAGE_WIDTH = 25;
const SPEED = 1;
const UNIT = 'px';

setInterval(moveBlocks,1); 


function moveBlocks(){
  let areaHeight = document.getElementById('TestArea').clientHeight;
  _images.forEach(element => {
    let elementTop = parseFloat(getComputedStyle(element).top)
    if(elementTop<0)element.speed=SPEED;
    if((elementTop+IMAGE_WIDTH)>areaHeight)element.speed=SPEED*-1;
    element.style.top = (elementTop + element.speed) + UNIT;
  });
}



function addImageBlocks(anzahl = 1){
  let areaHeight = document.getElementById('TestArea').clientHeight;
  let areaWidth = document.getElementById('TestArea').clientLeft
  for(let ni = 1;ni<anzahl;ni++){
    newImage = document.createElement("img");
    newImage.src = "logo.jpg";
    newImage.style.width = IMAGE_WIDTH + UNIT;
    newImage.style.height = 'auto';
    newImage.style.left = (getRandomIntInRange(IMAGE_WIDTH,areaWidth) - IMAGE_WIDTH) + UNIT;
    newImage.style.top = (getRandomIntInRange(START_TOP,areaHeight) - IMAGE_WIDTH) + UNIT;
    newImage.speed = SPEED;
    document.getElementById('TestArea').appendChild(newImage);
    _images.push(newImage);
  }
}


function getRandomIntInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(getRandomIntInRange(5, 15)); // z. B. 8
