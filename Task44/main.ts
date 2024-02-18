function order_sandwich(...items: string[]): void {
    console.log("Sandwich Summary:");
    if (items.length === 0) {
        console.log("No items selected. Please choose some items for your sandwich.");
    } else {
        console.log("Items selected: " + items.join(", "));
    }
    console.log();
}


order_sandwich("Bread", "Cheese", "Turkey");
order_sandwich("Bread", "Ham", "Lettuce", "Tomato");
order_sandwich(); 
