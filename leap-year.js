function leapyearIs (year) {
    if (year % 100 !== 0  && year % 4 === 0 ){
         return true ; 
    }
}
const leapYear = leapyearIs( 2024);
console.log(leapYear);




console.log('------------');


function even (number) {
    if (number === 0   ){
      
          console.log('empty');
    }
    else if (number % 2 === 0 ){
       console.log('even number');
       
    }
    else{
       
        console.log("odd number");
    }
    return number ; 
}
even ( 0 );

