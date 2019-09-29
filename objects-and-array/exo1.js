function range(start, end, step = 1) {
    if (start > end) {
      // if start greater then end 
      // start become end 
      // end becomes start
      let temp = start;
      start = end;
      end = temp;
    }
  
    if (step < 0) {
      // loop is inverted if step < 0
      let result = [];
      for (let i = end; i >= start; i += step) {
        result.push(i);
      }
       return result;
    }
  
  
    let result = [];
    for (let i = start; i <= end; i += step) {
      result.push(i);
    }
    return result;
  }
  
  
  function sum(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }
  
    return sum;
  }
  ;