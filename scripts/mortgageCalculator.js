// function calculateMortgage(principal, interestRate, loanLengthYears) {
//   const monthlyInterestRate = interestRate / 12;
//   const numberOfPayments = loanLengthYears * 12;

//   const monthlyPayment =
//     principal *
//     ((monthlyInterestRate * (1 + monthlyInterestRate) ** numberOfPayments) /
//       ((1 + monthlyInterestRate) ** numberOfPayments - 1));

//   const totalPayed = monthlyPayment * 12 * loanLengthYears;
//   const monthlyPayment = monthlyPayment.toFixed(2);
//   const totalInterest = (totalPayed - principal).toFixed(2);
// }

function handleOnload() {
  const handleButtonEl = document.getElementById("calculateButton");

  handleButtonEl.onclick = handleButtonOnClick;
}

//This is for the mortgage calculator
function handleButtonOnClick() {
  console.log("Total");
  const loanAmountEl = document.getElementById("number1Field");
  const interestRPYEl = document.getElementById("number2Field");
  const loanTermYearEl = document.getElementById("number3Field");
  const monthlyPaymentEl = document.getElementById("answer1Field");
  const totalInterestEl = document.getElementById("answer2Field");

  const loanAmount = Number(loanAmountEl.value); // Loan Amount
  const interestRPY = Number(interestRPYEl.value) / 100 / 12; // Interest Per Year --> monthly interest rate
  const loanTermYear = Number(loanTermYearEl.value) * 12; //Loan Term in years --> total monthly term

  // const formula1 = loanAmount * interestRPY;
  // const formula2 = 1 - Math.pow(1 + interestRPY, -loanTermYear);
  const monthlyPayment = (loanAmount * interestRPY) / (1 - Math.pow(1 + interestRPY, -loanTermYear))
  monthlyPaymentEl.value = monthlyPayment.toFixed(2)
  
  const totalInterest = (monthlyPayment * loanTermYear) - loanAmount;
  totalInterestEl.value = totalInterest.toFixed(2)
}

//   monthlyPaymentEl.value = (formula1 / formula2).toFixed(2); //Formula for Monthly Payments

//   totalInterestEl.value = (
//     monthlyPaymentEl.value * loanTermYear -
//     loanAmount
//   ).toFixed(2); // formula for total interest
// 