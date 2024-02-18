var cars = [
    { brand: "Toyota", model: "Camry", year: 2022 },
    { brand: "Honda", model: "Civic", year: 2021 },
    { brand: "Ford", model: "Mustang", year: 2023 },
    { brand: "Tesla", model: "Model 3", year: 2022 },
    { brand: "BMW", model: "X5", year: 2020 }
];
console.log("List of Cars");
cars.forEach(function (cars) {
    console.log("Brand : ".concat(cars.brand, " Model : ").concat(cars.model, " Year : ").concat(cars.year));
});
