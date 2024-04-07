function parseGithub(jsonString, columnContent) {
    let columnData = JSON.parse(jsonString);

    for(let i = 0; i < columnData.length; i++) {
        columnContent.innerHTML += `
            <div class="column-block">
                <h1>${columnData[i].username}/${columnData[i].repo.name}</h1>
                <h3>${columnData[i].repo.description}</h3>
            </div>
        `;
    }
}