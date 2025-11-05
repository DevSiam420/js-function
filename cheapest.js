// find the cheapest phone in the array ---------------
// 
//  (=) ------- assin operator 
// (===)-----  compare operator 


const phoneList = [
  {name: 'samgsong' , price : 21000 , ram : '6gb'},
  {nmae: 'pixel' , price : 22000 , ram : '8gb'},
  {nmae: 'nokia' , price : 24000 , ram : '3gb'},
  {nmae: 'vivo' , price : 30000 , ram : '4gb'},
];

function getChipPhone(phoneArray) {
    let cheap = phoneList[0];
    for(let i = 0 ; i < phoneArray.length ; i ++ ){
       if (phoneArray[i].price < cheap.price){
          cheap = phoneArray[i];
       }
    }
    return cheap;
}
const cheapPhoneIs = getChipPhone(phoneList);
console.log('the cheap phone is :- ',cheapPhoneIs);



console.log('---------------------or------------------');

// 
// find the expensive phone in the array --------------

const phoneLists = [
  {nmae: 'samsong' , price : 21000 , ram : '6gb'},
  {nmae: 'pixel-8' , price : 22000 , ram : '8gb'},
  {nmae: 'xaome' , price : 24000 , ram : '3gb'},
  {nmae: 'poco' , price : 30000 , ram : '4gb'},
  {nmae: 'i-phone' , price : 150000 , ram : '4gb'},
];


function getExpensive(array) {
    let expensive = phoneList[0] ; 
    for (const mobaile of array){
        if(mobaile.price > expensive.price){
           expensive = mobaile;
        }
    }
    return expensive ;
}
const expensiveIs = getExpensive(phoneList);
console.log('the expensive phone is :-',expensiveIs);
