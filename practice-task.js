// write a function to convert temperature celcious to ferenhight .

// Ans :- celcious thakay ferenhight a convrt korar sutro holo "celcious ke 9/5 dia gun korar por 32 + kortay hobay "

function convertferenheightIt (celcious) {
    let ferenhight =(celcious * 9/5 ) + 32 ;
    return ferenhight ;
}
const result = convertferenheightIt(20);
console.log(result);


// ------ you are given an array of number  . count how many time a number is repited in the array . the array is , number = [5, 7, 2 ,4 ,5 ,67, 8 ,5];


const number = [5, 7, 2 ,4 ,5 ,67, 8 ,5];
let count = 0 ;

// function findNumber (array) {
//     const terget = 5 ;
//     for (const num of array){
//         if(num === terget){
//            count ++; 
//         }
//     }
//      return count ;
// }
// const numberIs = findNumber( number);
// console.log(numberIs);



function findNumber(array , terget) {
    let count = 0 ; 
    for ( let i = 0 ; i < array.length ; i++){
        if (array[i] === terget){
           count ++ ;
        }
    }
    return count ; 
}
const numberIs = findNumber(number , 5);
console.log('the repited number is :-',numberIs);



// write a function to count the number of vowel in a string


console.log('--------------------')

function findVowel(str) {
    const vowel = ['a', 'e', 'i', 'o', 'u'];
    let count = 0 ; 
    for(let i = 0 ; i < str.length ; i ++){
        let charecter = str[i].toLowerCase();
        if (vowel.includes(charecter)){
           count++;
        }
    }
    return count ;
}
const vowelResultIs = findVowel("Siam is a vary bad boy");
console.log('total vowel is :-',vowelResultIs);



// write a function to find the longest word in a given string .
