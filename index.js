// console.log, alert, prompt and confirm

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

// fuction

function cuboidArea(a, b, c) {
  var cuboidHeigth = a;
  var cuboidLength = b;
  var cuboidDepth = c;
  var total;

  total =
    2 *
    (cuboidLength * cuboidDepth +
      cuboidLength * cuboidHeigth +
      cuboidDepth * cuboidHeigth);

  return total;
}
console.log(cuboidArea(8, 5, 10));

// simpe DOM

const headingOne = document.getElementById("heading 1");
headingOne.innerHTML = "Demo JavaScript";
