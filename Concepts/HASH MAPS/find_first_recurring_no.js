/**
 * Google Question: Find the first recurring number
 * [2, 5, 1, 2, 3, 5, 1, 2, 4] ==> 2
 * [2, 1, 1, 2, 3, 5, 1, 2, 4] ==> 1
 * [2, 3, 4, 5] ==> undefined

*/

function findRecurringNumber(arr) {
  let obj = {};
  for (let i = 0; i < arr.length; i++) { // O(n)
    if (obj[arr[i]] != undefined) { // O(1)
      return arr[i];
    }

    obj[arr[i]] = i;
  }

  return undefined;
}

console.log(findRecurringNumber([2, 1, 3, 2, 3, 5, 1, 2, 4]));
// console.log(findRecurringNumber([2, 1, 1, 2, 3, 5, 1, 2, 4]));
// console.log(findRecurringNumber([2, 3, 4, 5]));