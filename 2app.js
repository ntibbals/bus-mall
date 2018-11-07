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

// var colors = ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"];

// var colorsEl =  document.getElementById()

// var ctx = document.getElementById("myChart").getContext('2d');

// var myChart = new Chart(ctx, {
//   var chartConfig = {
//     type: 'bar',
//     data: {
//         labels: names, //should mirror our colors array so it dynamic
//         datasets: [{
//             label: '# of Votes',
//             data: [12, 19, 3, 5, 2, 3], // whatever length of array, should correlate with values?  needs to match up appropriatelly 
//             backgroundColor: [
//                 'rgba(255, 99, 132, 0.2)',
//                 'rgba(54, 162, 235, 0.2)',
//                 'rgba(255, 206, 86, 0.2)',
//                 'rgba(75, 192, 192, 0.2)',
//                 'rgba(153, 102, 255, 0.2)',
//                 'rgba(255, 159, 64, 0.2)'
//             ],
//             borderColor: [
//                 'rgba(255,99,132,1)',
//                 'rgba(54, 162, 235, 1)',
//                 'rgba(255, 206, 86, 1)',
//                 'rgba(75, 192, 192, 1)',
//                 'rgba(153, 102, 255, 1)',
//                 'rgba(255, 159, 64, 1)'
//             ],
//             borderWidth: 1
//         }]
//     },
//     options: {
//         scales: {
//             yAxes: [{
//                 ticks: {
//                     beginAtZero:true //tells y axis to begin at 0
//                 }
//             }]
//         }
//     }
// });

// var myCharl = new Chart(ctx, chartConfig);

// chartConfig.data.datasets[0].data //nested nested nested

// // to enable click 

// data: new Array(colors.length).fill(0);
// //create id tages within each element  to target

// colorsEl.addEventListener('click', function(event) {
//   //validate target was a p tag
//   //get the id of the target p tag
//   //use the id to get the index locaiton for hwat data point to increment in data
//   var pId = event.target;
//   console.log(pEL);
//   var idx = colors.indexOf(pId);
//   if(idx !== -1) { // if index is not -1
//     //do a thing
//     myChart.data.dataset[0].data[idx] += 1; //increments by one
//     myChart.update();
//   }

// })