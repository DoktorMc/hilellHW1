 function differentArr(arr1, arr2) {
   return arr1.length == arr2.length && arr1.every((v, i) => arr2[i] == v);
}
 
console.log(differentArr([1, 2, 3, 't'], [1, 2, 3, 't']));