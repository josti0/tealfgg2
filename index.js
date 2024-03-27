// Helper function to calculate the factorial of a number
function factorial(n) {
    if (n === 0 || n === 1) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
  }
  
  // Helper function to check if a number is prime
  function isPrime(n) {
    if (n <= 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) {
        return false;
      }
    }
    return true;
  }
  
  // Helper function to generate random number between min and max (inclusive)
  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  // Using the helper functions
  console.log(factorial(5)); // Output: 120
  console.log(isPrime(7)); // Output: true
  console.log(getRandomNumber(1, 10)); // Output: Random number between 1 and 10
  