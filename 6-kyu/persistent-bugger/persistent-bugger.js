function persistence(num) {
  let multiplications = 0;
  while(num >= 10) {
    num = String(num).split('').reduce((acc, cur) => acc * Number(cur), 1);
    multiplications++;
  }
  return multiplications;
}