const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
// const numbers = [99, 44, 6, 2];

function mergeSort(array) {
  const length = array.length;

  for (let i = 0; i < length; i++) {

    if (array[i] < array[0]) {
      // move number to the first position
      // unshift - add to start
      // splice - add/delete an element at index
      array.unshift(array.splice(i, 1)[0]);
    } else {
      // find where the number should go
      for (let j = 0; j < i; j++) {
        if (array[i] > array[j - 1] && array[i] < array[j]) {
          // move number to the right spot
          array.splice(j, 0, array.splice(i, 1)[0]);
        }
      }
    }

  }

  return array;
}

console.log('Sorted: ', mergeSort(numbers));