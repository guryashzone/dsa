const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
// const numbers = [99, 44, 6, 2];

function selectionSort(array) {
  const length = array.length;

  for (let i = 0; i < length; i++) {
    let min = i;

    for (let j = i + 1; j < length; j++) {
      if (array[j] < array[min]) {
        min = j;
      }

      console.log('Array: i ', i, ' j ', j, JSON.stringify(array));
    }

    if (min !== i) {
      let temp = array[i];
      array[i] = array[min];
      array[min] = temp;
    }
  }

  return array;
}

console.log('Sorted: ', selectionSort(numbers));