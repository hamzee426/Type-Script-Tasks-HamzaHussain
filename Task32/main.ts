let current_users: string[] = ["Alice", "Bob", "Charlie", "David", "Eve"];
let new_users: string[] = ["Charlie", "Frank", "John", "Mary", "Bob"];

for (let new_username of new_users) {
    let usernameExists = current_users.some(username => username.toLowerCase() === new_username.toLowerCase());

    if (usernameExists) {
        console.log(`Sorry, the username '${new_username}' is already in use. Please enter a new username.`);
    } else {
        console.log(`Congratulations! The username '${new_username}' is available.`);
    }
}
