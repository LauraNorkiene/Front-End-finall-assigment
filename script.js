//Burgerio kodas---------------------------------------------------------

function burger() {
  let x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

//Spalvu kodas------------------------------------------------------------

function rand() {
  return Math.floor(Math.random() * 256);
}

function randomColor() {
  return "rgb(" + rand() + "," + rand() + "," + rand() + ")";
}

let boxes = document.querySelectorAll(".color");

function recolor() {
  for (i = 0; i < boxes.length; i++) {
    boxes[i].style.backgroundColor = randomColor();
    boxes[i].textContent = randomColor();
  }
}

// Divo kodai---------------------------------------------------------

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

//Forma-----------------------------------------------------------

let userForm = document.getElementById("newUser");
let userTable = document.getElementById("table");

let nameInput = document.getElementById("name");
let surnameInout = document.getElementById("surname");
let birthInput = document.getElementById("birthOfYear");

let userCounter = 1;

userForm.addEventListener("submit", function (e) {
  userTable.style.display = "block";
  e.preventDefault();

  let name = nameInput.value;
  let surname = surnameInout.value;
  let birthOfYear = birthInput.value;

  let row = table.insertRow();

  let couterCell = row.insertCell();
  couterCell.textContent = userCounter;

  let nameCell = row.insertCell();
  nameCell.textContent = name;

  let surnameCell = row.insertCell();
  surnameCell.textContent = surname;

  let ageCell = row.insertCell();
  ageCell.textContent = new Date().getFullYear() - parseInt(birthOfYear);

  userCounter++;
});

//Isvalymo mygtukas-------------------------------------------------

$("#clear").click(function () {
  $("#panaikinti").empty();
});

$("#clear").click(function () {
  $("#name").val("");
  $("#surname").val("");
  $("#birthOfYear").val("");
});
