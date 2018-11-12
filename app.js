'use-strict';
var ctx = document.getElementById('myChart').getContext('2d'); //hook for chart
var products = [];
var names = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'];
var totalClicks = 0; // counter for each image click
var lastSet = []; //holds last image shown to ensure no duplication round after round
var leftImgEl = document.getElementById('left-image'); //hooks to image placements
var centerImgEl = document.getElementById('center-image');
var rightImgEl = document.getElementById('right-image');
function Product(name, src) { //object constructor holding properties for objects
  this.name = name;
  this.src = src;
  this.votes = 0,
  this.views = 0,
  products.push(this);
}
(function imageArray() { //for loop to pull images out of folder
  for (var i = 0; i < names.length; i++) {
    new Product(names[i], 'img/' + names[i] + '.jpg');
  }
})();
var tracker = { //variable that holds the random images generated, function that creates random index, and function to grab random image
  leftImage: [], //image placeholders
  centerImage: [],
  rightImage: [],
  getRandomIndex: function () { //random generator designed to grab image from image array
    return Math.floor(Math.random() * (20 - 1));
  },
  getUniqueImages: function () {
    tracker.leftImage = products[tracker.getRandomIndex()]; //pushes one item at a random index[i] from products array to property leftImage within tracker variable
    tracker.centerImage = products[tracker.getRandomIndex()];
    tracker.rightImage = products[tracker.getRandomIndex()];
    while (tracker.leftImage === tracker.centerImage || tracker.rightImage === tracker.leftImage || tracker.rightImage === tracker.centerImage || lastSet.includes(tracker.leftImage) || lastSet.includes(this.centerImage) || lastSet.includes(this.rightImage)) { //while loop that ensures no duplicates
      tracker.leftImage = products[tracker.getRandomIndex()]; //if duplicate found, will grab another and continue through
      tracker.centerImage = products[tracker.getRandomIndex()];
      tracker.rightImage = products[tracker.getRandomIndex()];
    }
    totalClicks++; //tracks total clicks
    lastSet[0] = tracker.leftImage; //pushes image selected into array to pull from in checking for duplicates next roll
    lastSet[1] = tracker.centerImage;
    lastSet[2] = tracker.rightImage;
    leftImgEl.style.borderRadius = '10px';
    leftImgEl.src = tracker.leftImage.src; //image elements placing images on HTML
    centerImgEl.style.borderRadius = '10px';
    centerImgEl.src = tracker.centerImage.src;
    rightImgEl.style.borderRadius = '10px';
    rightImgEl.src = tracker.rightImage.src;
    leftImgEl.id = tracker.leftImage.name; //assigning id for vote tracker
    centerImgEl.id = tracker.centerImage.name;
    rightImgEl.id = tracker.rightImage.name;
    tracker.leftImage.views++; //tallying views of each individual image
    tracker.centerImage.views++;
    tracker.rightImage.views++;
    if (totalClicks > 26) { //tracks total clicks to remove event listeners once 25 clicks occur
      leftImgEl.removeEventListener('click', myClique);
      centerImgEl.removeEventListener('click', myClique);
      rightImgEl.removeEventListener('click', myClique);
      renderResults();
    }
  },
};
tracker.getUniqueImages(); //calls function to render images
function refreshSurvey (event) { //tied into button to reload page
  event.preventDefault;
  window.location.reload(true);
}
function myClique (event) { //tracks votes on each selected image
  var elId = event.target.id;
  for (var i = 0; i < products.length; i++)
    if (products[i].name === elId){
      products[i].votes++;
    }
  tracker.getUniqueImages();
}
function renderResults() { //function that displays results once 25 clicks reached
  var divElHook = document.getElementById('results-head');
  var divEl = document.createElement('div');
  divEl.textContent = 'The results are in!';
  divElHook.appendChild(divEl);
  var resetDivEl = document.getElementById('reset-button');
  var resetEl = document.createElement('button');
  resetEl.style.width = '400px';
  resetEl.style.height = '75px';
  resetEl.style.borderRadius = '10px';
  resetEl.style.backgroundColor ='#000000';
  resetEl.style.color = 'ffffff';
  resetEl.textContent = 'Choose Your Destiny - Reset';
  resetDivEl.appendChild(resetEl);
  resetEl.addEventListener('click', refreshSurvey);
  var votes = [];
  for (var j = 0; j < products.length; j++) {
    votes.push(products[j].votes);
  }
  var votedArray = []; //defined array to tallys votes before refresh
  var votesArray = []; //defined array for votes each render results
  if (localStorage.getItem('votes')) {
    var votesData = localStorage.getItem('votes');
    votedArray = JSON.parse(votesData); //pulls from local storage and pushes into defined array
    for ( var h = 0; h < products.length; h++) {
      votedArray[h] = parseInt(votedArray[h]);
      votes[h] += votedArray[h];
    }
  }
  var chartConfig = { //defined variable to hold chart properties
    type: 'horizontalBar',
    data: {
      labels: names,
      datasets: [{
        label: ' Total Number of Votes',
        data: votes,
        color: '#000000',
        backgroundColor:[
          'rgba(125,249,255)',
          'rgba(153,102,204)',
          'rgba(255,51,204)',
          'rgba(0,255,255)',
          'rgba(42,82,190)',
          'rgba(253,238,0)',
          'rgba(63,0,255)',
          'rgba(102,255,0)',
          'rgba(0,20,168)',
          'rgba(255,56,0)',
          'rgba(0,255,0)',
          'rgba(125,249,255)',
          'rgba(255,255,0)',
          'rgba(244,0,161)',
          'rgba(255,191,0)',
          'rgba(39,59,226)',
          'rgba(253,14,53)',
          'rgba(255,250,250)',
          'rgba(0,250,154)',
          'rgba(204,255,0)',],
        borderColor: [],
        borderWidth: 2
      }]
    },
    options: {
      scales: {
        yAxes: [{
          plotOptions: {
            series: {
              groupPadding: 0
            }
          },
          barPercentage: 2.0,
          categoryPercentage: .5,
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  };
  var voteData = JSON.stringify(votes); //pushes data into local storage before refresh
  votesArray.push(voteData);
  localStorage.setItem('votes', votesArray);
  return new Chart(ctx, chartConfig);
}
leftImgEl.addEventListener('click', myClique);
centerImgEl.addEventListener('click', myClique);
rightImgEl.addEventListener('click', myClique);
console.log(tracker.leftImage);
console.log(tracker.centerImage);
console.log(tracker.rightImage);

