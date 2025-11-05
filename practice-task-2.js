// Find the lowest number in the array below ---------------

 const numbers =[ 10, 20 , 30 , 34, 33, 78, 5];

 function findLowestNumber(array) {
    let lowest = 10 ;
    for(const num of array){
        if(num < lowest){
           lowest = num ;
        }
    }
    return lowest ;
 }
 const lowNumberIs = findLowestNumber(numbers);
 console.log('lowest number is :-',lowNumberIs);
 


//  find the friend who have smallest name --------------


const friends = ['siam', 'jihad', 'shihab','omor', ];

function getSmallName(array) {
    let smallest = array[2];
    for (let i = 0 ; i < array.length ; i++){
        if(array[i].length < smallest.length){
          smallest = array[i];
        } 
    }
    return smallest;
}
const smallName = getSmallName(friends);
console.log(smallName);

// -----------------------------------
// Write a JavaScript function named calculateElectronicBudget that:

// Takes 3 arguments: number of laptops, mobiles, and tablets the customer wants to buy.

// Calculates the total budget required for all items.

// Returns the total amount.


function calculateElectronicBudget( laptop , mobaile , tablet){
    const laptopPrice = 30000 ; 
    const mobailePrice = 20000 ;
    const tabletPrice = 10000 ; 
    
    let totalLaptopPrice = laptopPrice * laptop;
    let totalmobailePrice = mobailePrice * mobaile;
    let totaltabletPrice = tabletPrice * tablet;

    let total = totalLaptopPrice +totalmobailePrice+totaltabletPrice;
    return total ;
}
const totalBudget = calculateElectronicBudget( 4 , 5 ,6 );
console.log(totalBudget);




// --------------------
// Problem: Calculate Total Price of Phones -------------

const phones = [
    {brand: 'samsung', price : 30000 , model: 's23'},
    {brand: 'xaomi', price : 10000 , model: 'c23'},
    {brand: 'realme', price : 30400 , model: 's2'},
    {brand: 'oppo', price : 34000 , model: 's3'},
    {brand: 'vivo', price : 20000 , model: 'A23'},
];

function getPhonePrice(array) {
    let total = 0 ;
    for ( const phone of array ){
          total = total + phone.price ;
    }
    return total ; 
}
const phonePriceIs = getPhonePrice(phones);
console.log('total phone price is :-',phonePriceIs);
