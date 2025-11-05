// Calculate Discounted Price Based on Quantity


function discountedPrice(quantity) {
    if(quantity <= 100){
       const total = quantity * 100 ;
       return total ;
    }
    else if (quantity <= 200){
        const total = quantity * 90 ;
        return total ;
    }
    else{
        const total = quantity * 70; 
        return total ;
    }
}
const totalValue = discountedPrice(5);
console.log(totalValue);


 
// Problem: Calculate Layer-Based Discounted Total

function discountTotal (quantity) {
    const first100Price = 100 ;
    const second100Price = 90 ;
    const above100Price = 70 ;

    if ( quantity <= 100 ){
        const first100PriceTotal = first100Price * 100 ; 
        return first100PriceTotal
    }
    else if (quantity <= 200)
    {
        const first100Cost = first100Price * 100 ; 
        const remainingQuantity = quantity - 100 ;
        const remainingCost = remainingQuantity * second100Price ;
        const total = first100Cost + remainingCost ;
        return total ;
    }
    else {
        const first100Cost = first100Price * 100 ; 
        const second100Cost = first100Price * 100 ; 
        const remainingQuantity = quantity - 200 ;
        const remainingCost = remainingQuantity * above100Price ;
        const total = first100Cost + second100Cost + remainingCost ;
        return total;
    }

}
const discount  = discountTotal(500);
console.log(discount);

