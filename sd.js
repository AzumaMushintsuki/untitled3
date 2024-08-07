let a = 0;
let b = 1;
while (a < 100){
    a = b;
    b = a + b;
}
console.log(a);