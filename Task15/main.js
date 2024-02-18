var list = ["Hamza", "Ali", "Hassan"];
list.forEach(function (element) {
    console.log("Hi ".concat(list, ", You are invited to Dinner."));
});
console.log("Sorry, I can't come, ".concat(list[2], " here."));
list[2] = "Zarar";
list.forEach(function (element) {
    console.log("Hi ".concat(element, ", You are invited to Dinner."));
});
