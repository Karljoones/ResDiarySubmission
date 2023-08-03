/**
 * Group an array of numbers into N arrays
 * @param {int[]} array - input array
 * @param {int} segments - number of groups to split array into
 * @returns groupedArray - array split into N arrays
 */
const groupArrayElements = (array, segments) => {
    if (segments <= 0) return "Groups should be a positive number";

    const groupedArray = [];
    const segmentSize = Math.ceil(array.length / segments);

    for (var i = 0; i < array.length; i += segmentSize) {
        groupedArray.push(array.slice(i, i + segmentSize));
    }

    return groupedArray;
}

/**
 * Handle the submission of the form
 * @param {Event} e - form submitted event
 */
const handleSubmit = (e) => {
    e.preventDefault();

    const result = handleArraySegmentation(document.getElementById("array-input").value, document.getElementById("group-input").value);

    document.getElementById("output").innerText = JSON.stringify(result);
}

/**
 * Handle the segmentation of the array, including the parsing of the input array and the grouping of elements.
 * This returns the grouped array based off the variables passed into it.
 * @param {string} stringInput - user input, used to parse into an array of numbers
 * @param {int} segments - to segment the array
 * @returns the grouped array
 */
const handleArraySegmentation = (stringInput, segments) => {
    const inputArray = parseArrayInput(stringInput);
    const result = groupArrayElements(inputArray, segments)

    console.log(result);
    return result;
}

/**
 * Parse the input into an array of numbers, removing NaN values
 * @param {string} input from the form submission
 * @returns int[] - input split and converted into an array of numbers
 */
const parseArrayInput = (input) => {
    const array = input.split(",");

    // convert string into numbers
    for (var i = 0; i < array.length; i++) {
        array[i] = +array[i];
    }

    return array.filter(function (value) { return !Number.isNaN(value); });
}

// Display the output if used in a browser
try {
    const inputForm = document.getElementById("input-form");
    inputForm && inputForm.addEventListener("submit", handleSubmit);
} catch (e) {
    console.log("Continue via command line");
}

// Handle command line input
if (process.argv) {
    if (process.argv.length < 4) {
        console.log("2 arguments required: array and segments");
    } else {
        handleArraySegmentation(process.argv[2], process.argv[3]);
    }
}