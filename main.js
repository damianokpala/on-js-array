/* JavaScript Array Test */

/* Declaration and Initialization: 
Declare and initialize an array named fruits with the following elements: "apple", "banana", "orange", "grape".
*/

let fruits = ["apple", "banana", "orange", "grape"]

/*
Accessing Array Elements:
Retrieve the second element from the fruits array.
*/

let secondElement = fruits[1]
console.log(secondElement);

/*

Modifying Array Elements:
Update the third element of the fruits array to "kiwi".
*/

fruits[2] = "kiwi"

console.log(fruits);

/*

Array Length:
Determine the number of elements in the fruits array.

*/

console.log(fruits.length)

/*
Iterating over Arrays:
Use a loop to print each element of the fruits array on a new line.
*/

for (x in fruits) {
  console.log(fruits[x]);
}

/*
Multidimensional Arrays:
Create a 2D array named matrix with the following elements:

[
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]

*/

const matrix = [[1,2,3],[4,5,6],[7,8,9]]

/*
Retrieve the value at the second row and third column (index 1,2).
*/

console.log(matrix[1][2])

/*
Array Methods:
Use the appropriate method to add "pear" to the end of the fruits array.
*/

fruits.push("pear")
console.log(fruits);

/*
Array Searching and Sorting:
Given the following array of numbers: [7, 2, 10, 5, 1], use an appropriate sorting algorithm to sort it in ascending order.
*/

fruits.sort()
console.log(fruits);

/*
Array Filtering and Mapping:
Given the fruits array, use the filter() method to create a new array containing only the fruits with more than five characters.
*/

let fiveCharFruits = fruits.filter(e => e.length == 5)
console.log(fiveCharFruits);
/*
Array Destructuring:
Given the following array: [10, 20, 30], use array destructuring to assign the values to three separate variables: num1, num2, and num3.
*/

let givenArray = [10, 20, 30]
const [firstDigit, secondDigit, thirdDigit] = givenArray


/* 
Array Spread Operator:
Create a new array named combinedFruits that combines the fruits array with another array [ "mango", "pineapple" ] using the spread operator.

*/
const anothArr = ["mango", "pineapple"]
let combinedFruits = [...fruits, ...anothArr]

console.log(combinedFruits);



/// Stage 2 Solution

/*
. **Array Reduce:**
Given the following array of numbers: `[3, 5, 2, 8, 4]`, use the `reduce()` method to calculate the sum of all the elements.

*/

let arrNums = [3,5,2,8,4]

let redArrNum = arrNums.reduce((x, y) => x+=y)

console.log(redArrNum);
/*
2. **Array Every and Some:**
Given the `fruits` array, use the `every()` method to check if all the fruits' names have more than three characters. Then, use the `some()` method to check if at least one fruit's name contains the letter "a".
*/

let checkAll = fruits.every(x => x.length == 3)
const checkSome = fruits.some(x => {
  x.includes("a")
})

// fruits.some((fruit) => fruit.includes("a"))
console.log(checkAll, checkSome);
/*
3. **Array Includes:**
Given the `fruits` array, use the `includes()` method to check if the array contains the fruit "orange".
*/

let newFruits = ["apple", "banana", "orange", "grape"]

const containsOrange = newFruits.includes("orange")
console.log(newFruits);
console.log(containsOrange);

/*
4. **Array Find and FindIndex:**
Given the following array of objects:
```
const products = [
  { id: 1, name: "Shirt" },
  { id: 2, name: "Pants" },
  { id: 3, name: "Shoes" },
];
```
Use the `find()` method to retrieve the object with `id` equal to 2. Then, use the `findIndex()` method to find the index of the object with `id` equal to 3.
*/

const products = [
  { id: 1, name: "Shirt" },
  { id: 2, name: "Pants" },
  { id: 3, name: "Shoes" },
];

const found = products.find(x => x.id === 2)
const findIn = products.findIndex(x => x.id === 3)
console.log(found, findIn);

/*
5. **Array Slice and Splice:**
Given the `fruits` array, use the `slice()` method to create a new array with only the elements "banana" and "orange". Then, use the `splice()` method to remove "kiwi" from the `fruits` array.
*/

const wasSliced = newFruits.slice(2, 3)
console.log(newFruits);
console.log(wasSliced);

/*
6. **Array Concat:**
Given two arrays: `arr1 = [1, 2, 3]` and `arr2 = [4, 5, 6]`, use the `concat()` method to combine them into a single array named `combinedArray`.
*/

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6]

let combinedArray = arr1.concat(arr2)
console.log(combinedArray);

/*
7. **Array Map:**
Given the following array of numbers: `[1, 2, 3, 4, 5]`, use the `map()` method to create a new array that contains each number squared.
*/
const realNum = [1, 2, 3, 4, 5]
let sqrtNum = realNum.map(x => x**2)
console.log(sqrtNum);

/*
8. **Array Sort with a Custom Comparator:**
Given the following array of strings:
```
const names = ["John", "Adam", "Eva", "Alex", "Megan"];
```
Use the `sort()` method with a custom comparator to sort the names in descending order based on their length.
*/

const names = ["John", "Adam", "Eva", "Alex", "Megan"];

let descNames = names.sort((a, b) => b.length - a.length)
console.log(descNames);

/*
9. **Array Reverse:**
Given the following array of numbers: `[1, 2, 3, 4, 5]`, use the `reverse()` method to reverse the order of elements in the array.
*/

