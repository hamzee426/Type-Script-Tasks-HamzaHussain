var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function carInformation(manufacturer, modelName) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var carObject = {
        "Manufacturer": manufacturer,
        "ModelName": modelName
    };
    for (var _a = 0, options_1 = options; _a < options_1.length; _a++) {
        var option = options_1[_a];
        carObject = __assign(__assign({}, carObject), option);
    }
    return carObject;
}
var carDetails = carInformation("Toyota", "Camry", { "Color": "Blue" }, { "Year": 2022 }, { "Features": ["Sunroof", "Navigation"] });
console.log(carDetails);
