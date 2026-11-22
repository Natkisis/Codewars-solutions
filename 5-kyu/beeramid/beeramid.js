// Returns number of complete beeramid levels
function beeramid(bonus, price) {
  let numberCans = Math.trunc(bonus / price);
  if (numberCans < 1) return 0;
  let square = 0;
​
  while (numberCans >= 0) {
    square++;
    numberCans -= square * square;
  }
  return square - 1;
}