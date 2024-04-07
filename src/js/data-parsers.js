function parseGithub(jsonString, columnContent) {
    let columnData = JSON.parse(jsonString);

    for(let i = 0; i < columnData.length; i++) {
        columnContent.innerHTML += `
        <a href="${columnData[i].url}/${columnData[i].repo.name}">
            <div class="column-block">
                <h3>${columnData[i].username}/${columnData[i].repo.name}</h3>
                <h5>${columnData[i].repo.description}</h5>
            </div>
        </a>
        `;
    }
}