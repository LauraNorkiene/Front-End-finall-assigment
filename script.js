function burger() {
  let x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

let colors = [
  "red",
  "blue",
  "green",
  "teal",
  "rosybrown",
  "tan",
  "plum",
  "saddlebrown",
  "aqua",
  "aquamarine",
  "lawngreen",
  "yellow",
  "violet",
  "crimson",
  "pink",
  "black",
  "white",
];
let boxes = document.querySelectorAll(".color");

function recolor() {
  for (i = 0; i < boxes.length; i++) {
    boxes[i].style.backgroundColor =
      colors[Math.floor(Math.random() * colors.length)];
  }
}

/*function recolor(event) {
  event.target.style.backgroundColor = randomColor();
}

function randomColor() {
  return "rgb(" + rand() + "," + rand() + "," + rand() + ")";
}

function rand() {
  return Math.floor(Math.random() * 256);
}*/

function onOff() {
  let element = document.getElementById("box");
  element.classList.toggle("box");
}

function changeWidth() {
  let element = document.getElementById("box");
  element.classList.toggle("boxWidth");
}

function changeHeight() {
  let element = document.getElementById("box");
  element.classList.toggle("boxHeight");
}

function goToCenter() {
  let element = document.getElementById("box");
  element.classList.toggle("boxCenter");
}

function changePossition() {
  let element = document.getElementById("box");
  element.classList.toggle("boxPossition");
}

document.getElementById("submit").onclick = function () {
  document.getElementById("table").style.display = "block";

  let table = document.getElementById("table");
  let row = table.insertRow(-1);
  let number = row.insertCell(0);
  let vardas = row.insertCell(1);
  let pavarde = row.insertCell(2);
  let data = row.insertCell(3);
  number.innerHTML = document.getElementById("number").value;
  vardas.innerHTML = document.getElementById("vardas").value;
  pavarde.innerHTML = document.getElementById("pavarde").value;
  data.innerHTML = document.getElementById("data").value;

  return false;
};

function removeTable() {
  const element = document.getElementById("table");
  element.remove();
}
