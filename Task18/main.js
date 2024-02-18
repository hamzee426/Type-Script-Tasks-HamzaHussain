var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var placesToVisit = ["Tokyo", "Paris", "Machu Picchu", "New York City", "Great Barrier Reef"];
console.log("Original Array", placesToVisit);
var sortedArr = __spreadArray([], placesToVisit, true).sort();
console.log("Sorted Array", sortedArr);
console.log("Original Array", placesToVisit);
console.log("Sorted Reverse  Array", sortedArr.reverse());
console.log("Original Array", placesToVisit);
console.log("Original Reverse Array", placesToVisit.reverse());
console.log("Original Reverse Reverse Array", placesToVisit.reverse());
console.log("Original Sorted Array", placesToVisit.sort());
console.log("Original Sorted Reverse Array", placesToVisit.reverse());
