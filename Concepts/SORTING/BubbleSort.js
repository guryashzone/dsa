const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
// const numbers = [99, 44, 6, 2];

function bubbleSort(array) {
  const length = array.length;
  for (let i = length; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }

      console.log('Array: i ', i, ' j ', j, JSON.stringify(array));
    }
  }

  return array;
}

console.log('Sorted: ', bubbleSort(numbers));