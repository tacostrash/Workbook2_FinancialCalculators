function handleOnload() {
  const calculateButton = document.getElementById("calculateButton");

  calculateButton.onclick = calculateFutureValue;
}

//This is for the Compound Interest Calculator
function calculateFutureValue() {
  console.log("Total");

  const deposit = parseFloat(document.getElementById("deposit").value); // Initial Deposit

  const interestRate =
    parseFloat(document.getElementById("interest-rate").value) / 100; // Interest rate value divide by 100 and parseFloat so numbers can only be used

  const years = parseInt(document.getElementById("years").value); // Years

  const futureValue = deposit * Math.pow(1 + interestRate, years); // Compound Interest Formula
  
  const totalInterest = futureValue - deposit; // Only gets the Interest

  document.getElementById("future-value").value = "$" + futureValue.toFixed(2);
  document.getElementById("total-interest").value = "$" + totalInterest.toFixed(2);
}
