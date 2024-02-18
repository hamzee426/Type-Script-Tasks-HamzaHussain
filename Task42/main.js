function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
function make_great(magicians) {
    return magicians.map(function (magician) { return magician + " the Great"; });
}
var magicians = ["David Copperfield", "Houdini", "Derren Brown", "Penn and Teller"];
var great_magicians = make_great(magicians);
show_magicians(great_magicians);
