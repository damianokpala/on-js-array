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