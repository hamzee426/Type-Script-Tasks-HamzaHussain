var list = ["Hamza", "Ali", "Hassan"];
list.forEach(function (element) {
    console.log("Hi ".concat(list, ", You are invited to Dinner."));
});
console.log("Sorry, I can't come, ".concat(list[2], " here."));
list[2] = "Zarar";
list.forEach(function (element) {
    console.log("Hi ".concat(element, ", You are invited to Dinner."));
});
console.log("Hi, I am inviting more people because i have got a big dining table.");
list.unshift("Abubakar");
var index = Math.floor(list.length / 2);
list.splice(index, 0, "Anas");
list.push("Hammad");
list.forEach(function (elem) {
    console.log("".concat(elem, ", you are invited for dinner today."));
});
