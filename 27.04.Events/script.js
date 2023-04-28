let nameInput = document.querySelector("#name");
let surnameInput = document.querySelector("#surname");
let emailInput = document.querySelector("#email");
let passwordInput = document.querySelector("#password");
let checkbox = document.querySelector("#checkbox");
let checked = document.querySelector("#checked");
let submitBtn = document.querySelector("#submit");

checked.style.display="none"
submitBtn.setAttribute("disabled","")

nameInput.addEventListener("focus", function () {
  this.style.backgroundColor = "grey";
});
nameInput.addEventListener("mouseout", function () {
  this.style.backgroundColor = "transparent";
  this.style.color = "white";
});

surnameInput.addEventListener("mouseover", function () {
  this.style.backgroundColor = "green";
  this.style.color="white"
});
surnameInput.addEventListener("mouseout", function () {
  this.style.backgroundColor = "transparent";
  this.style.color="white"
});


emailInput.addEventListener("contextmenu", function () {
  this.style.backgroundColor = "red";
  this.style.color="white"
});
emailInput.addEventListener("blur", function () {
  this.style.backgroundColor = "transparent";
  this.style.color="white"
});
passwordInput.addEventListener("click", function () {
  this.value = "12345";
});
passwordInput.addEventListener("mouseout", function () {
  this.value = "";
});
checkbox.addEventListener("click",function(){
    checked.removeSetAttribute("disabled","")
})

