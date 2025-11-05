const numbers = [12, 5, 8, 3, 19, 1, 25];

function findMin(array) {
    let min = array[0]; 

    for (const num of array) {
        if (num < min) {
            min = num;
        }
    }

    return min;
}

const minIs = findMin(numbers);
console.log("the min number is :-", minIs);
