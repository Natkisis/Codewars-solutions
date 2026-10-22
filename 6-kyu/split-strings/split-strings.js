function solution(str){
  const strEvent = str.length % 2 === 0 ? str : str + '_';
  const output = [];
  
  for (let i = 0; i < strEvent.length; i += 2) {
    output.push(strEvent.slice(i, i + 2));
  }
  
  return output;
}