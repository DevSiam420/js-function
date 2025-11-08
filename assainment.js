// ------calculate the cash out charge -----
// charge is = 1.75%

function  cashOut(money) {
    if (typeof money !== 'number') {
        return 'invalid'
    }
    const charge = Math.floor(money * 0.0175);
    return charge ;
}
console.log(cashOut(7095));




// ========================= Detect e-mail valid  or not ---

function validEmail(email) {
    if (typeof email !== "string") {
        return 'invalid' ; 
    }
    if (email.includes(' ')) {
        return false ;
    }
    const firstChar = email[0];
    if (['.' , '/', '-', '+', '@'].includes(firstChar)) {
        return false ;
    }
    if (!email.endsWith('.com')) {
        return false ;
    }
    if (!email.includes('@')) {
        return false ;
    }
    else{
        return true ;
    }
}
const emailIs = validEmail("siam.molla.dev420@gmail.com");
console.log(emailIs);



console.log('========================================');

// -------------------

const allVote = ['mango','banana','na-vote','mango',];

function electionResult (votes) {
    let mangoVote = 0 ;
    let bananaVote = 0;
    if (!Array.isArray(votes)) {
      return "invalid";
    }
    for (const vote of votes){
        if(vote === 'mango'){
            mangoVote ++ ;
        }
        else if (vote === 'banana') {
            bananaVote++;
        }
    }
    if (mangoVote < bananaVote ) {
        return 'Banana';
    }
    else if(mangoVote > bananaVote){
        return 'Mango';
    }
    else{
        return 'Draw';
    }
}
const winner = electionResult(allVote);
console.log(winner);








// function validEmail(email) {
//   if (typeof email !== 'string') return false;
//   if (email.includes(' ')) return false;

//   const atMatches = (email.match(/@/g) || []);
//   if (atMatches.length !== 1) return false;

//   return true;
// }

// const emailIs = validEmail("siam.molla.dev420@gmail.com");
// console.log(emailIs);

 

// ===================================

const friends = [
    {name : 'kasem', roll : 1 , bestFriend: 2},
    {name : 'kasem', roll : 2, bestFriend: 1}
];

// =============================
const wasteTime = [200 , 455 , 300, 3354 , 433, 390];

function calculateWatchTime(time) {
    let totaltime = 0 ;
    for(let i = 0 ; i < time.length; i++){
        totaltime = totaltime + time[i];
        if(typeof time[i] !== 'number'){
            return 'invalid'
        }
    }    
    // 1 hour = 3600 s ;
    let hours = Math.floor(totaltime/3600); 
    let minuites = Math.floor((totaltime % 3600) / 60);
    let seconds = totaltime % 60 ;
    return{
        hour : hours ,
        minuite : minuites , 
        second : seconds
    }
}
const totalWasteTimeIs = calculateWatchTime(wasteTime);
console.log(totalWasteTimeIs);

console.log('=========================');


// =========================


function calculateVat(vat) {
    if(typeof vat !== 'number'){
        return 'invalid'
    }
    else if(vat < 0){
       return 'invalid';
    }
      
    else{
           let vatIs = vat * 0.075;
           return vatIs;
    }
}
const totalVate = calculateVat(1500);
console.log(totalVate);




// =================
console.log('=========================');


function validContact (number) {
    if (number.length === 11 && 
        typeof number === "string" &&
        !number.includes[' '] &&
        number.startsWith('01')
    ) {
     return true;
    }
    else if(number !== 'string'){
        return 'invalid';
    }
    else{
        return false;
    }
    
}
console.log(validContact('01713964805'));



console.log('==========================');


// ==========================

const number = [55, 75 , 41, 33, 0 ,87, 91 , 30 , 78];

function willSuccess(results) {
    let pass  = 0 ;
    let fail = 0 ;
    if (!Array.isArray(results)) {
        return "invalid"
    }
    for(const num of results){
        if (num >= 50) {
            pass++;
        }
        if (num < 50 ) {
            fail ++ ;
        }
    }
    if(pass > fail){
         return true ;
    }
    else{
        return false ;
    }
}
console.log(willSuccess(number));





// =============================== Problem Name: Sleep Time Calculator
const sleepTime = [1000 , 499 , 519 , 300];
function calculateSleepTime(time) {
    let totalSleepTime = 0 ;

    for (let i = 0 ; i < time.length ; i++){
         totalSleepTime = totalSleepTime + time[i];
    }
    let hour = Math.floor(totalSleepTime / 3600) ;
    let minuite = Math.floor((totalSleepTime % 3600)/60);
    let second = Math.floor(totalSleepTime % 60);
    return{
        hours : hour ,
        minuites : minuite ,
        seconds : second
    }
}
console.log(calculateSleepTime(sleepTime));


