'use-strict';

var products = [];
// var name = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass']
// var src = ['./assets/bag.jpg', './assets/banana.jpg', './assets/bathroom.jpg', './assets/boots.jpg', './assets/breakfast.jpg', './assets/bubblegum.jpg', './assets/chair.jpg', './assets/cthulhu.jpg', './assets/dog-duck.jpg', './assets/dragon.jpg', './assets/pen.jpg', './assets/petsweep.jpg', './assets/scissors.jpg', './assets/shark.jpg', './assets/sweep.jpg', './assets/tauntaun.jpg', './assets/unicorn.jpg', './assets/usb.jpg', './assets/water-can.jpg', './assets/wine-glass.jpg']

function Product(name, src) {
     this.name = [],
    this.src = [],
    this.votes = votes,
    this.views = views,
    products.push(this);
}


var tracker = {
  totalClicks: 0, // counter for total clicks
  mainEl: document.getElementById('bus-mall'),
  divEl: document.createElement('div'),
  leftImgEl: document.createElement('img'),
  centerImgEl: document.createElement('img'),
  rightImgEl: document.createElement('img'),
  getRandomIndex: function () {
    return Math.random() * (20 - 1);
    console.log(this.getRandomIndex);
  },
  getUniqueImages: function () {
    this.getRandomIndex(); //can do one at a time or all at once
    for (var i = 0; i < this.name.legnth; i++)
      var leftUniqueImage = this.names.length[i] * randomIndex;
    var centerUniqueImage = this.name.length[i] * randomIndex;
    var rightUniqueImage = this.name.length[i] * randomIndex;
    return [leftUniqueImage, centerUniqueImage, rightUniqueImage];
  },
  renderImages: function () { // all ideas or scaffold - think about how to break apart logic all properties you need on objects 
    this.getUniqueImages();
    // mainEl = document.getElementById('bus-mall');
    // var divEl = document.createElement('div');
    // var leftImgEl = document.createElement('img');
    // var centerImgEl = document.createElement('img');
    // var rightImgEl = document.createElement('img');

    leftImgEl.id = 'left-image';
    centerImgEl.id = 'center-image';
    rightImgEl = 'right-image';

    mainEl.appendChild(divEl);
    divEl.appendChild(leftImgEl);
    divEl.appendChild(centerImgEl);
    devicePixelRatio.appendChild(rightImgEl);
  },

  addClickTracker: function () {

  },

  clickHandler: function (event) {//takes event in) // { // takes the event into 
  },
  };
// (function createProducts() {
//   ify that takes in all images and runs on page load, takes images and runs
// })()
tracker.renderImages();
new Product('bag', './assets/bag.jpg');
new Product('banana', './assets/banana.jpg');
new Product('bathroom', './assets/bathroom.jpg');
new Product('boots', './assets/boots.jpg');
new Product('breakfast', './assets/breakfast.jpg');
new Product('bubblegum','./assets/bubblegum.jpg');
new Product('chair', './assets/chair.jpg',);
new Product('cthulhu', './assets/cthulhu.jpg');
new Product('dog-duck', './assets/dog-duck.jpg');
new Product('dragon', './assets/dragon.jpg');
new Product('pen', './assets/pen.jpg');
new Product('petsweep', './assets/petsweep.jpg');
new Product('scissors', './assets/scissors.jpg');
new Product('shark', './assets/shark.jpg');
new Product('sweep', './assets/sweep.jpg');
new Product('tauntaun', './assets/tauntaun.jpg');
new Product('unicorn', './assets/unicorn.jpg');
new Product('usb', './assets/usb.jpg');
new Product('water can', './assets/water-can.jpg');
new Product('wine glass', './assets/wine-glass.jpg');
