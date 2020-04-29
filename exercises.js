function ex1() {
    var num1 = Number(prompt('Please enter a number'));
    var num2 = Number(prompt('Please enter another number'));

    if (num1 === num2) {
        console.log('BOOM');
    }
    else {
        console.log('Try Again');
    }
}

function ex2() {
    var num1 = Number(prompt('Please enter a number'));
    var num2 = Number(prompt('Thanks, please enter another number'));

    console.log(`The sum is: ${parseInt(num1 + num2)}`);
}

function ex3() {
    var num1 = Number(prompt('Please enter a number'));
    var num2 = Number(prompt('You are Great!, please enter another number'));

    console.log(`The product is: ${parseInt(num1 * num2)}`);
}

function ex4() {
    var day = Number(prompt('Please enter a number represeting the day'));

    if (day === 1) {
        console.log(`Have a good week!`);
    }
    else if (day >= 2 && day <= 4) {
        console.log(`Have a good day!`);
    }
    else if (day >=5 && day <= 7) {
        console.log(`Have a happy weekend!`);
    }
    else {
        console.error('You enterd an illegal number!');
    }
}

function ex5() {
    var day = Number(prompt('Please enter a number represeting the day of the month'));

    if (day === 1) {
        console.log(`Have a good month!`);
    }
    else if (day >= 2 && day < 10) {
        console.log(`Start work!`);
    }
    else if (day === 10) {
        console.log('Get salary!');
    }
    else if (day >=11 && day <= 20) {
        console.log(`Be happy!`);
    }
    else if (day >=21 && day <= 30) {
        console.log(`THE END! TAM TAM TAAAAM`);
    }
    else if (day === 31) {
        console.log(`BOOM BOOM!`);
    }
    else {
        console.error('You enterd an illegal number!');
    }
}

function ex6() {
    var holiday = String(prompt('Please enter the name of your favorite holiday'));

    if (holiday === 'purim') {
        console.log(`Happy Purim! Don't forget your costume!`);
    }
    else if (holiday === 'passover') {
        console.log(`What are you doing here? Go clean your house!`);
    }
    else if (holiday === 'shavoout') {
        console.log('Eat more milk and cheese!');
    }
    else if (holiday === 'suckot') {
        console.log(`Go build a sukka!`);
    }
    else if (holiday === 'hanuka') {
        console.log(`So you reaaaaly love doughnuts, ah?`);
    }
    else if (holiday === 'ramadan') {
        console.log(`RAMADAN KAREEM!`);
    }
    else {
        console.error('You enterd an illegal holiday name!');
    }
}

function ex7() {
    const NUMBER_OF_PLAYERS = 2;
    var playerNames = new Array(NUMBER_OF_PLAYERS);
    var playerScores = new Array(NUMBER_OF_PLAYERS);

    for (var i = 0; i < NUMBER_OF_PLAYERS; i++) {
        playerNames[i] = String(prompt(`Please enter the name of player number ${i + 1}`));
        playerScores[i] = Number(prompt(`Please enter the score of player number ${i + 1}`));
    }
    
    if(playerScores[0] > playerScores[1]) {
        console.log(`The winner is ${playerNames[0]} with the score ${playerScores[0]}`);
    }
    else if(playerScores[0] < playerScores[1]) {
        console.log(`The winner is ${playerNames[1]} with the score ${playerScores[1]}`);
    }
    else {
        console.log(`Unbelievable! it's a tie!`);
    }
}

function ex8() {
    var num = Number(prompt('Please enter a number'));

    if(num % 2 === 0) {
        console.log('The number you have entered is even');
    }
    else {
        console.log('The number you have entered is odd');
    }
}

function ex9() {
    var num1 = Number(prompt('Please enter a number'));
    var num2 = Number(prompt('Great Number! please enter another number'));

    if(num1 > num2) {
        console.log(`The larger number is ${num1}`);
    }
    else if(num1 < num2) {
        console.log(`The larger number is ${num2}`);
    }
    else {
        console.log(`Unbelievable! it's a tie!!`);
    }
}

function ex10() {
    const NUMBER_OF_NUMBERS = 7;
    var numbers = new Array(NUMBER_OF_NUMBERS);
    var avg = 0;

    for (var i = 0; i < NUMBER_OF_NUMBERS; i++) {
        numbers[i] = Number(prompt(`Please enter a number`));
    }

    for (var i = 0; i < numbers.length; i++) {
        avg += numbers[i];
    }

    avg /= NUMBER_OF_NUMBERS; 

    console.log(`The average of all the numbers is ${avg}`);
}