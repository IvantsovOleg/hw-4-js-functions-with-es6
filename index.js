// 1) Write a function splitAndMerge
function splitAndMerge (string, separator = ' ') {
    return string.replace(new RegExp(separator,'g'), '').split('').join(' ');
}

console.log(splitAndMerge('My name is John'));
// https://jsfiddle.net/zsko075y/

// 2. Write a function convert
const employee = {
    name: 'Jeremy',
    age: 24,
    role: 'Software Engineer'
};

function convert(obj) {
    const result = [];
    Object.keys(obj).map((key) => {
        result.push([key, obj[key]]);
    });
    return result;
}

console.log(convert(employee));
// https://jsfiddle.net/zsko075y/1/

// 3) Complete the method/function so that it converts dash/underscore
// delimited words into camel casing. The first word within the output
// should be capitalized only if the original word was capitalized.
function toCamelCase(string) {
    let result = '';
    string.split(/[-_]/g).map((value, index) => {
        if (!index) {
            result += value[0] + value.slice(1).toLowerCase();
        } else {
            result += value[0].toUpperCase() + value.slice(1).toLowerCase();
        }
    });
    return result;
}

console.log(toCamelCase('tHe-SteaLth-waRrrioR'));
console.log(toCamelCase('ThE_SteaLth_waRrrioR'));
// https://jsfiddle.net/pr5zb273/

// 4) Write a function that takes a sentence (string)
// and reverses each word in the sentence.
function stringReverse(string, devider = ' ') {
    let result = [];
    string.split(devider).map((value) => {
        result.push(value.split('').reverse().join(''));
    });
    return result.join(devider);
}

console.log(stringReverse(' A fun little challenge! '));
// https://jsfiddle.net/pr5zb273/1/

// 5) Write a function stringExpansion
function stringExpansion(string) {
    if (string === '') { return ''; }
    let result = '', number, letters;
    string.match(/[0-9]+[a-z]+/gi).forEach(value => {
        number = +value.match(/[0-9]+/gi)[0].substring(value.match(/[0-9]+/gi)[0].length - 1);
        letters = value.match(/[a-z]+/gi)[0];
        result += letters.repeat(number);
    });
    return result;
}

console.log(stringExpansion('3a45Bcd2d8a9'));
// https://jsfiddle.net/pr5zb273/2/

// 6) Write largest and smallest functions that returns the largest and smallest number passed like a argument.
function largest(...arg) {
    return Math.max.apply(null, arg);
}

function smallest(...arg) {
    return Math.min.apply(null, arg);
}

console.log(largest(2, 0.1, -5, 100, 3));
console.log(smallest(2, 0.1, -5, 100, 3));
// https://jsfiddle.net/ke8xhr50/

// 7) Write function transform that will transform array of numbers to array of functions that will return value from a base array.
function transform(arr) {
    let result = [];
    arr.map((value, index) => {
        result.push(function (value) {
            return () => value;
        }(arr[index]));
    });
    return result;
}

const baseArray = [10, 20, 30, 40, 50];
const newArray = transform(baseArray);
console.log(newArray[3]());
console.log(newArray[4]());
// https://jsfiddle.net/ke8xhr50/1/

// 8) Write function sum. Function expects arbitrary number of digit arguments and returns compound value of them.
function sum(...arg) {
    if(arg.length === 0){
        return 0;
    }
    function recursSum (array, key = 0) {
        if(key === array.length - 1) {
            return array[key];
        }
        return array[key] + recursSum(array, key + 1);
    }
    return recursSum(arg);
}

console.log(sum(1,3,5,7));
// https://jsfiddle.net/ke8xhr50/2/

// 9) Write function countDown. Function expects number and logs values one by one till zero with one second delay.
function countDown (number) {
    let counter = Number(number) || 0; // if number is string
    if (counter < 0) counter = 0; // if number is less than zero
    console.log(counter);
    let timer = setInterval(() => {
        if (counter <= 0) {
            clearInterval(timer);
            return;
        }
        console.log(counter - 1);
        counter--;
    }, 1000);
}

countDown(8);
// https://jsfiddle.net/ke8xhr50/3/
