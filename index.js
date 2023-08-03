/**
 * Group an array of numbers into N arrays
 * @param {Number[]} array - input array
 * @param {Number} segments - number of groups to split array into
 * @returns groupedArray - array split into N arrays
 */
const groupArrayElements = (array, segments) => {
    if (segments <= 0) return "Groups should be a positive number";

    const groupedArray = [];
    const arrayLength = array.length;
    const segmentSize = Math.ceil(arrayLength / segments);

    let index = 0;
    while (index < arrayLength) {
        groupedArray.push(array.slice(index, index + segmentSize));
        index += segmentSize;
    }

    return groupedArray;
}

/**
 * Handle the submission of the form
 * @param {Event} e - form submitted event
 */
const handleSubmit = (e) => {
    e.preventDefault();

    const inputArray = parseArrayInput(document.getElementById("array-input").value);

    const result = groupArrayElements(inputArray, document.getElementById("group-input").value)

    console.log(result);
    document.getElementById("output").innerText = JSON.stringify(result);
}

/**
 * Parse the input into an array of numbers, removing NaN values
 * @param {string} input from the form submission
 * @returns Number[] - input split and converted into an array of numbers
 */
const parseArrayInput = (input) => {
    const array = input.split(",");

    // convert string into numbers
    for (var i = 0; i < array.length; i++) {
        array[i] = +array[i];
    }

    return array.filter(function (value) { return !Number.isNaN(value); });
}

const inputForm = document.getElementById("input-form");
inputForm && inputForm.addEventListener("submit", handleSubmit);