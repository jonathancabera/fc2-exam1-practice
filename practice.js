// JavaScript Basics Practice Exam  
// Focus Areas:  Looping through arrays & objects, built-in loop methods,
//  string manipulation, array transformations  
// ---

// ### **Section 1: Looping Through Arrays**  

// 1. **Simple Array Loop**  
//    Write a `for` loop that logs each element of the array `[5, 10, 15, 20]` to the console.
// const array = [5, 10, 15, 20];
// //for..of loops through the values of an iterable object.
// for (let value of array){
//     console.log(value)
// }



// 2. **Summing Array Elements**  
//    Use a loop to calculate the sum of all numbers in `[1, 2, 3, 4, 5]` and log the result. (logs 15)  
// const array = [1, 2, 3, 4, 5];
// let sum = 0;
// for (let i=0; i<array.length;i++){
//     sum += array[i]
// }
// console.log(sum)


// 3. **Filter Even Numbers**  
//    Loop through `[12, 7, 9, 24, 18]` and create a new array containing only even numbers.  
// const numbers = [12, 7, 9, 24, 18];
// const evenNumbers = [];
// for (let number of numbers){
//     if (number%2 === 0){
//         evenNumbers.push(number)
//     }
// }
// console.log(evenNumbers)


// ---

// ### **Section 2: Looping Through Arrays with Objects**  
// **Difficulty: Medium**  

// 4. **Access Object Properties**  
//    Given:  
 
const users = [{name: "Alice", age: 25}, {name: "Bob", age: 30}];

//    Loop through `users` and log each user’s name.  
// for (let user of users){
//     console.log(user.name)
// }



// 5. **Find a Specific Object**  
//    Using the `users` array above, find and log the object where `name === "Bob"`.
// for (let user of users){
//     if (user.name === "Bob"){
//         console.log(user)
//     }
// }  



// 6. **Calculate Average Age**  
//    Loop through `users` and compute the average age. 
// let ageTotal = 0;
// for (let user of users){
//     ageTotal += user.age
// }
// console.log(ageTotal/users.length)
// 

// ### **Section 3: Built-in Loop Methods**  


// 7. **`forEach` Practice**  
//    Use `forEach` to log each element 
const myArray = ["apple", "banana", "cherry"]; 
// for (let item of myArray){
//     console.log(item)
// }


// 8. **`map` Transformation**  
const thisArray = [1, 2, 3];
// use `map` to create a new array where each number is doubled. 
// const mappedArray = thisArray.map((x) => x*2)
// console.log(mappedArray)


// 9. **`filter` with Condition**  
const grades =[15, 3, 25, 8, 10];
//use `filter` to keep numbers greater than 10.  
// const result = grades.filter((grade) => (grade > 10))
// console.log(result)



// 10. **`find` First Match**  
//     Use `find` to get the first number > 50 in 
const finder = [20, 45, 60, 70];
// const firstMatch = finder.find((number) => number > 50)
// console.log(firstMatch)

// 11. **`reduce` for Aggregation**  
//     Use `reduce` to multiply all numbers in `[2, 3, 4]` (result: `24`).  

// ### **Section 4: String Manipulation**  
// **Difficulty: Mixed**  

// 12. **Slice a String**  
    // Slice `"JavaScript"` to extract `"Script"`.  

const string1 = "JavaScript";
// console.log(string1.slice(4, string1.length))


// 13. **Split and Join**  
//     Split `"hello-world"` into an array by `-`, then join back with `_`.
// intended output: "hello_world"

const splitString = "hello-world".split("-").join("_")
// console.log(splitString)

// 14. **Uppercase Transformation**  
//     Convert `"example"` to uppercase using a string method.  

let transform = "example".toUpperCase();
// console.log(transform)

// 15. **Check Substring**  
//     Check if `"programming"` contains `"gram"` and log `true` or `false`.  

 let spellCheck = "programming"
//  if (spellCheck.includes("gram")){
//     console.log("true")
//  }else{
//     console.log("false")
//  }


// ### **Section 5: Array Transformations with Functions**  
// 

// 16. **Apply Function to Array**
//   Apply `addTwo` to each element in `[3, 6, 9]` using `map`.   

const addTwo = num => num + 2;

let myNums = [3, 6, 9];
 

// 17. **Custom Filter Function**  
//     Write a function `isLongWord(word)` that returns `true` if `word.length > 5`.  
//     Use it to filter myFruits 
const myFruit = ["apple", "banana", "kiwi"];  

// 18. **Chaining Methods**  
//    Chain `map` (multiply by 3) and `filter` (keep even numbers).  

let myNums2 = [1, 2, 3, 4];



// ### **Section 6: Mixed Challenges**  

// 19. **Nested Object Access**  
//     Given:  
   
const data = [{id: 1, items: ["baseball", "soccer ball"]},   {id: 2, items: ["Game Boy"]}];

//     Log all `items` for each object.  


// 20. **Count String Occurrences**  
//     Loop through mixedLetters  and count how many times "a" appears.  
const mixedLetters = ["a", "b", "a", "c"];

// 21. **Flatten an Array**  
//     Use `reduce` or loops to flatten the array flat into `[1, 2, 3, 4]; 

const flat = [[1, 2], [3, 4]];

// 22. **Sort and Reverse**  
//     Sort `ages` in ascending order, then reverse it.  
const ages = [10, 2, 5, 8];

// 23. **Extract Object Keys**  
//     Given `member1`, loop through its keys and log them.  
const member1 = {name: "Tom", age: 28};

// 24. **Merge Arrays**  
//     Merge `firstArray` and `secondArray` into one array using a loop or method.  
let firstArray = [1, 2];
let secondArray = [3, 4];