function make_shirt(size: string = "Large", message: string = "I love TypeScript"): void {
    console.log(`Summary: Size - ${size}, Message - "${message}"`);
}

make_shirt();
make_shirt("Medium");
make_shirt("Small", "Custom Message");
