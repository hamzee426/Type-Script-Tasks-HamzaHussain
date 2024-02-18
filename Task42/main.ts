function show_magicians(magicians: string[]): void {
    for (let magician of magicians) {
        console.log(magician);
    }
}

function make_great(magicians: string[]): string[] {
    return magicians.map(magician => magician + " the Great");
}


let magicians: string[] = ["David Copperfield", "Houdini", "Derren Brown", "Penn and Teller"];


let great_magicians = make_great(magicians);


show_magicians(great_magicians);
