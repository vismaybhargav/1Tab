let idCount = 0;

/**
 * Generates UserData json object and places it into the localStorage for future use. <br><b>
 * Make sure that the userData hasn't already been created by this point
 * @param name name of the user
 * @param subscribedFeeds a string array of the feeds that they have subscribed to
 */
function createUserData(name, subscribedFeeds) {
    let userData = {
        "name": name,
        "subscribed-feeds": subscribedFeeds
    }
    localStorage.setItem("onetab-userdata", JSON.stringify(userData));
}

/**
 * Gets the user data from the local storage if it is available, else generates it.a
 */
function getUserData() {
    if (localStorage.getItem("onetab-userdata") != null) {
        return JSON.parse(localStorage.getItem("onetab-userdata"));
    } else {
        createUserData(idCount, []);
        idCount++;
    }
}