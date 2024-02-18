function carInformation(manufacturer: string, modelName: string, ...options: { [key: string]: any }[]): { [key: string]: any } {
    let carObject: { [key: string]: any } = {
        "Manufacturer": manufacturer,
        "ModelName": modelName
    };

    
    for (let option of options) {
        carObject = { ...carObject, ...option };
    }

    return carObject;
}


let carDetails = carInformation("Toyota", "Camry", { "Color": "Blue" }, { "Year": 2022 }, { "Features": ["Sunroof", "Navigation"] });


console.log(carDetails);
