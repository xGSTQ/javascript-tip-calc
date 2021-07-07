
// Grab elements
const costEL = document.getElementById("tip-cost-el");
const tipPercentageEL = document.getElementById("tip-percentage-el");
const totalAmountEL = document.getElementById("tip-total-el");
const tipEL = document.getElementById("tip-el");

// Add Event Listener
costEL.addEventListener('change', calculator, false);
tipPercentageEL.addEventListener('change', calculator, false);


function calculator() {

  // get the value as number and return 0 if NaN
  cost = parseInt(costEL.value, 10) || 0;
  percentage = parseInt(tipPercentageEL.value, 10) || 0;

  tipEL.textContent  = ((cost * percentage) / 100).toFixed(2);
  totalAmountEL.textContent = (cost + parseFloat(tipEL.textContent)).toFixed(2);
}




