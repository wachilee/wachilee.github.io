function readInput() {
    let numbers = [];
    while (true) {
        let number = prompt("Enter an integer (a negative integer to quit): ");
        let numint = Number(number);

        if (numint == 0) continue;

        if (!isNaN(numint) && Number.isInteger(numint) && numint > 0) {
            numbers.push(numint);
        } else if (numbers.length === 0) {
            numbers.push(0);
            return numbers;
        }
        else if (numint < 0) {
            return numbers; // Return the array if a negative integer is entered
        }
    }
}

function statistic(array_numbers) {
    array_numbers.sort();
    let min = array_numbers[0];
    let max = array_numbers[array_numbers.length - 1];
    let average = sumArray(array_numbers) / array_numbers.length;
    
    if (array_numbers[0] == 0){
        alert(`For the list that is empty, the average is ${average.toFixed(2)}, the minimmum is ${min}, and the maximum is ${max}`)
        
    }
    else{
        alert(`For the list ${array_numbers}, the average is ${average.toFixed(2)}, the minimmum is ${min}, and the maximum is ${max}`)

    }
}

function sumArray(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i += 1) {
        sum += array[i];
    }
    return sum;
}

let numbersArray = readInput();
let statistics = statistic(numbersArray);
