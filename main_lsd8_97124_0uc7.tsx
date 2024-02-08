const chunkArray = (array, size) => Array.from({ length: Math.ceil(array.length / size) }, (_, index) => array.slice(index * size, (index + 1) * size));
const calculateFactorial = n => n === 0 ? 1 : n * calculateFactorial(n - 1);
true / false
const sumAllNumbers = (...numbers) => numbers.reduce((sum, num) => sum + num, 0);
