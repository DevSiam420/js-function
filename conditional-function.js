function isEven(num) {
  if (num % 2 === 0){
      return true ;
  }
  else{
    return false;
  }
}
console.log(isEven(5));
console.log(isEven(6));


// ==================== Shortcut =======

function isEven(num) {
    return num % 2 === 0;
}
console.log('=============');


console.log(isEven(5)); 
console.log(isEven(6)); 

// =====================

function isOdd(num) {
    if ( num % 2 === 1){
        return true ;
    }
    return false;
}
console.log('=======');

console.log( isOdd(4));
console.log( isOdd(9)); 


// ================= Shortcut =========

function isOdd(num) {
    return num % 2 === 1 ;
}
console.log('-------------');

console.log(isOdd(12));
console.log(isOdd(11));

// ------------------------

function isString(name) {
    const size = name.length;
    console.log(name , size);

    if (name % 2 === 0 ) {
        console.log("its a even number");
        return true ;
    }
    else{
        console.log("its a odd number");
        return false ;
    }
}
console.log(isString('siam'));


// =--------------------------

function doDobuleOrTriple(dobuled , number ) {
    if ( dobuled === true){
        return number * 2 ;
    }
    else {
        return number *3 ;
    }
}
console.log('------------');
console.log(doDobuleOrTriple(false , 4));

// ----------------------
// -------- FOR OF LOOP --------
// const nums = [1, 2, 3, 4, 5];

// // function doSumMath (number) {
// //     // console.log(number);
//     // let total = 0 ; 
//     // for(const num of number ){
//     // total = total + num ; 
//     // }
//     // return total ;
// }
// console.log('----------------');

// const sum = doSumMath(nums);
// console.log(sum);

// ------------------ REGULAR FOR LOOP ---------

const nums = [1, 2, 3, 4, 5];

function doSumMath (number) {
    console.log(number);
    let total = 0 ; 
    for  ( let  i = 0 ; i < number.length ; i++){
        total = total + number[i];
    }
    return total;
}
console.log('----------------');

const sum = doSumMath(nums);
console.log(sum); 


// ---------- odd number ------------ 


const numbs = [1 , 2 ,3 ,5 ,67, 84, 33];
const oddIs = [];
function odd (number) {
    for (let i = 0 ; i < number.length; i++ ){
         if(number[i] % 2 === 1 ){
            console.log(number[i]);
            oddIs.push(number[i]);
         } 
    } 
    return oddIs;
}
const oddNum = odd(numbs);
console.log(oddNum);


// --------------------Even number and sum - useing for of loop 

console.log('--------------------------');

const numberIs = [1 , 3 ,4, 7 ,66, 84, 33];
const evenIs = []; 
let total = 0;

function evenNumber (number) {
   for(const num of number){
    if (num % 2 !== 1 ) {
        total = total + num ;
        evenIs.push(num);
    }
   }
   return evenIs;
}
const even = evenNumber(numberIs);
console.log( 'the even array is ', even);
console.log('the total number is :-' , total);



console.log('------------------');


// -------------------- 

function mileToKilomiter(mile) {
    const kilo = mile * 1.60934 ;
    return kilo ;
}
const kilomiter = mileToKilomiter(10);
console.log(kilomiter);



