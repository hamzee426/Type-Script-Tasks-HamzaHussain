var current_users = ["Alice", "Bob", "Charlie", "David", "Eve"];
var new_users = ["Charlie", "Frank", "John", "Mary", "Bob"];
var _loop_1 = function (new_username) {
    var usernameExists = current_users.some(function (username) { return username.toLowerCase() === new_username.toLowerCase(); });
    if (usernameExists) {
        console.log("Sorry, the username '".concat(new_username, "' is already in use. Please enter a new username."));
    }
    else {
        console.log("Congratulations! The username '".concat(new_username, "' is available."));
    }
};
for (var _i = 0, new_users_1 = new_users; _i < new_users_1.length; _i++) {
    var new_username = new_users_1[_i];
    _loop_1(new_username);
}
