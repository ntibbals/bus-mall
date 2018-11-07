'use-strict';
var products = [];
var names = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'];
var totalClicks = 0;
var lastSet = [];
var leftImgEl = document.getElementById('left-image');
var centerImgEl = document.getElementById('center-image');
var rightImgEl = document.getElementById('right-image');
var results = document.getElementById('results');
var reset = document.getElementById('reset-button');
console.log(lastSet);
function Product(name, src) {
  this.name = name;
  this.src = src;
  this.votes = 0,
  this.views = 0,
  products.push(this);
}
(function imageArray() {
  for (var i = 0; i < names.length; i++) {
    new Product(names[i], 'img/' + names[i] + '.jpg');
  }
})();
var tracker = {
  // totalClicks: 0,
  leftImage: [], //image placeholders
  centerImage: [],
  rightImage: [],
  getRandomIndex: function () {
    return Math.floor(Math.random() * (20 - 1));
    console.log(this.getRandomIndex);
  },
  getUniqueImages: function () {   
    tracker.leftImage = products[tracker.getRandomIndex()]; //pushes one item at a random index[i] from products array to property leftImage within tracker variable
    console.log(tracker.leftImage);
    while (tracker.leftImage in lastSet) {
      tracker.leftImage = products[tracker.getRandomIndex()];
    }
    tracker.leftImage.views += 1;
    if (event) {
      tracker.leftImage.votes +=1;
    }
    tracker.centerImage = products[tracker.getRandomIndex()];
    while (tracker.centerImage in lastSet || tracker.centerImage === tracker.leftImage) {
      tracker.centerImage = products[tracker.getRandomIndex()];
    }
    tracker.centerImage.views += 1;
    if (event) {
      tracker.centerImage.votes +=1;
    }
    tracker.rightImage = products[tracker.getRandomIndex()];
    while (tracker.rightImage in lastSet || tracker.rightImage === tracker.leftImage || tracker.rightImage === tracker.centerImage) {
      tracker.rightImage = products[tracker.getRandomIndex()];
    }
    tracker.rightImage.views += 1;
    if (event) {
      tracker.leftImage.votes +=1;
    }

    leftImgEl.src = tracker.leftImage.src;
    centerImgEl.src = tracker.centerImage.src;
    rightImgEl.src = tracker.rightImage.src;
    lastSet.push = [tracker.leftImage, tracker.centerImage, tracker.rightImage];
    totalClicks++;
    console.log(totalClicks);
    if (totalClicks === 26) {
      leftImgEl.removeEventListener('click', tracker.getUniqueImages);
      centerImgEl.removeEventListener('click', tracker.getUniqueImages);
      rightImgEl.removeEventListener('click', tracker.getUniqueImages);
      renderResults();
    }
  },
};
tracker.getUniqueImages();

function renderResults() {
  var ulElHook = document.getElementById('results-head');
  var ulEl = document.createElement('div');
  ulEl.textContent = 'Here are your results!';
  ulElHook.appendChild(ulEl);
  for (var i = 0; i < products.length; i++) {
    var listEl = document.createElement('li');
    listEl.textContent = products[i].name + ' has ' + products[i].votes + ' votes and ' + products[i].views + ' views';
    results.appendChild(listEl);
  }
  var resetDivEl = document.getElementById('reset-button');
  var resetEl = document.createElement('button');
  resetEl.textContent = 'Reset Survey';
  resetDivEl.appendChild(resetEl);
  resetEl.addEventListener('click', refreshSurvey);

}
function refreshSurvey (event) {
  event.preventDefault;
  window.location.reload(true);
}
leftImgEl.addEventListener('click', tracker.getUniqueImages);
centerImgEl.addEventListener('click', tracker.getUniqueImages);
rightImgEl.addEventListener('click', tracker.getUniqueImages);
console.log(tracker.leftImage);
console.log(tracker.centerImage);
console.log(tracker.rightImage);

function createChart () {
var productResults = //need to build function for array of product results
var canvasEl = document.getElementById('voting-results');

new Chart (