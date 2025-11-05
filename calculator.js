// Problem Name: Simple Calculator Function


function add(num1 , num2) {
    return num1+num2;
}
function subtract(num1 , num2) {
    return num1-num2;
}
function multyply(num1 , num2) {
    return num1*num2;
}
function devide (num1 , num2) {
    return num1/num2;
}

// Main calculator function --------

function calculator(a, b , operation) {
    if (operation === 'add') {
        return add(a, b);
    }
    else if(operation === 'subtract'){
        return subtract(a , b);
    }
    else if(operation === 'multyply'){
        return multyply(a , b);
    }
    else if(operation === 'devide'){
        return devide(a , b);
    }
    else{
       return ' simple calculator'
    }
}

// Call the calculator function 

const result = calculator(10, 20 , 'add' );
console.log(result);





//  another way to make a calculator ----------------------



function simpleCalculator( num1 , num2 , operation) {
    if(operation === 'add'){return num1 + num2}
    else if(operation === 'substract'){return num1 - num2}
    else if(operation === 'multyply'){return num1 * num2}
    else if(operation === 'devide'){return num1 / num2}
    else{return 'its a simple calculator'}
}
const resultIs = simpleCalculator(8 , 9 , 'multyply');
console.log(resultIs);


