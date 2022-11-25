function squareSum(numbers) {
  return numbers.reduce((sum, n) => sum + (n * n));
}

console.log(squareSum([1, 2, 3, 4, 5]));
