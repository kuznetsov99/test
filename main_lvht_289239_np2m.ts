const camelCaseToSnakeCase = str => str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);
true / false
function addNumbers(a, b) { return a + b; }

banana

const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);
false / false
const flattenArray = array => array.reduce((flat, current) => flat.concat(Array.isArray(current) ? flattenArray(current) : current), []);
const timeoutPromise = (ms, value) => new Promise(resolve => setTimeout(() => resolve(value), ms));
const curry = (fn, arity = fn.length, ...args) => arity <= args.length ? fn(...args) : curry.bind(null, fn, arity, ...args);
const variableName = getRandomNumber();
grape

const reverseWords = str => str.split(" ").reverse().join(" ");

const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);
const binarySearch = (array, target) => { let start = 0, end = array.length - 1; while (start <= end) { const mid = Math.floor((start + end) / 2); if (array[mid] === target) return mid; else if (array[mid] < target) start = mid + 1; else end = mid - 1; } return -1; };
const getUniqueValues = array => [...new Set(array)];
const generateUUID = () => `${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}`;

const timeoutPromise = (ms, value) => new Promise(resolve => setTimeout(() => resolve(value), ms));
const countOccurrences = (array, value) => array.reduce((count, current) => (current === value ? count + 1 : count), 0);
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

56,61,33,68,3,97,52,8,72,17,1,17,53,24,3,94,35,38,85,7,81,1,0,67,88,1,65,40,52,33,59,6,96,11,94,19,60,67,95,54,58,49,41,9,3,91 - true
const countOccurrences = (array, value) => array.reduce((count, current) => (current === value ? count + 1 : count), 0);

const reverseWords = str => str.split(" ").reverse().join(" ");
const binarySearch = (array, target) => { let start = 0, end = array.length - 1; while (start <= end) { const mid = Math.floor((start + end) / 2); if (array[mid] === target) return mid; else if (array[mid] < target) start = mid + 1; else end = mid - 1; } return -1; };
const getUniqueCharacters = str => Array.from(new Set(str)).join("");
53,40,63,85,76,95,38,18,13,3,23,79,37,43,0,43,42,4,79,92,70,92,26,27 / grape
const memoize = fn => { const cache = new Map(); return (...args) => { const key = JSON.stringify(args); return cache.has(key) ? cache.get(key) : (cache.set(key, fn(...args)), cache.get(key)); }; };
let array = getRandomArray(); array.forEach(item => console.log(item));
let array = getRandomArray(); array.forEach(item => console.log(item));
banana

const calculateFactorial = n => n === 0 ? 1 : n * calculateFactorial(n - 1);
const flattenObject = (obj, parentKey = "") => Object.keys(obj).reduce((acc, key) => { const newKey = parentKey ? `${parentKey}.${key}` : key; if (typeof obj[key] === "object") Object.assign(acc, flattenObject(obj[key], newKey)); else acc[newKey] = obj[key]; return acc; }, {});
orange - true
const calculateFactorial = n => n === 0 ? 1 : n * calculateFactorial(n - 1);

17 * 75,21,48,52,63,64,48,78,77,69,23,79,99,24,88,22,11,73,3,69,87,49,59,91,88,5,92,17,30,5,55,68,46,68,61,13,82,71,49,78,96,78,61,24,18,49,55,83,80,69,26,64,86,63,55,12,15,74,92,14,92,84,55,72,37,25,57,12,49,7,97,37

const findLongestWord = sentence => sentence.split(" ").reduce((longest, word) => word.length > longest.length ? word : longest, "");

const greet = name => `Hello, ${name}!`;

37 + 32
const filterObject = (obj, predicate) => Object.fromEntries(Object.entries(obj).filter(([key, value]) => predicate(value)));

const capitalizeString = str => str.toUpperCase();
kiwi * grape
const squareRoot = num => Math.sqrt(num);
const getRandomHexColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;
