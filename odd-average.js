const someNumber = [ 1, 3 , 45 , 56, 67, 78, 44, 33];
const oddNumbers = [];
let total = 0 ; 
function odd (number) {
    for ( let i = 0 ; i < number.length; i++){
          if(number[i] % 2 !== 0 ){
            oddNumbers.push(number[i]);
            total = total + number[i];
          }
    }
    const count = oddNumbers.length ;
    let average = total / count ;
    return average;
    
}
const  oddAvg = odd (someNumber);
console.log( 'the average number is :-', oddAvg);

console.log('----------------------------------');

// ---------- Average of even number ---------

const numbers = [10, 15, 20, 25, 30, 35];
const evenNumber = [];
let sum = 0 ; 
function even (number) {
    for ( let i = 0 ; i < number.length ; i++){
          if (number[i] % 2 !== 1 ){
             evenNumber.push(number[i]);
             sum = sum + number[i];
          }
    }
    const count = evenNumber.length;
    const avg = sum / count ; 
    return avg ;
}
const avgIs = even ( numbers);
console.log(avgIs);

// --------------------------------


const briyaniKhor = ['siam', 'jihad', 'hamim', 'siam', 'omor', 'jihad', 'hamim'];
const unique = [];

function noDuplicate (array) {
      for ( let i = 0 ; i < array.length ; i++  ){
            if(!unique.includes(array[i])) {
                  unique.push(array[i]);
            }
      }
      return unique ;
}
const result = noDuplicate(briyaniKhor);
console.log(result);





