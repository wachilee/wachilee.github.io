function readInput() {
    let numbers = [];
    while (true) {
        let number = prompt("Enter an integer (a negative integer to quit): ");
        let numint = Number(number);

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
    return [min, max, average];
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


alert(`For the list ${numbersArray} the average is ${statistics[2].toFixed(2)}, the minimmum is ${statistics[0]}, and the maximum is ${statistics[1]}`)
