// Problem: Find the Total Price of All Products ------------------

const total =[
   {name : "shirt" , price : 600 , brand : 'easy'},
   {name : "underware" , price : 100 , brand : 'polo'},
   {name : "lungi" , price : 400 , brand : 'amanotShah'},
   {name : "gamca" , price : 600 , brand : 'shah-amanot'}
];



function totalPrice(array) {
    let total = 0 ; 
    for (const product of array){
         total = total + product.price;
    }
    return total ;
}
const totalPriceIs = totalPrice(total);
console.log('total fu*king price is :- ',totalPriceIs);


// //
console.log('-------- and -------------');

// Problem: Find the Total Cost of All Products ------------------

const totalProduct =[
   {name : "pant" , price : 700 , brand : 'easy' , quantity : 2},
   {name : "underware" , price : 400 , brand : 'polo' ,quantity : 8},
   {name : "lungi" , price : 600 , brand : 'amanotShah', quantity : 3},
   {name : "gamca" , price : 900 , brand : 'shah-amanot', quantity : 5}
];

function totalCost (array) {
    let total = 0 ; 
    for (const product of array ){
        let productCost = product.price * product.quantity;
        total = total + productCost
    }
    return total ;
}
const totalCostIs = totalCost(totalProduct);
console.log('total product cost is ',totalCostIs ,'tk');
  


console.log('------------------------------and');

