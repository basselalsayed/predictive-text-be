const inputs = [
  ['a', 'b', 'c'],
  ['d', 'e', 'f'],
  ['g', 'h', 'i'],
  ['j', 'k', 'l'],
  ['m', 'n', 'o'],
  ['p', 'q', 'r', 's'],
  ['t', 'u', 'v'],
  ['w', 'x', 'y', 'z'],
];

const getLettersArrays = numbers => {
  const getInput = n => inputs[n - 2];

  if (typeof numbers === 'number') {
    return getInput(numbers);
  }
  if (Array.isArray(numbers)) {
    return numbers.map(getInput);
  }

  return [];
};
