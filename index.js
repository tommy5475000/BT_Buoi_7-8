function themSo() {
  let n = +document.getElementById("inputNumber").value,
    hienNum = document.getElementById("txtArray");
  numArray.push(n);
  hienNum.innerHTML = numArray;
  document.getElementById("inputNumber").value = "";
}

function themSoNguyen() {
  let n = +document.getElementById("inputNumber1").value,
    hienNum = document.getElementById("txtArray91");
  numArrayN.push(n);
  hienNum.innerHTML = numArrayN;
  document.getElementById("inputNumber1").value = "";
}

function xoa() {
  let hienNum = document.getElementById("txtArray");
  let hienNum1 = document.getElementById("txtArray1");
  let hienNum2 = document.getElementById("txtArray2");
  let hienNum3 = document.getElementById("txtArray3");
  let hienNum4 = document.getElementById("txtArray4");
  hienNum.innerHTML = "";
  hienNum1.innerHTML = "";
  hienNum2.innerHTML = "";
  hienNum3.innerHTML = "";
  hienNum4.innerHTML = "";
  numArray = [];
}

// tính tổng số nguyên dương
function sumTong() {
  let hienNum = document.getElementById("txtArray1");
  for (let n = 0, i = 0; i < numArray.length; i++) {
    numArray[i] > 0 && (n += numArray[i]);
    hienNum.innerHTML = "Tổng số dương: " + n;
  }
}

// đếm số nguyên dương
function checkNum() {
  let hienNum = document.getElementById("txtArray2");
  for (let n = 0, i = 0; i < numArray.length; i++) {
    numArray[i] > 0 && n++;
    hienNum.innerHTML = "Tổng số dương: " + n;
  }
}

// tìm số nhỏ nhất
function checkNumMin() {
  let hienNum = document.getElementById("txtArray3");
  for (let n = numArray[0], i = 1; i < numArray.length; i++) {
    numArray[i] < n && (n = numArray[i]);
    hienNum.innerHTML = "Số nhỏ nhất: " + n;
  }
}

// tìm số dương nhỏ nhất
function checkNumMinDuong() {
  let hienNum = document.getElementById("txtArray4");
  for (let n = numArray[0], i = 1; i < numArray.length; i++) {
    if (n > numArray[i] && numArray[i] >= 0) {
      n = numArray[i];
      hienNum.innerHTML = "Số dương nhỏ nhất: " + n;
    } else hienNum.innerHTML = "Số dương nhỏ nhất: " + n;
  }
}

// tìm số chẵn cuối cùng
function findNum() {
  let hienNum = document.getElementById("txtArray5");
  for (let n = 0, i = 0; i < numArray.length; i++) {
    numArray[i] % 2 == 0 && (n = numArray[i]);
    hienNum.innerHTML = "Số chẵn cuối cùng: " + n;
  }
}

// đổi chổ
function swap(n, i) {
  let e = numArray[n];
  (numArray[n] = numArray[i]), (numArray[i] = e);
}

function changeNum() {
  let hienNum = document.getElementById("txtArray6");
  let inputOne = document.getElementById("input1").value;
  let inputTwo = document.getElementById("input2").value;
  swap(inputOne, inputTwo);
  hienNum.innerHTML = "Mảng sau khi đổi: " + numArray;
}

// sắp xếp mảng
function sortNum() {
  let hienNum = document.getElementById("txtArray7");
  for (let n = 0; n < numArray.length; n++) {
    for (let i = 0; i < numArray.length - 1; i++) {
      numArray[i] > numArray[i + 1] && swap(i, i + 1);
      hienNum.innerHTML = "Mảng sau khi sắp xếp: " + numArray;
    }
  }
}

// tìm số nguyên tố đầu tiên
function findNguyenTo() {
  let hienNum = document.getElementById("txtArray8");
  let firstPrime = "";
  for (let i = 0; i < numArray.length; i++) {
    if (numArray[i] == 2) {
      firstPrime = numArray[i];
      break;
    } else if (numArray[i] % 2 != 0 && numArray[i] > 1) {
      firstPrime = numArray[i];
      break;
    }
  }
  if (firstPrime != "") {
    hienNum.innerHTML = "Số nguyên tố đầu tiên " + firstPrime;
  } else {
    hienNum.innerHTML = "Không tìm thấy số nguyên tố trong mảng";
  }
}

// đếm số nguyên
function checkNumNguyen() {
  let hienNum = document.getElementById("txtArray9");
  for (let n = 0, i = 0; i < numArrayN.length; i++) {
    Number.isInteger(numArrayN[i]) && n++;
    hienNum.innerHTML = "Tổng số dương: " + n;
  }
}

// so sánh số âm dương
function demNum() {
  let hienNum = document.getElementById("txtArray10");
  let n = 0,
    r = 0;
  for (let i = 0; i < numArray.length; i++) {
    numArray[i] > 0 ? n++ : numArray[i] < 0 && r++;
  }

  if (n > r) {
    hienNum.innerHTML = "Số dương > Số âm";
  } else if (n < r) {
    hienNum.innerHTML = "Số âm > Số dương";
  }else{
    hienNum.innerHTML = "Số âm = Số dương";
  }
}

// function sumWithRecursion(n) {
//   tong =0
//   for(let i=1;i<=n;i++){
//     tong+=i;
//   }
//   return tong;
// }

// sumWithRecursion(5)

let numArray = [];
let numArrayN = [];

// live code
// function recursiveReverse(str) {
//   let newString = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     newString += str[i];
//   }
//   return newString;
// }

// recursiveReverse("hello");

// function longestSubstr(str) {
//   let currentSubstring = "";
//   let longestSubstring = "";

//   for (let i = 0; i < str.length; i++) {
//     const char = str[i];
//     if (isAlphanumeric(char)) {
//       currentSubstring += char;
//     } else {
//       if (currentSubstring.length > longestSubstring.length) {
//         longestSubstring = currentSubstring;
//       }
//       currentSubstring = "";
//     }
//   }

//   if (currentSubstring.length > longestSubstring.length) {
//     longestSubstring = currentSubstring;
//   }
//   return longestSubstring;
// }

// function isAlphanumeric(char) {
//   return /[a-zA-Z0-9]/.test(char);
// }

// longestSubstr("Hello$#@ World123");

// function powerOfNumber(b, e) {
//   let tong = 1;
//   for (let i = 1; i <= e; i++) {
//     tong *= b;
//   }
// }

// // tong = Math.pow(b,e);
// // console.log(tong);

// powerOfNumber(5, 0);

// function factorial(n) {
//   let tong=1;
//   for(let i=1;i<=n;i++){
//       tong*=i;
//   }
//   return n
// }
// factorial(3)
