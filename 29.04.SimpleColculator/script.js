let resultInput = document.querySelector("#result");
let value1Input = document.querySelector("#value1");
let value2Input = document.querySelector("#value2");
let addBtn = document.querySelector("#addbtn");
let subsBtn = document.querySelector("#subsbtn");
let mulBtn = document.querySelector("#mulbtn");
let divsBtn = document.querySelector("#divsbtn");
let resetBtn = document.querySelector("#resetbtn");

value1Input.type = "number";
value2Input.type = "number";


addBtn.addEventListener("click", function () {
   
    value1Input.value==="" || value2Input.value==="" 
    ? alert("Zehmet olmasa her iki value-ya reqem yaz qaqa yoxsa işlemeyecek ")
    :   resultInput.value = +value1Input.value + +value2Input.value
    

});
subsBtn.addEventListener("click", function () {
    value1Input.value==="" || value2Input.value==="" 
    ? alert("Zehmet olmasa her iki value-ya reqem yaz qaqa yoxsa işlemeyecek ")
    :   resultInput.value = +value1Input.value - +value2Input.value



});
mulBtn.addEventListener("click", function () {
    value1Input.value==="" || value2Input.value==="" 
    ? alert("Zehmet olmasa her iki value-ya reqem yaz qaqa yoxsa işlemeyecek ")
    :   resultInput.value = +value1Input.value * +value2Input.value
});


divsBtn.addEventListener("click", function () {
    value1Input.value==="" || value2Input.value==="" 
    ? alert("Zehmet olmasa her iki value-ya reqem yaz qaqa yoxsa işlemeyecek ")
    :   resultInput.value = +value1Input.value / +value2Input.value
});


resetBtn.addEventListener("click", function () {
  resultInput.value = "";
  value1Input.value = "";
  value2Input.value = "";
});
