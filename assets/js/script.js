// ------------- moment.js ---------------
const today = moment();
const hour = moment().hour();
console.log(hour);

$("#currentDay").text("Today is " + today.format("MMMM Do, YYYY") + " " + today.format("dddd"));

const refreshBtn = $('btn');
const todo9 = $('#todo9');
const saveBtn = $('#save-button');


// Click event causes alert "Hello World"
// Vanilla JS equivalent: `addEventListener`
// alertButtonEl.on('click', function () {
//   alert('Hello World');
// });

// Click event causes alert light theme toggle
// saveBtn.on('click', function (event) {
//   const element = event.target;
//   console.log(element);
// });

$( saveBtn ).click(function( event ) {
  const element = event.target;
  console.log(element);
  // alert( event.currentTarget === this ); // true
});

// Click event causes refresh
refreshBtn.on('click', function () {
  location.reload();
});
