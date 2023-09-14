// Write a function reverseWords(str) that takes a string as input and returns a new string with the words reversed.
function reverseWords(str) {
  const words = str.split(" ");
  const reversedWords = words.map((word) => {
    return word.split("").reverse().join("");
  });
  return reversedWords.join(" ");
}

const inputString = "Hello Geetha";
const reversedString = reverseWords(inputString);
console.log(reversedString);

// Write a function sumArray(arr) that takes an array of numbers as input and returns the sum of all the numbers.
function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

const numbers = [1, 2, 3, 4, 5];
const result = sumArray(numbers);
console.log(result);

// Write a function capitalizeLongWords(str, nuWrite a function truncateString(str, num) that takes a string and a number as input and returns a truncated version of the string if it is longer than the specified number of characters, adding an ellipsis ("...") to the end.

function truncateString(str, num) {
  if (str.length > num) {
    return str.slice(0, num) + "...";
  } else {
    return str;
  }
}

const inputStr = "This is a long example string.";
const maxLength = 10;
const truncatedString = truncateString(inputStr, maxLength);
console.log(truncatedString);

// Write a function getDistinctValues(arr) that takes an array as input and returns a new array with only the distinct values (removing any duplicates).

function getDistinctValues(arr) {
  // Use a Set to automatically remove duplicates
  const distinctValuesSet = new Set(arr);
  const distinctValuesArray = Array.from(distinctValuesSet);

  return distinctValuesArray;
}

const inputArray = [1, 2, 2, 3, 4, 4, 5];
const distinctArray = getDistinctValues(inputArray);
console.log(distinctArray);

// Write a function isArmstrongNumber(num) that takes a number as input and returns true if it is an Armstrong number, and false otherwise. An Armstrong number is a number that is equal to the sum of its own digits each raised to the power of the number of digits.

function isArmstrongNumber(num) {
  const numStr = num.toString();
  const numDigits = numStr.length;
  let sum = 0;
  for (let i = 0; i < numDigits; i++) {
    const digit = parseInt(numStr[i]);
    sum += Math.pow(digit, numDigits);
  }

  return sum === num;
}

const number = 153; // 1^3 + 5^3 + 3^3 = 153
const output = isArmstrongNumber(number);
console.log(output);

// Write a function countOccurrences(arr, target) that takes an array and a target value as input and returns the number of occurrences of the target value in the array.

function countOccurrences(arr, target) {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      count++;
    }
  }

  return count;
}

const inputArr = [1, 2, 2, 3, 2, 4, 2, 5];
const targetValue = 2;
const result1 = countOccurrences(inputArr, targetValue);
console.log(result1);

// Write a function calculateAverage(arr) that takes an array of numbers as input and returns the average (mean) value of the numbers.

function calculateAverage(arr) {
  if (arr.length === 0) {
    return 0; // Return 0 for an empty array
  }
  const sum = arr.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  const average = sum / arr.length;

  return average;
}

const num = [1, 2, 3, 4, 5];
const result2 = calculateAverage(num);
console.log(result2);
