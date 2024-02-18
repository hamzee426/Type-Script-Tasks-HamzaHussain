let car: string = 'subaru';

console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru');

console.log("Is car == 'toyota'? I predict False.");
console.log(car == 'toyota');

console.log("Is car === 'Subaru'? I predict False.");
console.log(car === 'Subaru');

console.log("Is car !== 'subaru'? I predict False.");
console.log(car !== 'subaru');

console.log("Is car.length > 0? I predict True.");
console.log(car.length > 0);

console.log("Does car start with 'su'? I predict True.");
console.log(car.indexOf('su') === 0);

console.log("Does car contain 'bar'? I predict True.");
console.log(car.indexOf('bar') !== -1);

console.log("Is car.toLowerCase() == 'subaru'? I predict True.");
console.log(car.toLowerCase() == 'subaru');

console.log("Is the character at position 2 'b'? I predict True.");
console.log(car.charAt(2) == 'b');

console.log("Does car contain 'aru'? I predict True.");
console.log(car.indexOf('aru') !== -1);