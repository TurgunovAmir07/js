// функция с суммой
function sum(){
  let num1 = document.getElementsByClassName("number")[0].value;
  let num2 = document.getElementsByClassName("number")[1].value;
  let sum = Number(num1) + Number(num2);
  let result = document.getElementsByClassName("result")[0];
  result.innerHTML = sum;
}

// функция со средним арифметическим
function average(){
  let num1 = document.getElementsByClassName("number")[2].value;
  let num2 = document.getElementsByClassName("number")[3].value;
  let average = (Number(num1) + Number(num2)) / 2;
  let result = document.getElementsByClassName("result")[1];
  result.innerHTML = average;
}

// функция со средним арифметическим квадратов чисел НЕ РАБОТАЕТ
// function average_scuares(){
//     let num1 = document.getElementsByClassName("number")[4].value;
//     let num2 = document.getElementsByClassName("number")[5].value;
//     let average = ((Number(num1) ** 2) + (Number(num2) ** 2)) / 2;
//     let result = document.getElementsByClassName("result")[2];
//     result.innerHTML = averageScuares;
// }


// функция со средним арифметическим квадратов чисел
function averageSquares(){
  let num1 = document.getElementsByClassName("number")[4].value;
  let num2 = document.getElementsByClassName("number")[5].value;
  let average = ((Number(num1) ** 2) + (Number(num2) ** 2)) / 2;
  let result = document.getElementById("result1");
  result.innerHTML = average;
}


// калькулятор НЕ РАБОТАЕТ
// let operator;
//   function func() {
//     let result;
//     let num1 = Number(document.getElementById("num1").value);
//     let num2 = Number(document.getElementById("num2").value);
//     switch (operator) {
//       case '+':
//         result = num1 + num2;
//         break;
//       case '-':
//         result = num1 - num2;
//         break;
//       case '*':
//         result = num1 * num2;
//         break;
//       case '/':
//         if (num2) {
//           result = num1 / num2;
//         } else {
//           result = 'бесконечность';
//         }
//         break;
//       default:
//         result = 'выберите операцию';
//     }

//     document.getElementById("result").innerHTML = result[4];
//   }


// калькулятор
let operator;
  function func() {
    let result;
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    switch (operator) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      case '/':
        if (num2) {
          result = num1 / num2;
        } else {
          result = 'бесконечность';
        }
        break;
      default:
        result = 'выберите операцию';
    }

    document.getElementById("result2").innerHTML = result;
  }