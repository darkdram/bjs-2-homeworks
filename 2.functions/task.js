// Задание 1
function getArrayParams(arr) {
  let min,max,sum,avg;

  min = 101, max = -101, sum = 0;

  for(let i = 0; i < arr.length; i++) {

    if (arr[i] < min) {
      min = arr[i];
    } 

    if (arr[i] > max) {
      max = arr[i];
    }

    sum += arr[i];
  }

  avg = (sum/arr.length).toFixed(2);

  /*
   хотя логичнее было бы убрать фиксированные значение максимального и минимального значений
    и сделать их по умолчанию равными первому элементу в массиве
    min = arr[0], max = arr[0] 

    if (arr.length > 0) {
      min = arr[0]; 
      max = arr[0];
      sum = 0;
    }

  */

    return { min:min, max:max, avg:avg };
}

// Задание 2
function worker(arr) {
  let sum;

  sum = 0;
  for(let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum;
}

function makeWork(arrOfArr, func) {
  let max;

  for (let i = 0; i < arrOfArr.length; i++) {
    let sum = func(arrOfArr[i]);
    if (max === undefined || sum > max) {
      max = sum;
    }
  }
  return max
}

// Задание 3
function worker2(arr) {
  // Ваш код
}
