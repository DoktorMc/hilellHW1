function multiToOne(arr) {
  return arr.flat(Infinity);
}

console.log(multiToOne([1, 2, [3, 4, [5]]]));