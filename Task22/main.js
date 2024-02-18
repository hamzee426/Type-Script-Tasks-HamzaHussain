var fruits = ["Apple", "Banana", "Orange", "Grapes", "Mango"];
var indexError = 10;
console.log("Trying to access an element at index 10:", fruits[indexError]);
if (indexError >= 0 && indexError < fruits.length) {
    console.log("Corrected access at index 10:", fruits[indexError]);
}
else {
    console.log("Index out of bounds. Please correct the index.");
}
