function parseGithub(jsonString, columnContent) {
    let columnData = JSON.parse(jsonString);

    for(let i = 0; i < columnData.length; i++) {
        columnContent.innerHTML += `
        <a href="${columnData[i].url}/${columnData[i].repo.name}">
            <div class="column-block-github">
                <h1 class="repo-name">${columnData[i].username}/${columnData[i].repo.name}</h1>
                <h3 class="repo-desc">${columnData[i].repo.description}</h3>
            </div>
        </a>
        `;
    }
}

function parseSportsNews(jsonString, columnContent) {
    let columnData = JSON.parse(jsonString);
    console.log(JSON.stringify(columnData, null, 2));
    let articles = columnData.articles;

    for(let i = 0; i < articles.length; i++) {
        let a = articles[i]; // current article (conv var)
        let t = a.title; // current title (conv var)
        columnContent.innerHTML += ` 
        <a href="${a.url}">
            <div class="column-block-sportsnew">
                <h1 class="sports-news-title">${t.substring(0, t.lastIndexOf(" - "))}</h1>
                <p class="sports-news-desc">${a.description}</p>
                <h3 class="sports-news-source">${a.source.name}</h3>
            </div>
        </a>
        `;
    }
}

function parseNewYorkTimes(jsonString, columnContent) {
    let columnData = JSON.parse(jsonString);
    let results = columnData.results;

    for(let i = 0; i < results.length; i++) {
        let result = results[i];
        columnContent.innerHTML += `
        <a href="${result.url}">
            <div class="column-block-nytimes">
                <h1>${result.title}</h1>
                <h3>${result.abstract}</h3>
                <h5>${result.byline}</h5>
            </div>
        </a>
        `;
    }
}
