var timeDisplayEl = $('#time-display');
var hourTimeEl = $('.hour');
var rowEl = $('.row');
var hourRows = []
var hour = moment().format("HH");
var rightNow;
var rowsList = document.querySelectorAll(".row");
var save = document.querySelectorAll(".save");
var tasks = document.querySelectorAll(".tasks");
// console.log(rowsList);



function displayTime() {
    rightNow = moment().format('MMM DD, YYYY');
    timeDisplayEl.text(rightNow);
  }


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


displayTime();



var saveText = localStorage.getItem('saveText');

if (saveText === null) {
  saveText = 0;
}

// tasks.textContent = saveText;
console.log(saveText);

save.addEventListener('click', function (event)
{
  // tasks.textContent = saveText;
  event.preventDefault();
  localStorage.setItem('saveText', JSON.stringify(saveText));
  
});




