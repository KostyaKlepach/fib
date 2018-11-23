const n = prompt('fib');
let fib = [1, 1];
if (n <= 2) {
    var result = fib.slice(1, n);
} else {
    for (var i = 3; i <= n; i++) { 
        fib.push(fib[fib.length - 1] + fib[fib.length - 2]); 
    }
    var result = fib[fib.length - 1];
}
alert(result); 