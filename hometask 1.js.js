/*task 1.
 Write a function named makeQuestion, that takes three arguments: two operands and an operator, and returns a string with the question 
   "What is [oprd1] [opr] [oprd2]?"*/

  function makeQuestion(arr1, arr2, arr3){
    return `What is ${arr1} ${arr3} ${arr2}?`
   }
   console.log(makeQuestion([5], [6], ['+']))


//task 2.
/* Make an object assign 3 different keys to it by 3 different ways that we have learned;*/

  let obj = {}
  obj.name = 'Zhanna'
  obj.age = 45
  obj.isMarried = tru

let obj = {}
obj['name'] = 'Zhanna'
obj['age'] = 34
obj['isMarried']

let obj = {}
let newKey = 'age'
obj[newKey] = 32




// task 3.
/*3) Find the odd one out in the provided array. All array elements are equal, except one. ?????
Your function must return this odd one out. -> ["a", "a", "b", "a"] -> // 'b';*/

let counter = 0
function findOddOne(arr){
  let oddValue = arr[0];
  for(let i =0;i<arr.length;i++){
    if(arr[i] !== oddValue){
      oddValue = arr[i];
      break;
    }
  }
  for(let i =0;i<arr.length;i++){
    if(arr[i] === oddValue){
      counter ++;
    }
  }
  if(counter === 1){
    return oddValue
  }
}
console.log(findOddOne(['a','a','b','a',]))


// task 4.
//Deduce the smallest and the largest number from the supplied numeric array. Return an array containing these numbers, smallest number first.
// [14, 28, 3, 8, 2] -> [2, 28]

let newArr=[];

function getNum(arr){
  let maxNum = arr[0]
  let minNum= arr[0]
  for(let i =arr.length-1; i > 0; i--){
    if (arr[i] < minNum ){
      minNum = arr[i]
     }
   if (arr[i]> maxNum){
    maxNum = arr[i] 
  }
  } newArr.push(minNum)
    newArr.push(maxNum)
  return newArr
} 
console.log(getNum([14,28,3,8,2]))


//task 5.

/*Write a function to separate a single array in to two separate arrays.
The supplied array will only contain numeric values. Your function should output two arrays:
one containing odd numbers, the other containing even numbers.*/

let oddArr = [];
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
}

sepArr([1, 2, 3, 4, 5, 6, 7, 8]);



//task 6.
 /*In this JavaScript array exercise, the supplied array may contain duplicate values. Write a function
 to return only unique values — values that only occur exactly one time within the provided array.
[1, 1, 2, 3, 3, 4, 4, 5] -> [2, 5];*/

let newArr = []
function getUniqueVal(arr){
 
for(let i = 0; i < arr.length; i++){
  let uniqueVal = arr[i]
  let counter = 0
  for (let j = 0; j < arr.length; j++){
    if(uniqueVal === arr[j]){
      counter ++
    }
  } 
  if (counter === 1){
    newArr.push(uniqueVal)
  }
}
return newArr
}
console.log(getUniqueVal([1,1,2,3,3,4,4,5]))

 

//task 7.

//Your function must accept 2 arrays, then return the common words from each.
//arr1 ["dog", "cat", "parrot"] arr2 ["lizard", "rat", "cat"] -> ["cat"]

let newArr = []
function findComWords(arr1,arr2){
  for(let i = 0; i < arr1.length; i++){
    for(let j =0; j < arr2.length; j++){
      if(arr1[i] === arr2[j]){
        newArr.push(arr1[i])
      }
    }
  }
  return newArr
}
console.log(findComWords(["dog", "cat", "parrot"],["lizard", "rat", "cat"]))



//task 8.
//Write a function to accept two arrays. Does the first array contain all elements represented in the second array?
//arr1 ["monday", "tuesday"], arr2 ["tuesday"] -> true;

let counter = 0
function isContain(arr1,arr2){
  for(let i = 0; i< arr1.length; i++){
    for(let j = 0; j < arr2.length; j++){
      if (arr1[i] === arr2[j]){
        counter++;
    }
  }
}
if (counter === arr2.length){
  return true
} else{
  return false
}  
} 
console.log(isContain(['Monday','Tuesday'],['Tuesday']));



//task 9.

//The supplied array will contain both numeric and non-numeric characters.
// Return a new array where all numeric values are positioned at the beginning of the array,
//["b", 6, "a", "q", 7, 2] -> [2, 6, 7, "a", "b", "q"]

let newArr = []
function getPositioned(arr){
  for(let i =0; i < arr.length; i++){
    if (!isNaN(arr[i])){
     newArr.push(arr[i])
    }
  }
  for(let i =0; i < arr.length; i++){
    if (typeof arr[i] === 'string'){
      newArr.push(arr[i])
    }
  }

  return newArr
}
console.log(getPositioned(['b',6,'a','q', 7, 2]))



