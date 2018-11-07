'use-strict';
var products = [];
var names = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'];
var totalClicks = 0;
var lastSet = [];
var results = document.getElementById('results');
console.log(lastSet);
function Product(name, src) {
  this.name = name;
  this.src = src;
  // this.votes = votes,
  // this.views = views,
  products.push(this);
}
(function imageArray() {
  for (var i = 0; i < names.length; i++) {
    new Product(names[i], 'img/' + names[i] + '.jpg');
  }
})();
var tracker = {
  totalClicks: 0,
  leftImage: [], //image placeholders
  centerImage: [],
  rightImage: [],
  getRandomIndex: function () {
    return Math.floor(Math.random() * (20 - 1));
    console.log(this.getRandomIndex);
  },
  getUniqueImages: function () {
    //can do one at a time or all at once
    tracker.leftImage = products[tracker.getRandomIndex()]; //pushes one item at a random index[i] from products array to property leftImage within tracker variable
    while (tracker.leftImage in lastSet) {
      tracker.leftImage = products[tracker.getRandomIndex()];
    }
    tracker.centerImage = products[tracker.getRandomIndex()];
    while (tracker.centerImage in lastSet || tracker.centerImage === tracker.leftImage) {
      tracker.centerImage = products[tracker.getRandomIndex()];
    }
    tracker.rightImage = products[tracker.getRandomIndex()];
    while (tracker.rightImage in lastSet || tracker.rightImage === tracker.leftImage || tracker.rightImage === tracker.centerImage) {
      tracker.rightImage = products[tracker.getRandomIndex()];
    }
    lastSet.push = [tracker.leftImage, tracker.centerImage, tracker.rightImage];
    totalClicks++;
    console.log(totalClicks);
    if (totalClicks ===25) {
      document.getElementById('left-image').removeEventListener('click', tracker.getUniqueImages);
      document.getElementById('center-image').removeEventListener('click', tracker.getUniqueImages);
      document.getElementById('right-image').removeEventListener('click', tracker.getUniqueImages);
      renderResults();
    }
  },
  renderImages: function () { // all ideas or scaffold - think about how to break apart logic all properties you need on objects
    tracker.getUniqueImages();
    var mainEl = document.getElementById('bus-mall');
    var divEl = document.createElement('div');
    var leftImgEl = document.createElement('img');
    var centerImgEl = document.createElement('img');
    var rightImgEl = document.createElement('img');
    divEl.id = 'div-holder';
    leftImgEl.id = 'left-image';
    leftImgEl.src = tracker.leftImage.src;
    centerImgEl.id = 'center-image';
    centerImgEl.src = tracker.centerImage.src;
    rightImgEl.id = 'right-image';
    rightImgEl.src = tracker.rightImage.src;
    mainEl.appendChild(divEl);
    divEl.appendChild(leftImgEl);
    divEl.appendChild(centerImgEl);
    divEl.appendChild(rightImgEl);
  },
};
// var removeLeft = document.getElementById('left-image');
// var removeCenter = document.getElementById('center-image');
// var removeRight = document.getElementById('right-image');
// removeLeft.remove();
// removeCenter.remove();
// removeRight.remove();
// var removeDiv = document.getElementById('div-holder');
// removeDiv.remove();
// tracker.getUniqueImages();
function removeElements() {
  var removeLeft = document.getElementById('left-image');
  var removeCenter = document.getElementById('center-image');
  var removeRight = document.getElementById('right-image');
  removeLeft.remove();
  removeCenter.remove();
  removeRight.remove();
  tracker.getUniqueImages();
  var mainEl = document.getElementById('bus-mall');
  var divEl = document.createElement('div');
  var leftImgEl = document.createElement('img');
  var centerImgEl = document.createElement('img');
  var rightImgEl = document.createElement('img');
  leftImgEl.id = 'left-image';
  leftImgEl.src = tracker.leftImage.src;
  centerImgEl.id = 'center-image';
  centerImgEl.src = tracker.centerImage.src;
  rightImgEl.id = 'right-image';
  rightImgEl.src = tracker.rightImage.src;
  mainEl.appendChild(divEl);
  divEl.appendChild(leftImgEl);
  divEl.appendChild(centerImgEl);
  divEl.appendChild(rightImgEl);
}
tracker.renderImages();
function renderResults() {
  for (var i = 0; i < products.length; i++) {
    var listEl = document.createElement('li');
    listEl.textContent = products[i].votes + 'votes for this' + products[i].name + ' and ' + products[i].views + 'views';
  }
  results.appendChild(listEl);

}
document.getElementById('left-image').addEventListener('click', function () {
  removeElements();
  tracker.renderImages();
});
document.getElementById('center-image').addEventListener('click', function () {
  removeElements();
  tracker.renderImages();
});
document.getElementById('right-image').addEventListener('click', function () {
  removeElements();
  tracker.renderImages();
});

// tracker.renderImages();
console.log(tracker.leftImage);
console.log(tracker.centerImage);
console.log(tracker.rightImage);


function myClique (event) {
  tracker.getUniqueImages();
  var elId = event.target.id;
  for (var i = 0; i < products.length; i++)
    if (products[i].name === elId){
      products[i].votes++;
    }
}


leftImgEl.alt = tracker.leftImage.name;
centerImgEl.alt = tracker.centerImage.name;
rightImgEl.alt = tracker.rightImage.name;

products[tracker.leftImage].views++;
products[tracker.centerImage].views++;
products[tracker.rightImage].views++;