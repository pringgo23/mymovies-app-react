let helloWorld = document.getElementById("hello-world");

// helloWorld.innerHTML = "<h1>Liverpool menang lawan Benfica</h1>";
helloWorld.innerText = "<h1>Liverpool menang lawan Benfica</h1>";

let bgBeige = document.getElementsByClassName("bg-beige");

bgBeige[0].setAttribute("class", "bg-olive p-3 rounded");

let bgOlive = document.getElementsByClassName("bg-olive");

bgOlive[0].style.color = "whitesmoke";

let btnAlterra = document.getElementsByClassName("btn-alterra");
let btnTokopedia = document.getElementsByClassName("btn-tokopedia");
let btnOvo = document.getElementsByClassName("btn-ovo");
let counter = 0;

function handleClickBtnAlterra() {
  counter++;
  if (counter == 1) {
    btnAlterra[0].setAttribute("class", "btn btn-tokopedia m-5");
  } else if (counter == 2) {
    btnTokopedia[0].setAttribute("class", "btn btn-ovo m-5");
  } else if (counter == 3) {
    btnOvo[0].setAttribute("class", "btn btn-alterra m-5");
    counter = 0;
  }
}

let body = document.getElementsByTagName("body")[0];
let btnClickMe = document.getElementById("click-me");
console.log(btnClickMe);
let count = 0;

function changeBtnColor() {
  if (count == 0) {
    btnClickMe.setAttribute("class", "btn btn-alterra");
  } else if (count == 1) {
    btnClickMe.setAttribute("class", "btn btn-primary");
  } else if (count == 2) {
    btnClickMe.setAttribute("class", "btn btn-danger");
  } else if (count == 3) {
    btnClickMe.setAttribute("class", "btn btn-warning");
  }
}

body.addEventListener("keydown", (e) => {
  if (e.code === "ArrowRight") {
    count++;
  } else if (e.code === "ArrowLeft") {
    count--;
  }

  if (count >= 4) {
    count = 0;
  } else if (count <= 0) {
    count = 4;
  }
  console.log(count);

  changeBtnColor();
});
