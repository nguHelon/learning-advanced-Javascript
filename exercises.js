/* Where do I Belong
 Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.

 For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).

 Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).

*/

// solution
/* 
    function getIndexToIns(arr, num) {
  arr = arr.sort(function(a, b){return a - b});
  
  if (num > arr[arr.length - 1]) {
    num = arr.length;
  } 

  else if (arr.length == 0) {
    num = 0;
  }
  
  else {
    for (let i = 0; i <= arr.length - 1; i++) {
      if (num <= arr[i]) {
        num = i;
        break;
      }    
    }
  }
  return num;
}

let result = getIndexToIns([], 1);
console.log(result);
*/

/* 
 **Question
 Chunky Monkey
Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.


** Solution
function chunkArrayInGroups(arr, size) {
  let arrAcc = [];
  let newArr = [];
  let cntr = 0;
  for (let i = 0; i <= arr.length - 1; i++) {
      if(cntr === size) {
        cntr = 0;
        arrAcc.push(newArr);
        newArr = [];
      }      
      newArr.push(arr[i])
      cntr++;
  }

  arrAcc.push(newArr);
  return arrAcc;
}

let result = chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2);
console.log(result);
*/

/* 
**** Question: Sum All Numbers in a Range

We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.

For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.

***** Solution
function sumAll(arr) {
  let firstNum = arr[0];
  let secondNum = arr[1];

  if (firstNum > secondNum) {
    firstNum = arr[1];
    secondNum = arr[0];
  }

  let acc = 0;
  for (let i = firstNum; i <= secondNum; i++) {
    acc += i;
  }
  return acc;
}

let result = sumAll([4, 1]);
;console.log(result)
*/

/*
*** Question: Seek and Destroy

You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

Note: You have to use the arguments object.

*** Solution
function destroyer(arr) {
  let mainArr = arguments[0];

  let subArr = [];
  for (let i = 1; i <= arguments.length - 1; i++) {
    subArr.push(arguments[i]);
  }

  let newArr = [];
  for(let j = 0; j <= mainArr.length - 1; j++) {
    if(subArr.includes(mainArr[j]) === false) {
      newArr.push(mainArr[j]);
    }
  }

  return newArr;
}

let result = destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3);
console.log(result);

*/

/*
**** Question: Pig Latin
Pig Latin is a way of altering English Words. The rules are as follows:

- If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add ay to it.

- If a word begins with a vowel, just add way at the end.

**** Solution: 
function translatePigLatin(str) {
  let consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  let splittedStr = str.split("");
  let firstLetter = splittedStr[0];

  if (consonants.includes(firstLetter)) {
    let consonantCluster = [];
    let finalString = []
    let lastConsonants = "";

    for(let i = 0; i <= splittedStr.length; i++) {
      if (consonants.includes(splittedStr[i])) {
        consonantCluster.push(splittedStr[i]);
      } else {
        break;
      }
    }
    
    lastConsonants = consonantCluster.join("");
    
    for(let i = 0; i <= splittedStr.length - 1; i++) {
      if (splittedStr.includes(consonantCluster[i]) == false) {
        finalString.push(splittedStr[i]);
      }
    }
    console.log(finalString)
    str = finalString.join("") + lastConsonants + 'ay';

  } else if(vowels.includes(firstLetter)){
    str = str + "way";
  }

  return str;
}

let result = translatePigLatin("paragraphs");
console.log(result);
*/