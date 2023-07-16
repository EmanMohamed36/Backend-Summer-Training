
function add(firstNumber, secondNumber) {
    console.log(firstNumber + secondNumber);
}

function sub(firstNumber, secondNumber) {
    console.log(firstNumber - secondNumber);
}
function mul(firstNumber, secondNumber) {
    console.log(firstNumber * secondNumber);
}
function div(firstNumber, secondNumber) {
    if(secondNumber == 0) console.log("You can't divid over zero try again");
    else 
    console.log(firstNumber / secondNumber);
}

module.exports = {
    add , sub , mul , div
}

