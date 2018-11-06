'use-strict';

var products = [];
// var name = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'];
// var src = ['./assets/bag.jpg', './assets/banana.jpg', './assets/bathroom.jpg', './assets/boots.jpg', './assets/breakfast.jpg', './assets/bubblegum.jpg', './assets/chair.jpg', './assets/cthulhu.jpg', './assets/dog-duck.jpg', './assets/dragon.jpg', './assets/pen.jpg', './assets/petsweep.jpg', './assets/scissors.jpg', './assets/shark.jpg', './assets/sweep.jpg', './assets/tauntaun.jpg', './assets/unicorn.jpg', './assets/usb.jpg', './assets/water-can.jpg', './assets/wine-glass.jpg'];

function Product() {
  this.name = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'],
    this.src = ['./assets/bag.jpg', './assets/banana.jpg', './assets/bathroom.jpg', './assets/boots.jpg', './assets/breakfast.jpg', './assets/bubblegum.jpg', './assets/chair.jpg', './assets/cthulhu.jpg', './assets/dog-duck.jpg', './assets/dragon.jpg', './assets/pen.jpg', './assets/petsweep.jpg', './assets/scissors.jpg', './assets/shark.jpg', './assets/sweep.jpg', './assets/tauntaun.jpg', './assets/unicorn.jpg', './assets/usb.jpg', './assets/water-can.jpg', './assets/wine-glass.jpg'],
    this.votes = 0,
    this.views = 0,
    products.push(this);
};

var tracker = {
  totalClicks: 0,
};

function getRandomIndex() {
  var randomIndex = Math.floor(Math.random() * (20 - 1));
  console.log(randomIndex);
  return randomIndex;
}
function getUniqueImageOne() {
  // getRandomIndex();
  console.log(this.randomIndex);
  console.log(this.src);
  var imageOne = products.src[getRandomIndex()];
  console.log(imageOne);
  return imageOne;
  console.log(imageOne);
}
function getUniqueImageTwo() {
  getRandomIndex();
  for (var i = 0; i < this.name.length; i++)
    var imageTwo = this.src.length[i] * this.randomIndex;
  console.log(imageTwo);
  return imageTwo;
}
function getUniqueImageThree() {
  getRandomIndex();
  for (var i = 0; i < this.name.length; i++)
    var imageThree = this.src.length[i] * this.randomIndex;
  console.log(imageThree);
  return imageThree;
}

function renderImages() {
  getUniqueImageOne();
  getUniqueImageTwo();
  getUniqueImageThree();
  var mainEl = document.getElementById('bus-mall');
  var divEl = document.createElement('div');
  var leftImgEl = document.createElement('img');
  var centerImgEl = document.createElement('img');
  var rightImgEl = document.createElement('img');

  leftImgEl.id = 'left-image';
  leftImgEl.textContent = this.imageOne;
  centerImgEl.id = 'center-image';
  centerImgEl.textContent = this.imageTwo;
  rightImgEl.id = 'right-image';
  centerImgEl.textContent = this.imageThree;


  mainEl.appendChild(divEl);
  divEl.appendChild(leftImgEl);
  divEl.appendChild(centerImgEl);
  divEl.appendChild(rightImgEl);
}

Product();
renderImages();

