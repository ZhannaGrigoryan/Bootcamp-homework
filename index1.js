/*let oddArr = [];
let evenArr = [];
function sepArr(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      evenArr.push(arr[i]);
    } else {
      oddArr.push(arr[i]);
    }
  }
  console.log(oddArr);
  console.log(evenArr);
}*/

// sepArr([1, 2, 3, 4, 5, 6, 7, 8]);



// function map(arr, callback){
//   const res = [];
//   for (let i =0; i < arr.length; i ++){
//       res.push(callback(arr[i], i, arr))
//   }

//   return res;
// }


// console.log(map([1, 2, 3], (item) => item + 1));


/*const studentsArray = [
  {
      name: 'Armen',
      age: 20,
      gpa: 3,
      grades: [1,50,30,55,88,100]
  },
  {
      name: 'Anna',
      age: 28,
      gpa: 4,
      grades: [1,3,5,7]
  },
  {
     name: 'Kim',
      age: 24,
      gpa: 1,
      grades: [6,88,5,99]
  }
]
let result = studentsArray.map(function (val) {
  return  val.grades.reduce(function sum (target,val,index,arr) {
       return target+val/arr.length
  },0)
})
console.log(result)
function newObj (arr,result) {
  for(let i = 0; i<arr.length;i++) {
      arr[i].averageGrade = result[i]
  }
  return arr
}
console.log(newObj(studentsArray, result))*/


//hometask 2.

 // 1) Make an array of numbers that are doubles of the first array


/*function doubleNumbers(arr){
  return arr.map(item => item *2)
}

console.log(doubleNumbers([2, 5, 100])); // [4, 10, 200]*/


// 2) Take an array of numbers and make them strings

// function stringItUp(arr){
//   return arr.map(item => item +'')
// }

// console.log(stringItUp([2, 5, 100])); // ["2", "5", "100"]

// 3) Capitalize each of an array of names

/*function capitalizeNames(arr){
 return arr.map(item=>item.charAt(0).toUpperCase() + item.slice(1).toLowerCase())
}

console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"])); // ["John", "Jacob", "Jingleheimer", "Schmidt"]*/

// 4) Make an array of strings of the names

/*function namesOnly(arr){
  return arr.map(item => item.name)
}

console.log(namesOnly([
  {
      name: "Angelina Jolie",
      age: 80
  },
  {
      name: "Eric Jones",
      age: 2
  },
  {
      name: "Paris Hilton",
      age: 5
  },
  {
      name: "Kayne West",
      age: 16
  },
  {
      name: "Bob Ziroll",
      age: 100
  }
]));

// ["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"];*/


// 5) Make an array of strings of the names saying whether or not they can go to The Matrix


// function makeStrings(arr){
//     return arr.map(item => {
//       if(item.age>18){
//         return item.name + ' can go to matrix'
//       }else{
//         return item.name + ' is under age'
//       }
//     })
// }

// console.log(makeStrings([
//     {
//         name: "Angelina Jolie",
//         age: 80
//     },
//     {
//         name: "Eric Jones",
//         age: 2
//     },
//     {
//         name: "Paris Hilton",
//         age: 5
//     },
//     {
//         name: "Kayne West",
//         age: 16
//     },
//     {
//         name: "Bob Ziroll",
//         age: 100
//     }
// ]));
// ["Angelina Jolie can go to The Matrix",
// "Eric Jones is under age!!",
// "Paris Hilton is under age!!",
// "Kayne West is under age!!",
// "Bob Ziroll can go to The Matrix"]

// under age means not 18 +;


//6)  If the given input is an array of numbers, return the sum of all the positives ones. If the array is empty or there aren't any positive numbers, return 0.


// const input = [ 1, -4, 12, 0, -3, 29, -150];  -> //   42

/*function isPos(arr){
let  filtered = arr.filter(item => item>0)
  return filtered.reduce((previous,item) =>{
     return  previous + item
  },0)
  
}
console.log(isPos([ 1, -4, 12, 0, -3, 29, -150]))*/


// 7) Find the difference in age between the oldest and youngest family members, and return their respective ages and the age difference.

/*const input7 = [
  {
      name: 'John',
      age: 13
  },
  {
      name: 'Mark',
      age: 56,
  },
  {
      name: 'Rachel',
      age: 45,
  },
  {
      name: 'Nate',
      age: 67,
  },
  {
      name: 'Jeniffer',
      age: 65,
  }
];

// Output ->  [13, 67, 54];


function ageDif(arr){
 let age = arr.map(item=>item.age)
  let maxVal = Math.max(...age)
  let minVal = Math.min(...age)
  let dif = maxVal - minVal
  let newArr =[]
  newArr.push(minVal,maxVal,dif)
  return newArr
}
console.log(ageDif(input7)) */


// 8 )
//Count the occurrences of distinct elements in the given 2D array. The given input is an array,
// the elements of which are arrays of strings. The result is an object whose
// property names are the values from the arrays and their value is the number of their occurrences.


/*const input8 = [
  ['a', 'b', 'c'],
  ['c', 'd', 'f'],
  ['d', 'f', 'g'],
];

const output8 =   {
  a: 1,
  b: 1,
  c: 2,
  d: 2,
  f: 2,
  g: 1,
}

function countOccurrence(arr){
  let flatten = arr.flat()
 return flatten.reduce((previous,item)=>{
     if (previous[item]){
      previous[item]++
     }else{
      previous[item]=1
     }
     return previous
 },{})
 
}
console.log(countOccurrence(input8))*/


// 9)

// Given an array nums of size n, return the majority element.
// The majority element is the element that appears more than ⌊n / 2⌋ times.
// You may assume that the majority element always exists in the array.

// Input: nums = [3,2,3]
// Output: 3

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2

// NOTE if the n / 2 is for example 3.5 you can assume that the majority elements appears not 3.5 times but 4 times
 

/*function getMajEl(arr){
  return arr.reduce((previous,item)=>{
     if (previous[item]) {
      previous[item]++
     }else{
      previous[item]=1
     }
  
     for(let key in previous){
      if(previous[key]>arr.length/2){
        return key
      }
     }
return previous
  },{})
  
   
}
console.log(getMajEl([2,2,1,1,1,2,2]))*/



// 11) Given a string s and an array of strings words, determine whether s is a prefix string of words.
//
// A string s is a prefix string of words if s can be made by concatenating the first k strings in words for some positive k no larger than words.length.
//
// Return true if s is a prefix string of words, or false otherwise.

// Input: s = "iloveleetcode", words = ["i","love","leetcode","apples"]
// Output: true
// Explanation:
// s can be made by concatenating "i", "love", and "leetcode" together.


/*let s = 'iloveleetcode'
let words = ["i","love","leetcode","apples"]
let str = words.join('')
console.log(str.startsWith(s))*/


// 10) gtnel trvats array i miji 3rd amenashate krknvox tive;

/*function thirdOccur(arr){

let arr1 = arr.reduce((previous,item)=>{
    if(previous[item]){
      previous[item]++
    }else{
      previous[item]=1
    }
  
  return previous

  },{})
let arr2 = Object.values(arr1)
let sorted = arr2.sort((a,b)=>b-a)[2]
for(let item in arr1){
  if(arr1[item] === sorted){
    return item;
  }
}

}
console.log(thirdOccur([5,2,2,2,2,6,6,4,4,4]))*/