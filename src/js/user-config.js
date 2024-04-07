let idCount = 0;

document.addEventListener('DOMContentLoaded', function() {
    let userData = getUserData();
    for(let i = 0; i < userData.subscribedFeeds.length; i++) {
        selectedWebsites.push(userData.subscribedFeeds[i]);
    }
});

/** * Generates UserData json object and places it into the localStorage for future use. <br><b>
 * Make sure that the userData hasn't already been created by this point
 * @param id id of the user
 * @param subscribedFeeds a string array of the feeds that they have subscribed to
 */
function createUserData(id, subscribedFeeds) {
    let userData = {
        "id": id,
        "subscribedFeeds": subscribedFeeds
    }
    let userString = JSON.stringify(userData);
    localStorage.setItem("onetab-userdata", userString);
    idCount++;
    return userData;
}

/**
 * Gets the user data from the local storage if it is available, else generates it.a
 */
function getUserData() {
    let user = JSON.parse(localStorage.getItem("onetab-userdata") == null
        ? createUserData(idCount, []) : localStorage.getItem("onetab-userdata"));
    console.log(user);
    return user;
}