function maxSequence(xs) {
let sum = 0; 
  let maxSum = 0;
  
  for(let i = 0; i < xs.length; i++) {
    sum += xs[i];
    if(sum < 0) {
      sum = 0;
      continue;
    }
    if(sum > maxSum) maxSum = sum;
  }
  return maxSum;
}