const n = prompt('fib');
let a = 1;
let b = 1;
for (var i = 3; i <= n; i++) {
    let c = a + b;
    a = b;
    b = c;
}
alert(b);

