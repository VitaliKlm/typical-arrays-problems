
exports.min = function min (array = []) {
  return array.reduce(
    (accumulator, currentValue) => 
    { return (currentValue < accumulator) ? currentValue : accumulator; }, 
    0
  );
};

exports.max = function max (array = []) {
  return array.reduce(
    (accumulator, currentValue) => 
    { return (currentValue > accumulator) ? currentValue : accumulator; }, 
    0
  );
};

exports.avg = function avg (array = []) {
  if (array.length == 0) return 0; 
  const sum = array.reduce(
    (accumulator, currentValue) => accumulator + currentValue, 
    0
  );
  return sum/array.length;
};
