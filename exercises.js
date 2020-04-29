function ex1() {
   var num1 = Number(prompt('Please enter a number'));
   var num2 = Number(prompt('Please enter another number'));

   if(num1 === num2) {
       console.log('BOOM')
   }
   else {
       console.log('Try Again')
   }   
}

function ex2() {
    var num1 = Number(prompt('Please enter a number'));
    var num2 = Number(prompt('Thanks, please enter another number'));

    console.log(`The sum is: ${parseInt(num1 + num2)}`)
}

function ex3() {
    var num1 = Number(prompt('Please enter a number'));
    var num2 = Number(prompt('You are Great!, please enter another number'));

    console.log(`The product is: ${parseInt(num1 * num2)}`)
}
