// ------------- moment.js ---------------
const today = moment();

$("#currentDay").text("Today is " + today.format("MMMM Do, YYYY") + " " + today.format("dddd"));

const hour = moment().hour();
// const hour = 14;
const refreshBtn = $("#refresh-button");

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

// --------------------- Logic ----------------------

function colorPlanner() {
  for (let i = 0; i < todoArray.length; i++) {
    const element = todoArray[i].actHour;
    const todoId = "#" + "todo" + element;
    if (element < hour) {
      $(todoId).addClass("past");
    }
    if (element == hour) {
      $(todoId).addClass("present");
    }
    if (element > hour) {
      $(todoId).addClass("future");
    }
  }
}

function refreshPlanner() {
  const tempArray = localStorage.getItem("todoArray");
  if (tempArray) {
    todoArray = JSON.parse(tempArray);
    console.log(todoArray);
    for (let i = 0; i < todoArray.length; i++) {
      const textHour = todoArray[i].actHour;
      const todoId = "#" + "todo" + textHour;
      const element = $(todoId);
      // undo colorPlanner
      const textClass = element[0].className;
      if (textClass.includes("past")) {
        $(todoId).removeClass("past");
      }
      if (textClass.includes("present")) {
        $(todoId).removeClass("present");
      }
      if (textClass.includes("future")) {
        $(todoId).removeClass("future");
      }
      // print out the Planner todo list
      element[0].children[0].textContent = todoArray[i].actText;
    }
  }
}

function init() {
  refreshPlanner();
  colorPlanner();
}

init();

// ------------- Event Listener ---------------

$('#button9').on('click', function () {
  const text = $('#todo9').children(0).val();
  if (text) {
    todoArray[0].actText = text;
    localStorage.clear();
    localStorage.setItem("todoArray", JSON.stringify(todoArray));
  }
});

$('#button10').on('click', function () {
  const text = $('#todo10').children(0).val();
  console.log(text);
  if (text) {
    todoArray[1].actText = text;
    localStorage.clear();
    localStorage.setItem("todoArray", JSON.stringify(todoArray));
  }
});

$('#button11').on('click', function () {
  const text = $('#todo11').children(0).val();
  console.log(text);
  if (text) {
    todoArray[2].actText = text;
    localStorage.clear();
    localStorage.setItem("todoArray", JSON.stringify(todoArray));
  }
});

$('#button12').on('click', function () {
  const text = $('#todo12').children(0).val();
  console.log(text);
  if (text) {
    todoArray[3].actText = text;
    localStorage.clear();
    localStorage.setItem("todoArray", JSON.stringify(todoArray));
  }
});

$('#button13').on('click', function () {
  const text = $('#todo13').children(0).val();
  console.log(text);
  if (text) {
    todoArray[4].actText = text;
    localStorage.clear();
    localStorage.setItem("todoArray", JSON.stringify(todoArray));
  }
});

$('#button14').on('click', function () {
  const text = $('#todo14').children(0).val();
  console.log(text);
  if (text) {
    todoArray[5].actText = text;
    localStorage.clear();
    localStorage.setItem("todoArray", JSON.stringify(todoArray));
  }
});

$('#button15').on('click', function () {
  const text = $('#todo15').children(0).val();
  console.log(text);
  if (text) {
    todoArray[6].actText = text;
    localStorage.clear();
    localStorage.setItem("todoArray", JSON.stringify(todoArray));
  }
});

$('#button16').on('click', function () {
  const text = $('#todo16').children(0).val();
  console.log(text);
  if (text) {
    todoArray[7].actText = text;
    localStorage.clear();
    localStorage.setItem("todoArray", JSON.stringify(todoArray));
  }
});

$('#button17').on('click', function () {
  const text = $('#todo17').children(0).val();
  console.log(text);
  if (text) {
    todoArray[8].actText = text;
    localStorage.clear();
    localStorage.setItem("todoArray", JSON.stringify(todoArray));
  }
});

// Clears the Planner
refreshBtn.on('click', function () {
  localStorage.clear();
  todoArray = [];
});
