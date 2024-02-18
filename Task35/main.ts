let animals: string[] = ["Dog", "Cat", "Rabbit"];

console.log("Names of Animals:");
for (let animal of animals) {
    console.log(animal);
}

console.log("\nStatements about Animals:");
for (let animal of animals) {
    console.log(`A ${animal.toLowerCase()} would make a great pet.`);
}

console.log("\nAny of these animals would make a great pet!");
