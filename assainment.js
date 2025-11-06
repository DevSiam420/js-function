// ------calculate the cash out charge -----
// charge is = 1.75%

function cashOut (money) {
    if(typeof money !== 'number'){
       return "invalid"
    }
    else{
        const charge = money * 0.0175 ;
        return charge ;
    }
}
const chargeIs = cashOut(2000);
console.log(chargeIs); 



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
    for (const vote of votes){
        if(vote === 'mango'){
            mangoVote ++ ;
        }
        else if (vote === 'banana') {
            bananaVote++;
        }
    }
    if (mangoVote < bananaVote ) {
        return 'banana';
    }
    else if(mangoVote > bananaVote){
        return 'mango';
    }
    else{
        return 'draw';
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

 

