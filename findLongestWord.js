function findLongestWord(input) {
  let res = input.split(/\W+/).reduce(function (longest, word) {
    return word.length > longest.length ? word : longest;
  }, "");
  console.log(res);
}

findLongestWord("What is the average airspeed velocity of an unladen swallow");