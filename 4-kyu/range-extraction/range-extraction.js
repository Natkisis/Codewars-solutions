  function solution(list) {
    const arr = [];
    let start = list[0];
​
    for (let i = 1; i < list.length; i++) {
      if (list[i] - list[i - 1] !== 1) {
        let end = list[i - 1];
        if (end - start >= 2) {
          arr.push(String(start) + '-' + String(end));
        } else if (start === end) {
          arr.push(start);
        } else {
          arr.push(start, end);
        }
        start = list[i];
      }
    }
​
    const finish = list[list.length - 1];
    if (finish - start >= 2) {
      arr.push(start + '-' + finish);
    } else if (finish === start) {
      arr.push(start);
    } else {
      arr.push(start, finish);
    }
​
    return arr.join(',');
  }