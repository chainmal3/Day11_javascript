// LOOPS -- used to repeatedly execute a block of code until a specific condition is met

// FOR statement
for (let x = 0; x < 10; x++) {
    console.log(x)
}
// prints x incrementally until x = 10 then it fails and does not print

for (let i = 1; i <= 5; i++) {
    console.log('Count: ', i);
}

// WHILE STATEMENTS

let a = 0;

while (a < 6) {
    console.log('The value of i = ${a}');
    a++;
}

let count = 1;
while (count <= 5) {
    console.log('Count: ', count);
    count++;
}

// Do-while loop
// - executes the block of code at least once before it evaluates the condition

let j = 1;

do {
    console.log('Do-while Count: ', j);
    j++;
} while (j <= 5)
