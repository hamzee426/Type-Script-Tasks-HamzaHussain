function order_sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Sandwich Summary:");
    if (items.length === 0) {
        console.log("No items selected. Please choose some items for your sandwich.");
    }
    else {
        console.log("Items selected: " + items.join(", "));
    }
    console.log();
}
order_sandwich("Bread", "Cheese", "Turkey");
order_sandwich("Bread", "Ham", "Lettuce", "Tomato");
order_sandwich();
