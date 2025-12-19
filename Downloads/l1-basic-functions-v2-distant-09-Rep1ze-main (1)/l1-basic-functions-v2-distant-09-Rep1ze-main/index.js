export const getSquare = (num) => {
  return num * num;
};

export const isEven = (num) => {
  return num % 2 === 0;
};

export const castNumber = (value) => {
  const number = Number(value);
  
  if (isNaN(number)) {
    return 'given value is not convertible';
  }
  
  return number;
};

export const countVowels = (text) => {
  if (typeof text !== 'string') {
    return 0;
  }
  
  const vowels = 'AEIOUaeiou';
  let count = 0;
  
  for (let index = 0; index < text.length; index += 1) {
    const char = text[index];
    if (vowels.includes(char)) {
      count += 1;
    }
  }
  
  return count;
};
