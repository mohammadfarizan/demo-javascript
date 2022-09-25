console.log("Hello World");

alert("Hi There!");

const userName = prompt("Masukkan nama kamu: ");
console.log("Hi " + userName);

let answer = confirm("Silahkan pilih OK atau cancel");
let result = answer ? "Kamu memilih ok" : "kamu memilih cancel";
alert(result);

//if else statement

const number = prompt("silahkan masukkan angka: ");

if (number > 0) {
  console.log("angka termasuk bilangan positif");
} else if (number < 0) {
  console.log("angka termasuk bilangan negatif");
} else if (number == 0) {
  console.log("angka yang dimasukkan adalah 0");
} else {
  console.log("yang anda masukkan bukanlah angka");
}

// loop for
// for (initialization; condition; increment)

for (let i = 0; i < 10; i++) {
  console.log("number ", i + 1);
}

// function count down number

function countDown(firstNumber) {
  console.log("number ", firstNumber);
  let nextNumber = firstNumber - 1;
  if (nextNumber > 0) {
    countDown(nextNumber);
  }
}

countDown(10);
