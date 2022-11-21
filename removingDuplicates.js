function removingDuplicates(array) {
  let res = array.reduce((arr, current) => {
    if (!arr.includes(current)) {
      arr.push(current);
    }
    return arr;
  }, []);
  console.log(res);
}

removingDuplicates([1, 2, 2, "tt", 3, 4, "tt", "aa", 5, 5, 6]);
