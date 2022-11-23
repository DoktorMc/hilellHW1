function removingDuplicates(array) {
  return array.reduce((arr, current) => {
    if (!arr.includes(current)) {
      arr.push(current);
    }
    return arr;
  }, []);
}

console.log(removingDuplicates([1, 2, 2, "tt", 3, 4, "tt", "aa", 5, 5, 6]));
