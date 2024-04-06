const sampleUserData = JSON.stringify({
    "name": "Bobby Bobbington",
    "subscribed-feeds": [
        "github",
        "reddit",
    ]
});

function getUserDataFromJSON(path) {
    //TODO: Implement local storage JSON parsing
}

function buildFrontend(userData) {
    let userConfig = JSON.parse(sampleUserData);
}
