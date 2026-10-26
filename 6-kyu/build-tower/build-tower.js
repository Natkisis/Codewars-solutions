function towerBuilder(nFloors) {
  output = [];
  for(let i = 1; i <= nFloors; i++) {
    let stars = '*'.repeat(i * 2 - 1);
    let space = ' '.repeat(nFloors - i);
    output.push(space + stars + space);
  }
  return output;
}