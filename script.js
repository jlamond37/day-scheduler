var timeDisplayEl = $('#time-display');
var hourTimeEl = $('.hour');
var rowEl = $('.row');
var hourRows = []
var hour = moment().format("HH");

function displayTime() {
    var rightNow = moment().format('MMM DD, YYYY');
    timeDisplayEl.text(rightNow);
  }

function hourTime() {
    var hourlyTime = moment().format('HH');
    if (rightNow.isAfter(moment('10:00', "HH:mm"))){
      return rowEl.setAttribute('style','background-color:grey');
    }
}












  displayTime();
  hourTime();