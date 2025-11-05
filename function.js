function add (a , b) {
    return (a + b);
}
const result = add(10, 20 );  

console.log(result);



 function sayMyName() {
    console.log('Hi iam siam');
 }
 sayMyName()



//  
function great(name) {
    console.log("hello ," + name); 
}
great("")



// ========== borgo korlam



 function square(number) {
    const borgo = (number*number);
    console.log("The borgo is ", borgo);
 }
 square(5);


function sum(num1 , num2 ) {
    const total = num1 + num2 ;
    console.log(total);
}
sum(10 , 20);



 function sum(num1 , num2 ) {
    const total = num1 + num2 ;
    const square = num1 * num2 ;
    const devide = num1 / num2 ;
    const minus = num1 - num2 ;
    console.log(total , square , devide , minus);
 }
 sum( 20  , 10)

 function sayMyName(name) {
     console.log(`Hi ${name}!`);
     
 }
 sayMyName("siam");
//  ======================
function multyply(x , y ) {
    return x * y ;
}
console.log(multyply(10,20));



const number = [ 1, 2 , 3 ,4 ,5]; 
const reversed = [];
for ( let i = number.length - 1 ; i >= 0 ;
    i--
){
    const  num = number[i];
    reversed.push(num);
}
console.log(reversed);



// =============================================



function square(num) {
    console.log(num);
    let multyply = num * num ; 
    console.log(multyply);
    
    
}
square(4)

// =======

function sum (num1 , num2) {
    const plus = num1 + num2 ;
    const multyply = num1* num2;
    console.log(plus ,"and" , multyply);
}
sum(10 , 20 );
sum ( 20 , 12 );

// ==============

function addAll(a , b ,c , d , e ) {
   const total =  a * b / c + d * e ;
   console.log(total);
   
}
addAll( 200, 12 ,23, 900, 2)

// =======================

function dobuleit (num) {
    const dobuled = num * 2 ; 
    console.log(dobuled);
}
dobuleit(10);
dobuleit(20);
dobuleit( 40 );
const money = 100 ; 
dobuleit(money);

// =====================
const myAge = 20 ;
const fatherAge = 60 ;
function differance (num1 , num2 ) {
  const diff_is = num1 - num2 ; 
    console.log(diff_is);
    
}
differance ( fatherAge , myAge);

// =================
function tenTimes(number ) {
    const result = number *2;
    return result;
}
console.log('==========');

const output = tenTimes( 10);
console.log(output);


// =============================
function  add (price1 , price2 ) {
    return price1+ price2;
}
console.log('-----------------');

const bill = add( 10 , 20 );
console.log(bill);
// =====================

function doMath (number1 , number2 ) {
   const sum = number1 + number2 ;
   const diff = number1 - number2;
   const multyply = sum * diff ;
   const result = multyply / 2 ;
   return result; 
   
   
}
console.log('=====');
// console.log(doMath(10, 4));

const ans = doMath(10 ,4 );
console.log(ans);



