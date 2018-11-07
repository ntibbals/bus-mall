'use-strict';
var ctx = document.getElementById('myChart').getContext('2d');
var products = [];
var names = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'];
var totalClicks = 0;
var lastSet = [];
var leftImgEl = document.getElementById('left-image');
var centerImgEl = document.getElementById('center-image');
var rightImgEl = document.getElementById('right-image');
// var results = document.getElementById('results');
// var localStorage = [];
// var myChart = new Chart(ctx, chartConfig);
// if(localStorage.Storage.getItem('votes')) {
//   var voteData = localStorage.getItem('votes');
//   myChart.data.datasets[0].data = JSON.parse(voteData);
//   myChart.update();
// }
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
  leftImage: [], //image placeholders
  centerImage: [],
  rightImage: [],
  getRandomIndex: function () {
    return Math.floor(Math.random() * (20 - 1));
  },
  getUniqueImages: function () {
    tracker.leftImage = products[tracker.getRandomIndex()]; //pushes one item at a random index[i] from products array to property leftImage within tracker variable
    console.log(tracker.leftImage);
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
    totalClicks++;
    if (totalClicks > 26) {
      leftImgEl.removeEventListener('click', myClique);
      centerImgEl.removeEventListener('click', myClique);
      rightImgEl.removeEventListener('click', myClique);
      renderResults();
    }
    leftImgEl.src = tracker.leftImage.src;
    centerImgEl.src = tracker.centerImage.src;
    rightImgEl.src = tracker.rightImage.src;
    leftImgEl.id = tracker.leftImage.name;
    centerImgEl.id = tracker.centerImage.name;
    rightImgEl.id = tracker.rightImage.name;
    tracker.leftImage.views++;
    tracker.centerImage.views++;
    tracker.rightImage.views++;
    lastSet.push = [tracker.leftImage, tracker.centerImage, tracker.rightImage];
    console.log(totalClicks);
  },
};
tracker.getUniqueImages();
function refreshSurvey (event) {
  event.preventDefault;
  window.location.reload(true);
}
function myClique (event) {
  var elId = event.target.id;
  for (var i = 0; i < products.length; i++)
    if (products[i].name === elId){
      products[i].votes++;
    }
  tracker.getUniqueImages();
  var pId = event.target.id;
  var voteX = products.indexOf(pId);
  if (voteX !== -1) {
    myChart.data.datasets[0].data[voteX] +=1;
    console.log(myChart.data.datasets[0].data);
    myChart.update();

    var jsonData = JSON.stringify(myChart.data.dataset[0].data);
    localStorage.setItem('votes', jsonData);
  }
}
tracker.getUniqueImages();
function renderResults() {
  var divElHook = document.getElementById('results-head');
  var divEl = document.createElement('div');
  divEl.textContent = 'Here are your results!';
  divElHook.appendChild(divEl);
  var resetDivEl = document.getElementById('reset-button');
  var resetEl = document.createElement('button');
  resetEl.textContent = 'Reset Survey';
  resetDivEl.appendChild(resetEl);
  resetEl.addEventListener('click', refreshSurvey);
  var names = [];
  for (var i = 0; i < products.length; i++) {
    names.push(products[i].name);
  }
  var votes = [];
  for (var j = 0; j < products.length; j++) {
    votes.push(products[j].votes);
  }

  // var colors = [];
  // for (var k = 0; k < products.length; k++) {
  //   colors.push(products[k].rgbaColor);
  // }
  var chartConfig = {
    type: 'bar',
    data: {
      labels: names,
      datasets: [{
        label: '# of Votes',
        data: votes,
        backgroundColor:['#e6194b', '#3cb44b', '#ffe119', '#4363d8', '#f58231', '#911eb4', '#46f0f0', '#f032e6', '#bcf60c', '#fabebe', '#008080', '#e6beff', '#9a6324', '#fffac8', '#800000', '#aaffc3', '#808000', '#ffd8b1', '#000075', '#808080', '#ffffff', '#000000',]
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  };
  return new Chart(ctx, chartConfig);
}
var myChart = new Chart(ctx, renderResults.chartConfig);
if(localStorage.getItem('votes')) {
  var voteData = localStorage.getItem('votes');
  myChart.data.datasets[0].data = JSON.parse(voteData);
  myChart.update();
}
leftImgEl.addEventListener('click', myClique);
centerImgEl.addEventListener('click', myClique);
rightImgEl.addEventListener('click', myClique);

console.log(tracker.leftImage);
console.log(tracker.centerImage);
console.log(tracker.rightImage);