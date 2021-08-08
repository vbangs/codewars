const sumArray = (array) => {
    if(array === null || !array.length ) return 0;
    array.sort((a, b) => a - b);
    var sum = 0;
    for (let i = 1; i < array.length - 1; i++) sum += array[i];
    return sum;
  }