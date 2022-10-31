// 1. Compute the sum of an array of integers.
// sum([1,2,3,4,5,6]); // 21
var sum = function (array) {
    total = array[0];
    if (!array.length) return 0;
    return (total += sum(array.slice(1)));
  };

// 2. Sum all numbers in an array containing nested arrays.
// arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function (array) {
    //   const result = array.flat(Infinity);
    const flatten = (arr) =>
      Array.isArray(arr) ? [].concat(...arr.map(flatten)) : arr;
    const flatArr = flatten(array);
    let total = flatArr[0];
    if (!flatArr.length) return 0;
    return (total += arraySum(flatArr.slice(1)));
    //   return sum(flatArr);
  };
  

// 3. Check if a number is even.
var isEven = function (n) {
  n = Math.abs(n);
  if (n === 0) {
    return true;
  } else if (n === 1) {
    return false;
  } else {
    return isEven(n - 2);
  }
};

// 4. Write a function that reverses a string.
var reverse = function (string) {
    if (string === "") {
      return "";
    } else {
      return reverse(string.substring(1)) + string.charAt(0);
    }
  };

// 5. Reverse the order of an array
var reverseArr = function (array, output=[]) {
    if(array.length === 0){
      return output;
    }
    output.push(array[array.length - 1])
    return reverseArr(array.slice(0, -1), output)
  };


// 6. Get the first n Fibonacci numbers. In the Fibonacci sequence, each subsequent
// number is the sum of the previous two.
// Example: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5); // [0,1,1,2,3,5]
// Note: The 0 is not counted.
function fibonacci(n) {
  var i, sequence = [0, 1]; // We start our sequence at [1, 1]
  for (i = 1; i < n; i++)
    sequence.push(sequence[i] + sequence[i - 1]);
  return sequence;
}console.log(fibonacci(5))// [0,1,1,2,3,5]

// 7. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
function nthFibo(n) {
  var i, sequence = [0, 1]; // We start our sequence at [0, 1]
  for (i = 1; i < n; i++)
    sequence.push(sequence[i] + sequence[i - 1]);
  return sequence[i];
}console.log(nthFibo(5))// 5



// 8. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var obj2 = {
  a: 2,
  b: {b: 2, bb: {b: 3, bb: {b: 2}}},
  c: {c: {c: 2}, cc: 'ball', ccc: 5},
  d: 1,
  e: {e: {e: 2}, ee: 'car'}
};
function nestedEvenSum(object) {
  let sum = 0;
  for(let key in object){
      let content = object[key];
      if (typeof content == 'object') sum += nestedEvenSum(content);
      else if( typeof content == 'number') sum += (content % 2 === 0) ? content : 0;
  }
  return sum;
}

console.log(nestedEvenSum(obj2)); // 10


// 9. Write a function for binary search.
// var array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// binarySearch(array, 5) // 5
// https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search

const arr1 = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
const binarySearch = (arr, start, end, num) => {
   const mid = start + Math.floor((end - start)/2);
   if(start <= end){
      if(arr[mid] === num){
         return mid;
      }
      if(num < arr[mid]){
         return binarySearch(arr, start, mid-1, num);
      }
      if(num > arr[mid]){
         return binarySearch(arr, mid+1, end, num);
      }
   }
   return -1;
};
console.log(binarySearch(arr1, 0, arr1.length-1, 5));//5


// 10. Write a merge sort function.
// mergeSort([34,7,23,32,5,62]) // [5,7,23,32,34,62]
// https://www.khanacademy.org/computing/computer-science/algorithms/merge-sort/a/divide-and-conquer-algorithms

function merge(left, right) {
  let arr = []
  while (left.length && right.length) {
      
      if (left[0] < right[0]) {
          arr.push(left.shift())  
      } else {
          arr.push(right.shift()) 
      }
  }
  
 
  return [ ...arr, ...left, ...right ]
}
function mergeSort(array) {
  const half = array.length / 2
  if(array.length < 2){
    return array 
  }
  
  const left = array.splice(0, half)
  return merge(mergeSort(left),mergeSort(array))
}

array = [34,7,23,32,5,62];
console.log(mergeSort(array));


