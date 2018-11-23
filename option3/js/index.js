let n = prompt('Fib number?');
alert(fib(n));
function fib(n) {
  let num = n;

  if (n >= 2) {
    num = fib(n - 1) + fib(n - 2);
  } else {
    num = n
  }

  return num;
}