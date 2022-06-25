const number1 = parseFloat(prompt("Enter number1: ")) ;
const number2 = parseFloat(prompt("Enter another number: ")) ;

const operator = prompt("Enter operator (+, -, /, *)");

let result = 0;
if(isNaN(number1) || isNaN(number2)){
    alert('Wrong Input! Refresh the page again and provide data!')
}else{
    if (operator == "+") {
        result = number1 + number2;
    }else if (operator == "-") {
        result = number1 - number2;
    }else if (operator == "/") {
        result = number1 / number2;
    }else if (operator == "*") {
        result = number1 * number2;
    }
    document.write(number1 + operator + number2 +" = " + result);
} 