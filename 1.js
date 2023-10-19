// Variables
var count = 10;

const arrNumbers = [];
const arrPrimeNumber = [];

const inputNumber = document.querySelector('input[type="number"]');
const btnSave = document.querySelector(".btn-save");
const btnCheck = document.querySelector(".btn-check");
const btnBack = document.querySelector(".btn-back");
const btnDelete = document.querySelector(".btn-clear");

// Func
const handleClickEnter = () => {
  inputNumber.value === ""
    ? this.setAttribute("disabled", "disabled")
    : arrNumbers.push(inputNumber.value);
  count -= 1;
  document.querySelector(".count-times").innerText = `Còn ${count} số`;
  inputNumber.value = "";
  inputNumber.focus();
  document.getElementById(
    "result-text"
  ).innerHTML = `Số vừa nhập: ${arrNumbers}`;
  if (count === 0) {
    inputNumber.setAttribute("disabled", "disabled");
    inputNumber.style.backgroundColor = "#c2c2c2";
    btnSave.disabled = true;
    btnCheck.style.display = "block";
  }
}
const handleClickCheck = () => {
  for (let i = 0; i < arrNumbers.length; i++) {
    let countSNT = 0;
    for (let j = 1; j <= arrNumbers[i]; j++) {
      if (arrNumbers[i] % j === 0) countSNT += 1;
    }
    if (countSNT === 2) arrPrimeNumber.push(arrNumbers[i]);
  }
  document.querySelector(".result-msg").innerText =
    arrPrimeNumber.length !== 0
      ? `${arrPrimeNumber} là số nguyên tố`
      : "Các số vừa nhập không có số nào là số nguyên tố";
  btnBack.style.display = "block";
  btnCheck.setAttribute("disabled", "disabled");
}



// When clicked
btnSave.onclick = () => {handleClickEnter()}
btnCheck.onclick = () => {handleClickCheck()};
btnBack.onclick = () => { location.reload();};

// When press
inputNumber.onkeydown = (e) => {
  e.keyCode === 13 && handleClickEnter();
}


// Private
document.addEventListener('contextmenu', event => event.preventDefault()
);
document.addEventListener("keydown", function (e){
  e.ctrlKey && e.preventDefault()
  e.key == 123 && e.preventDefault();
});
