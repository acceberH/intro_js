function checkNumber(number) {
  if (number === 0) {
    console.log("The number is zero.");
  } else if (number > 0) {
    console.log("The number is positive.");
  } else if (number < 0) {
    console.log("The number is negative.");
  } else {
    alert("Please enter a valid number.");
  }
}

checkNumber(0); 
checkNumber(10); 
checkNumber(-5); 
checkNumber("Hello"); 