const numm = [1, 2, 3, 4, 5]

const nummy = numm.reverse()

console.log(nummy);

/*
10. **Array From:**
Create a new array named `countArray` with the length of 5, containing numbers from 0 to 4 (inclusive) using the `Array.from()` method.
*/

let countArray = Array.from({length:5}, (_, index) => index)

console.log(countArray);


/*

**JavaScript Array Test - Stage 3**

1. **Array Filter and Reduce Combination:**
Given an array of numbers `[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]`, use a combination of the `filter()` and `reduce()` methods to calculate the sum of all even numbers in the array.

*/

const stageThreeNumArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let filRed = stageThreeNumArr.filter(x => x % 2 == 0).reduce((x,y) => x + y)
console.log(filRed);

/*

2. **Array Some and Every Combination:**
Given an array of strings `["apple", "banana", "cherry", "date", "elderberry"]`, use a combination of the `some()` and `every()` methods to check if some fruits have more than five characters and if every fruit has at least two characters.

*/

const stageThreeFruits = ["apple", "banana", "cherry", "date", "elderberry"]
let check = stageThreeFruits.some(x => x.length > 5) && stageThreeFruits.every(x => x.length >= 2)
console.log(check);
/*

3. **Array Flat:**
Given a nested array `[[1, 2], [3, [4, 5]], 6, [7, 8, [9, 10]]]`, use the `flat()` method to flatten the array to a single-level array.

*/

const stageThreeNestedArr = [[1, 2], [3, [4, 5]], 6, [7, 8, [9, 10]]]

let stageThreeArr = stageThreeNestedArr.flat().flat()

console.log(stageThreeArr);

/*

4. **Array Reduce Right:**
Given an array of strings `["one", "two", "three", "four"]`, use the `reduceRight()` method to concatenate the strings from right to left, separated by dashes ("-"). The result should be "four-three-two-one".
*/

const stageThreeArrString = ["one", "two", "three", "four"]

let concatRightToLeft = stageThreeArrString.reduceRight((x,y) => `${x}-${y}`)
console.log(concatRightToLeft);
/*

5. **Array Join:**
Given an array of words `["Hello", "world", "how", "are", "you?"]`, use the `join()` method to join the words into a single string separated by spaces. The result should be "Hello world how are you?".

*/

const stageThreeArrWords = ["Hello", "world", "how", "are", "you?"]
let arrWordsJoin = stageThreeArrWords.join(" ")
console.log(arrWordsJoin);
/*

6. **Array Fill:**
Create a new array named `filledArray` with a length of 5, filled with the value "X" using the `fill()` method.

*/

let filledArray = Array(5).fill("X")
console.log(filledArray);

/*

7. **Array IndexOf and LastIndexOf:**
Given an array of numbers `[2, 4, 6, 8, 10, 4, 12, 14]`, use the `indexOf()` method to find the index of the first occurrence of the number 4. Then, use the `lastIndexOf()` method to find the index of the last occurrence of the number 4.

*/

const stageThreeArrNum = [2, 4, 6, 8, 10, 4, 12, 14]

let firstNum = stageThreeArrNum.indexOf(4)
let lastNum = stageThreeArrNum.lastIndexOf(4)


console.log(firstNum, lastNum);
/*
8. **Array Intersection:**
Given two arrays `arr1 = [1, 2, 3, 4]` and `arr2 = [3, 4, 5, 6]`, write a function `getIntersection(arr1, arr2)` that returns a new array containing the common elements between `arr1` and `arr2`.
*/

const stageThreeArr1 = [1, 2, 3, 4]
const stageThreeArr2 = [3, 4, 5, 6]

const getIntersection = (arrii, arri) => {
  let commonArr = []
  arrii.forEach(x => {
    if (arri.includes(x)) {
      commonArr.push(x)
    }
  })
  
  return commonArr;
}

console.log(getIntersection(stageThreeArr1, stageThreeArr2))

/*

9. **Array Unique:**
Given an array of numbers `[1, 2, 3, 2, 4, 5, 1, 3]`, write a function `getUniqueElements(arr)` that returns a new array containing only the unique elements in the original array.

*/

const unUniqueArr = [1, 2, 3, 2, 4, 5, 1, 3]

const getUniqueElements = function(arr) {
  let uniqueArr = []
  
  for (let x = 0; x <= arr.length - 1; x++) {
    if (uniqueArr.includes(arr[x])) {
      continue
    } else {
      uniqueArr.push(arr[x])
    };
  };
  
  return uniqueArr
}

console.log(getUniqueElements(unUniqueArr));
/*

10. **Array Shuffle:**
Write a function `shuffleArray(arr)` that takes an array as input and returns a new array with the elements randomly shuffled.

*/

function shuffleArray(arr) {
  let shallow = [...arr]
  for (let i =  arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shallow[i], shallow[j]] = [shallow[j], shallow[i]];
  }
  return shallow;
}

const login = shuffleArray(unUniqueArr)
console.log(login);
/*


function shuffleArray(arr) {
  let shallow = [...arr];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shallow[i], shallow[j]] = [shallow[j], shallow[i]];
  }
  return shallow;
}

// const unUniqueArr = [1, 2, 3, 4, 5];
const shuffledArr = shuffleArray(unUniqueArr);
console.log(shuffledArr);
*/