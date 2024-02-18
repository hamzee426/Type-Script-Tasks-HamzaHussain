var list = ["Abubakar", "Hamza", "Anas", "Ali", "Zarar", "Hammad"];
var size = list.length;
console.log("Sorry Guys, We can only invite two people.");
for (var i = 0; i < size; ++i) {
    if (list.length <= 2) {
        var name_1 = list.pop();
        console.log("".concat(name_1, ", you are invited."));
    }
    else {
        var name_2 = list.pop();
        console.log("".concat(name_2, ", you are not invited."));
    }
}
