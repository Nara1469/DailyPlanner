// ------------- moment.js ---------------
const today = moment();
// const hour = moment().hour();
const hour = 13;
console.log(hour);

$("#currentDay").text("Today is " + today.format("MMMM Do, YYYY") + " " + today.format("dddd"));

const workHour = [9, 10, 11, 12, 13, 14, 15, 16, 17];
let todoArray = [
  {
    actHour: "9",
    actText: ""
  },
  {
    actHour: "10",
    actText: ""
  },
  {
    actHour: "11",
    actText: ""
  },
  {
    actHour: "12",
    actText: ""
  },
  {
    actHour: "13",
    actText: ""
  },
  {
    actHour: "14",
    actText: ""
  },
  {
    actHour: "15",
    actText: ""
  },
  {
    actHour: "16",
    actText: ""
  },
  {
    actHour: "17",
    actText: ""
  }
];


function colorCode() {
  for (let i = 0; i < workHour.length; i++) {
    const element = workHour[i];
    const todoId = "#" + "todo" + element;
    console.log(todoId);
    if (element < hour) {
      $(todoId).addClass("past");
    } 
    if (element === hour) {
      $(todoId).addClass("present");
    }
    if (element > hour) {
      $(todoId).addClass("future");
    }
  }
}

function init() {
  colorCode();
}

init();

// ------------- Event Listener ---------------

$('#button9').on('click', function() {
  const text = $('#todo9').children(0).val();
  if (text) {
    todoArray[0].actText = text;
    localStorage.clear();
    localStorage.setItem("todoArray", JSON.stringify(todoArray));
  }
});

$('#button10').on('click', function() {
  const text = $('#todo10').children(0).val();
  console.log(text);
  if (text) {
    todoArray[1].actText = text;
    localStorage.clear();
    localStorage.setItem("todoArray", JSON.stringify(todoArray));
  }
});

$('#button11').on('click', function() {
  const text = $('#todo11').children(0).val();
  console.log(text);
  if (text) {
    todoArray[2].actText = text;
    localStorage.clear();
    localStorage.setItem("todoArray", JSON.stringify(todoArray));
  }
});

$('#button12').on('click', function() {
  const text = $('#todo12').children(0).val();
  console.log(text);
  if (text) {
    todoArray[3].actText = text;
    localStorage.clear();
    localStorage.setItem("todoArray", JSON.stringify(todoArray));
  }
});

$('#button13').on('click', function() {
  const text = $('#todo13').children(0).val();
  console.log(text);
  if (text) {
    todoArray[4].actText = text;
    localStorage.clear();
    localStorage.setItem("todoArray", JSON.stringify(todoArray));
  }
});

$('#button14').on('click', function() {
  const text = $('#todo14').children(0).val();
  console.log(text);
  if (text) {
    todoArray[5].actText = text;
    localStorage.clear();
    localStorage.setItem("todoArray", JSON.stringify(todoArray));
  }
});

$('#button15').on('click', function() {
  const text = $('#todo15').children(0).val();
  console.log(text);
  if (text) {
    todoArray[6].actText = text;
    localStorage.clear();
    localStorage.setItem("todoArray", JSON.stringify(todoArray));
  }
});

$('#button16').on('click', function() {
  const text = $('#todo16').children(0).val();
  console.log(text);
  if (text) {
    todoArray[7].actText = text;
    localStorage.clear();
    localStorage.setItem("todoArray", JSON.stringify(todoArray));
  }
});

$('#button17').on('click', function() {
  const text = $('#todo17').children(0).val();
  console.log(text);
  if (text) {
    todoArray[8].actText = text;
    localStorage.clear();
    localStorage.setItem("todoArray", JSON.stringify(todoArray));
  }
});

// Click event causes refresh
// refreshBtn.on('click', function () {
//   location.reload();
// });
