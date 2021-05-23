function solveEquation(a, b, c) {
  let arr = [];

  let D = b**2 - 4*a*c;

  if (D === 0) {
    let x1 = -b / (2 * a);
    arr.push(x1);
  } else if (D > 0) {
    let x1 = (-b + Math.sqrt(D)) / (2 * a),
        x2 = (-b - Math.sqrt(D)) / (2 * a);

    arr.push(x1, x2);
  }
  // иначе корней нет

  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  "use strict";
  let totalAmount;
  let now = new Date();

  if (date <= now) {
    totalAmount = 0;
  } else {
    let p = percent / 100 / 12;

    let yearsBetween = date.getFullYear() - now.getFullYear(),
        monthsBetween = date.getMonth() - now.getMonth(),
        daysBetween = date.getDate() - now.getDate()

    let totalMonths = yearsBetween * 12 + monthsBetween + (daysBetween > 0 ? 1 : 0);

    let creditAmount = amount - contribution,
      monthPaymentAmount = creditAmount * (p + p / (Math.pow(1 + p, totalMonths) - 1));

    totalAmount = +(totalMonths * monthPaymentAmount).toFixed(2); // отбрасываем дробное значение после сотых
  }

  return totalAmount;
}
