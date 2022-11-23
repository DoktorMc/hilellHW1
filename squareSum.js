function squareSum(numbers) {
  return numbers.map((n) => n * n).reduce((sum, n) => sum + n);
}

console.log(squareSum([1, 2, 3, 4, 5]));