//task 10.

//From the first array, construct a new array based on the indexes supplied.????
//["mon", "tue", "wed", "thur", "fri"] -> [1, 3, 4];


let newArr =[]
function getIndex(arr1,arr2){
  for (let i = 0; i < arr2.length; i++){
    for (let j = 0; j < arr1.length; j++){
      if (arr2[i] === j){
       newArr.push(arr1[j])
      }
    }
  }
  return newArr
}
console.log(getIndex(["mon", "tue", "wed", "thur", "fri"],[1, 3, 4]))



//task 11.

//This one is a classic. Simply reverse the string without using reverse(). 'abcd' -> 'dcba';

newStr = ''
function reverseStr(str){
  for (let i = str.length - 1; i >= 0; i--){
       newStr += str[i]
  }
  return newStr
}
console.log(reverseStr('abcd'))



//task 1 ADVANCED

/*grel funkciya vore vorpes argument stanum e erku zangvats, zangvatsneric meke kochvum e strings myuse lookups vore kveradardzni 
array vorum nerarvats klnien te lookup arrayi miji andamneric amen meke qani angam ka strings array um orinak
const lookup = ['i', 'love', 'sadakhlo', 'esminich']
const strings = ['i', 'i', 'sadakhlo', 'i'];
foo(lookup, strings)  kveradardzni [3, 0, 1, 0]*/

let newArr =[]

function getCount(lookup,strings){
for(let i = 0; i < lookup.length; i++){
  let counter = 0
  for(let j = 0; j < strings.length; j++){
    if (lookup[i] === strings[j]){
      counter++
    }
  }
  newArr.push(counter)
}
return newArr
}

console.log(getCount(['i', 'love', 'sadakhlo', 'esiminch'],['i', 'i', 'sadakhlo', 'i']))


//task 2 ADVANCED


function getMinMaxSum(arr){
  let sum = 0
  let obj = {}
  let minVal = arr[0]
  let maxVal = arr[0]
  for(let i = 0; i< arr.length; i++){
     if(minVal > arr[i]){
      minVal = arr[i]
     }
     if(maxVal< arr[i]){
      maxVal = arr[i]
     }
     sum += arr[i]
  }
  obj['min'] = sum - maxVal
  obj['max'] = sum - minVal
  return obj
}
console.log(getMinMaxSum([1,2,3,4]))



// task 3 ADVANCED

//Grel funkciya vore kndhuni vorpes argument array vortex klini tver voronq bolore kkrknven erku angam baci mi hatic
//Petka gtnel er veradardznel ayd chkrknvox tive ORINAK [1,2,2,1,3,4,4,3,5] i  depqum kveradardzni 5 qani vor 5 e chi krknvum;


function getUniqueVal(arr){
  for(let i =  0; i < arr.length; i++){
    let uniqueVal = arr[i]
    let counter = 0
    for(let j = 0; j < arr.length; j++){
      if(uniqueVal === arr[j]){
        counter ++
      }
    }
    if (counter === 1){
       return uniqueVal
    }
}
}
console.log(getUniqueVal([1,2,2,1,3,4,4,3,5]))



/*Objects

For the given list of payments do the following exercises:
Տրված վճարումնեի ցուցակի համար կատարել հետևյալ վարժություննորը։
 
8.  Find the max payment 
    Գտնել մեծագույն կատարված վճարումը 
9.  Calculate the sum of all payments 
    Հաշվել վճարումների ամբողջ գումարը
10.  Find the count of all payments that are more than 1500
    Գտնել բոլոր այն վճարումների քանակը, որոնք ավելին են 1500-ից
11.  Calculate the average of all payments
Հաշվել բոլոր կատարված վճարուների թվաբանական միջինը*/
 
const payments = [
 {
   studentId: 1, // Unique identifier for each student
   studentName: "John Doe", // Name of the student
   payedAmount: 1600, // Amount payed with this transaction
   year: 2020, // The payment year
 },
 {
   studentId: 1, // Unique for each student
   studentName: "John Doe",
   payedAmount: 1500,
   year: 2021
 },
 {
   studentId: 1, // Unique for each student
   studentName: "John Doe",
   payedAmount: 1400,
   year: 2022
 },
 {
   studentId: 1, // Unique for each student
   studentName: "John Doe",
   payedAmount: 1300,
   year: 2023
 },
 {
   studentId: 2, // Unique for each student
   studentName: "Lu Kang",
   payedAmount: 1500,
   year: 2020
 },
 {
   studentId: 2, // Unique for each student
   studentName: "Lu Kang",
   payedAmount: 1400,
   year: 2021
 },
 {
   studentId: 2, // Unique for each student
   studentName: "Lu Kang",
   payedAmount: 1300,
   year: 2023
 },
 {
   studentId: 2, // Unique for each student
   studentName: "Lu Kang",
   payedAmount: 1200,
   year: 2023
 }
];

