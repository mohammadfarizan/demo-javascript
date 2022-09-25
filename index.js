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

// fuction

function cuboidArea(a, b, c) {
  var cuboidHeigth;
  var cuboidLength;
  var cuboidDepth;
  var total;

  cuboidHeigth = a;
  cuboidLength = b;
  cuboidDepth = c;

  total =
    2 *
    (cuboidLength * cuboidDepth +
      cuboidLength * cuboidHeigth +
      cuboidDepth * cuboidHeigth);

  return total;
}
console.log(cuboidArea(8, 5, 10));
