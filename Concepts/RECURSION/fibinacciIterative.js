// 0 1 1 2 3 5 8 13 21 34 55 89 144...

function fibinacciIterative(n) { // O(n)
  let arr = [0, 1];
  for (let i = 2; i <= n; i++) {
    arr.push(arr[i - 2] + arr[i - 1]);
  }

  return arr[n];
}

console.log('fibinacciIterative(8)', fibinacciIterative(50));

function fibinacciIterativeRecursive(n) { // O(2^n)
  if (n < 2) {
    return n;
  }

  return fibinacciIterativeRecursive(n - 1) + fibinacciIterativeRecursive(n - 2);
}

// console.log('fibinacciIterativeRecursive(8)', fibinacciIterativeRecursive(40)); // very slow