//8.
 function getMaxPay(payments){
  let maxPay = payments[0].payedAmount
  for(let i = 0; i < payments.length; i++){
    if(maxPay<payments[i].payedAmount){
      maxPay = payments[i].payedAmount
    }
  }
  return maxPay
}
console.log(getMaxPay(payments))


//9.
let sum = 0
 function getSum(payments){
  for(let i = 0; i<payments.length; i++){
    sum += payments[i].payedAmount
  }
  return sum
 }
console.log(getSum(payments))


//10.
let count = 0
function getSum(payments){
  for(let i = 0; i<payments.length; i++){
    if(payments[i].payedAmount> 1500){
      count++
    }
  }
  return count
}
console.log(getSum(payments))


//11.
let sum = 0
let count = 0
function getAverage(payments){
  for(let i = 0; i < payments.length; i++){
    sum += payments[i].payedAmount
    if(payments[i].payedAmount){
      count ++
    }
  }
  return sum/count
}
console.log(getAverage(payments))




/*For the given list of exams, and evaluations do the following exercises.
Տրված քննությունների արդյունքների ցուցակի համար, կատարել հետևյալ վարժությունները։
 
13.  Return  the evaluation record with the lowest evaluation score,
Վերադարձնել ամենացածր գնահատականով(score) քննության արդյունքը։
14.  Return the name of the student who has the lowest evaluation score․
Վարադարձնել այն ուսանողի անունը, ով արդյունքների մեջ ունի ամենացածր գնահատականը։
15.  Return array of students that have any evaluation more than 60․
Վերադարձնել այն ուսանողների ցուցակը, որոնք ունեն որևէ արդյունք որը մեծ է 60-ից։*/

 
const evaluations = [
 {
   studentId: 1, // Unique identifier for each student
   studentName: "John Doe",
   courseId: 1, // Unique identifier for each course
   courseName: "JS Bootcamp",
   score: 70
 },
 {
   studentId: 1, // Unique identifier for each student
   studentName: "John Doe",
   courseId: 2, // Unique identifier for each course
   courseName: "JS Level 0",
   score: 60
 },
 {
   studentId: 1, // Unique identifier for each student
   studentName: "John Doe",
   courseId: 3, // Unique identifier for each course
   courseName: "JS Level 1",
   score: 50
 },
 {
   studentId: 2, // Unique identifier for each student
   studentName: "Tom Colins",
   courseId: 1, // Unique identifier for each course
   courseName: "JS Bootcamp",
   score: 60
 },
 {
   studentId: 2, // Unique identifier for each student
   studentName: "Tom Colins",
   courseId: 2, // Unique identifier for each course
   courseName: "JS Level 0",
   score: 50
 },
 {
   studentId: 2, // Unique identifier for each student
   studentName: "Tom Colins",
   courseId: 3, // Unique identifier for each course
   courseName: "JS Level 1",
   score: 40
 },
 {
   studentId: 3, // Unique identifier for each student
   studentName: "Sarah Conor",
   courseId: 1, // Unique identifier for each course
   courseName: "JS Bootcamp",
   score: 45
 },
 {
   studentId: 3, // Unique identifier for each student
   studentName: "Sarah Conor",
   courseId: 2, // Unique identifier for each course
   courseName: "JS Level 0",
   score: 35
 },
 {
   studentId: 3, // Unique identifier for each student
   studentName: "Sarah Conor",
   courseId: 3, // Unique identifier for each course
   courseName: "JS Level 1",
   score: 25
 }
];
 

//13.
let minScore = evaluations[0].score
function returnScore(evaluations){
  for(let i = 0; i < evaluations.length; i ++){
    if(minScore > evaluations[i].score){
      minScore = evaluations[i].score
    }
  }
  return minScore
}
console.log(returnScore(evaluations))



//14.
let minScore = evaluations[0].score
let studentName = ''
function returnName(evaluations){
  for(let i = 0; i< evaluations.length; i++){
    if(minScore > evaluations[i].score){
      studentName = evaluations[i].studentName
      
    }
  }
  return studentName
  
}
 console.log(returnName(evaluations))


//15.
let newArr = []
 function returnList(evaluations){
  for(let i = 0; i< evaluations.length; i++){
      if(evaluations[i].score > 60){
        newArr.push(evaluations[i].studentName)
      }
  }
  return newArr
}

console.log(returnList(evaluations))







