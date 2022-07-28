var timeDisplayEl = $('#time-display');
var hourTimeEl = $('.hour');
var rowEl = $('.row');
var hourRows = []
var hour = moment().format("HH");
var rightNow;
var rowsList = document.querySelectorAll(".row");
// console.log(rowsList);
console.log(hour)
rowsList.forEach(function(row){
  var rowEl = row.children[0];
  // console.log(rowEl.parentElement);
  var rowHour = row.children[0].getAttribute("class").split(" ")[1];
  // console.log(rowHour);
  if (rowHour < hour) {
    console.log('inside first if');
    rowEl.parentElement.setAttribute('style','background-color:grey');
  } else if (rowHour == hour) {
    console.log('inside second if');
    rowEl.parentElement.setAttribute('style','background-color:red');
  } else {
    console.log('inside else');
    rowEl.parentElement.setAttribute('style','background-color:green');
  }
})

function displayTime() {
    rightNow = moment().format('MMM DD, YYYY');
    timeDisplayEl.text(rightNow);
  }

function hourTime() {
    var hourlyTime = moment().format('HH');
    // if (rightNow.isAfter(moment('10:00', "HH:mm"))){
    //   return rowEl.setAttribute('style','background-color:grey');
    // }
}












  displayTime();
  hourTime();