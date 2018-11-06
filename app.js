'use-strict';

var products = [];
var names = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'];
function Product(name, src) {
  this.name = name;
  this.src = src;
  // this.votes = votes,
  // this.views = views,
  products.push(this);
}

(function imageArray() {
  for (var i = 0; i < names.length; i++) {
    new Product(names[i], 'assets/' + names[i] + '.jpg');
  }
})();
var tracker = {
  totalClicks: 0,
  //image placeholders
  leftImage: [],
  centerImage: [],
  rightImage: [],

  getRandomIndex: function () {
    return Math.floor(Math.random() * (20 - 1));
    console.log(this.getRandomIndex);
  },

  getUniqueImages: function () {
    //can do one at a time or all at once
    var leftUniqueImage = products[tracker.getRandomIndex()];
    console.log(leftUniqueImage);
    tracker.leftImage.push(leftUniqueImage);
    var centerUniqueImage = products[tracker.getRandomIndex()];
    console.log(centerUniqueImage);
    tracker.centerImage.push(centerUniqueImage);
    var rightUniqueImage = products[tracker.getRandomIndex()];
    console.log(rightUniqueImage);
    tracker.rightImage.push(rightUniqueImage);
    return [leftUniqueImage, centerUniqueImage, rightUniqueImage];
  },
  renderImages: function () { // all ideas or scaffold - think about how to break apart logic all properties you need on objects 
    this.getUniqueImages();
    var mainEl = document.getElementById('bus-mall');
    var divEl = document.createElement('div');
    var leftImgEl = document.createElement('img');
    var centerImgEl = document.createElement('img');
    var rightImgEl = document.createElement('img');

    leftImgEl.id = 'left-image';
    leftImgEl.src = tracker.leftImage.path;
    centerImgEl.id = 'center-image';
    centerImgEl.src = tracker.centerImage.path;
    rightImgEl.id = 'right-image';
    rightImgEl.src = tracker.rightImage.path;

    mainEl.appendChild(divEl);
    divEl.appendChild(leftImgEl);
    divEl.appendChild(centerImgEl);
    divEl.appendChild(rightImgEl);
  },

  // addClickTracker: function () {

  // },

  // clickHandler: function (event) {//takes event in) // { // takes the event into 
  // },
  // };

};

tracker.renderImages();

