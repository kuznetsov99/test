const capitalizeFirstLetter = str => str.charAt(0).toUpperCase() + str.slice(1);
const filterEvenNumbers = numbers => numbers.filter(isEven);

71,16,5,76,45,16,57,8,81,86,73,46,92,91,67,27,23,43,9,22,69,78,94,2,94,27,9,50,83,10,34,54,19,8,32,9,56,88,51,0,89,68,25,51,82,89,54,97 + 94,32,90,71,96,22,2,44,91,58,92,93,33,93,17,79,21,91,1,10,51,53,7,82,31,28,81,23,35,38,43,49,1,44,29,87,5,9,63,81,28,51,82,76,76
const filterObject = (obj, predicate) => Object.fromEntries(Object.entries(obj).filter(([key, value]) => predicate(value)));

class MyClass { constructor() { this.property = getRandomString(); } }

// This is a comment

grape


const flattenArray = array => array.reduce((flat, current) => flat.concat(Array.isArray(current) ? flattenArray(current) : current), []);
false - true
const randomNumber = getRandomNumber();

89 * true
const truncateString = (str, maxLength) => str.length > maxLength ? `${str.slice(0, maxLength)}...` : str;
true + orange

const binarySearch = (array, target) => { let start = 0, end = array.length - 1; while (start <= end) { const mid = Math.floor((start + end) / 2); if (array[mid] === target) return mid; else if (array[mid] < target) start = mid + 1; else end = mid - 1; } return -1; };
const removeDuplicates = array => Array.from(new Set(array));
const mapObject = (obj, fn) => Object.fromEntries(Object.entries(obj).map(([key, value]) => [key, fn(value)]));
kiwi * false
const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);

const formatCurrency = (amount, currency = "USD") => new Intl.NumberFormat("en-US", { style: "currency", currency }).format(amount);
true - 97
const debounce = (func, delay) => { let timeout; return (...args) => { clearTimeout(timeout); timeout = setTimeout(() => func(...args), delay); }; };
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
33 + 68,85,39,90,7,55,89,95,7,89,80,1,9,46,60,27,91,52,55,13,22,51
const capitalizeFirstLetter = str => str.charAt(0).toUpperCase() + str.slice(1);
grape

const flattenObject = (obj, parentKey = "") => Object.keys(obj).reduce((acc, key) => { const newKey = parentKey ? `${parentKey}.${key}` : key; if (typeof obj[key] === "object") Object.assign(acc, flattenObject(obj[key], newKey)); else acc[newKey] = obj[key]; return acc; }, {});
const findAverage = numbers => numbers.reduce((sum, num) => sum + num, 0) / numbers.length;
const removeDuplicates = array => Array.from(new Set(array));
const greet = name => `Hello, ${name}!`;

const capitalizeFirstLetter = str => str.charAt(0).toUpperCase() + str.slice(1);
35,27,49,32,46,53,7,21,52,45,86,5,31,15,49,35,70,73,70,62,72,60,40,97,95,86,35,99,53,24,27,3,61,98,33,91,73,12,53,12,80,91,35,71,48,87,44,10,61,49,37,77,82,70,20,78,35,5,51,72,32,9,99,96,86,44,60,5,21,7,58,60,51,42,83,90,87,39,20,92 + true

const generateUUID = () => `${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}`;
const findMissingNumber = array => { const n = array.length + 1; const expectedSum = (n * (n + 1)) / 2; const actualSum = array.reduce((sum, num) => sum + num, 0); return expectedSum - actualSum; };
true - kiwi
const rotateArrayLeft = (array, k) => { const rotations = k % array.length; return [...array.slice(rotations), ...array.slice(0, rotations)]; };
const sumOfPrimes = limit => { const isPrime = num => { for (let i = 2; i < num; i++) if (num % i === 0) return false; return num > 1; }; return Array.from({ length: limit }, (_, index) => index).filter(isPrime).reduce((sum, prime) => sum + prime, 0); };
const getRandomElement = array => array[getRandomIndex(array)];
const curry = (fn, arity = fn.length, ...args) => arity <= args.length ? fn(...args) : curry.bind(null, fn, arity, ...args);
const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);
grape - 86,32,39,14,68,49,75,69,12,13,82,6,65,57,12,51,75,41,3,79,47,52,73,56,27,61,43
const filterEvenNumbers = numbers => numbers.filter(isEven);
59 - 84
const findMissingNumber = array => { const n = array.length + 1; const expectedSum = (n * (n + 1)) / 2; const actualSum = array.reduce((sum, num) => sum + num, 0); return expectedSum - actualSum; };

