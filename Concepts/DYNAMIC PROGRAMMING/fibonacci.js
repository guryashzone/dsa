let calculations = 0;

function fibonacci(n) { // O(2^n)
  if (n < 2) {
    return n;
  }

  return fibonacci(n - 1) + fibonacci(n - 2);
}

function fibonacciMaster() { // O(n)
  let cache = {};
  return function fib(n) {
    if (n in cache) {
      return cache[n];
    }

    if (n < 2) {
      return n;
    }

    cache[n] = fib(n - 1) + fib(n - 2);
    return cache[n];
  };
}

function fibonacciMaster2(n) {
  let answer = [0, 1];
  for (let i = 2; i <= n; i++) {
    answer.push(answer[i - 2] + answer[i - 1]);
  }

  return answer.pop();
}

const fasterFib = fibonacciMaster();
console.log('fasterFib0', fibonacci(10));
console.log('fasterFib1', fasterFib(10));
console.log('fasterFib2', fibonacciMaster2(10));