const fibonacci = [0, 1]
for (i = 2; i <= 90; i++) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
}
console.log(fibonacci);