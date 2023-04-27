let form = document.createElement("form");
let myName = document.createElement("p");
let inputName = document.createElement("input");
let surname = document.createElement("p");
let inputSurname = document.createElement("input");
let checkbox = document.createElement("input");
let radio = document.createElement("input");
let radio2 = document.createElement("input");
let submit = document.createElement("button");
let start = document.createElement("button");
let nextPage = document.createElement("button");
let minute = document.createElement("p");
let time = 15;


minute.innerHTML = `00:${time}`;
myName.innerHTML = "<strong>Name</strong>";
surname.innerHTML = "<strong>Surname</strong>";
submit.innerText = "Submit";
start.innerText = "Let's start...";
nextPage.innerText = "Next page >";
time.innerText = "00:15";


document.body.append(start);
document.body.append(minute);
document.body.append(form);
document.body.append(nextPage);


form.append(myName);
form.append(inputName);
form.append(surname);
form.append(inputSurname);
form.append(checkbox);
form.append(radio);
form.append(radio2);
form.append(submit);


form.style.height = "80vh";
form.style.display = "flex";
form.style.justifyContent = "center";
form.style.alignItems = "center";
form.style.flexDirection = "column";
form.style.border = "dashed";
form.style.gap = "10px";
minute.style.border = "1px solid black";
minute.style.width = "90px";
minute.style.display="flex"
minute.style.justifyContent="center"


inputName.setAttribute("required", "");
surname.setAttribute("required", "");
checkbox.setAttribute("required", "");
radio.setAttribute("required", "");
radio2.setAttribute("required", "");
submit.setAttribute("disabled", "");
nextPage.setAttribute("disabled", "");


checkbox.type = "checkbox";
radio.type = "radio";
radio2.type = "radio";
radio.name = "radio";
radio2.name = "radio";
checkbox.style.accentColor="red"
start.style.borderRadius="3px"
submit.style.borderRadius="3px"
nextPage.style.borderRadius="3px"


let count = time;
let interval;
start.addEventListener("click", function () {
  interval = setInterval(() => {
    count--;
    minute.innerHTML = `00:${count}`;
    minute.style.color="blue"
    minute.style.border="1px solid blue"
    if(count<=10){
        minute.style.border="1px solid red"
        minute.style.color="red"
    }
    if(count<=0){
        clearInterval(interval)
        minute.innerHTML="You missed):"
    }
  }, 1000);
  start.setAttribute("disabled", "");
  submit.removeAttribute("disabled", "");
 
});
submit.addEventListener("click", function () {
  nextPage.removeAttribute("disabled", "");
});
nextPage.addEventListener("click", function () {
  alert("Finished");
});


