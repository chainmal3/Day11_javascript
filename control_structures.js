// CONTROL STRUCTURES -- controls the flow of execut9ion based on certain conditions

// CONDITIONAL STATEMENTS -- executes blocks of code based on conditions

// eg.

let temp = 25;

if (temp < 0) {
    console.log("It's freezing...");
} else if (temp >= 0 && temp < 20) {
    console.log("It's a cool day.")
} else {
    console.log("It's a warm day.")
}
// It's a warm day.

// switch statment body is composed of 3 keywords:

//     case = keyword for starting a case block
//     break = stoppping the switch statement from running the next case
//     default = for running a code when no matching case if found

let day = 'Monday';

switch (day) {
    case 'Monday':
        console.log("It's the start of the week.");
        break;
    case 'Friday':
        console.log("It's the end of the week.");
        break;
    default:
        console.log("It's a regular day.");
        break;
}

let number = 5;

switch (number) {
    case 1:
        console.log("The number is one.");
        break;
    case 2:
        console.log("The number is two.");
        break;
    case 3:
        console.log("The number is three.");
        break;
    case 4:
        console.log("The number is four.");
        break;
    case 5:
        console.log("The number is five.");
        break;
    default:
        console.log("The number is not between 1 and 5.");
}

let grade = 'A';

switch (grade) {
    case (grade = 'A'):
        console.log("The student gets pasta!");
        break;
    case (grade = 'B'):
        console.log("The student gets an ice cream!");
        break;
    case (grade = 'C'):
        console.log("The student get a candy!");
        break;
    default:
        console.log("No reward to give.");
        break;
}