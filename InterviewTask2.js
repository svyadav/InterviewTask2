const nums = [1,2,1,1,5];
function sumEvenIndex(numbers) {
  return numbers.reduce(
    (acc, cur,index) =>
      index % 2 === 0
     ? (acc+cur)
     :
     (acc-cur)

  );
}
console.log(sumEvenIndex(nums));