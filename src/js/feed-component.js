async function createColumn(source) {
    const newColumn = document.createElement('div');
    newColumn.className = 'column';

    const columnHeader = document.createElement('div');
    columnHeader.className = 'column-header';
    columnHeader.textContent = source;

    const columnContent = document.createElement('div');
    columnContent.className = 'column-content';

    try {
        let uri = "";
        switch (source) {
            case "Sports News":
                uri = "https://d4f7d3de-971a-4441-bcef-425aec930868-00-tc400qk9kwau.janeway.replit.dev/sportsnews";
                columnHeader.className = 'column-header-sports-news';
                break;
            case "Github Trending":
                columnHeader.className = 'column-header-github';
                uri = "https://d4f7d3de-971a-4441-bcef-425aec930868-00-tc400qk9kwau.janeway.replit.dev/git_trending";
                break;
            case "The New York Times":
                uri = "https://d4f7d3de-971a-4441-bcef-425aec930868-00-tc400qk9kwau.janeway.replit.dev/nytimes";
                columnHeader.className = 'column-header-new-york-times';
                break;
            case "Stocks":
                uri = "https://d4f7d3de-971a-4441-bcef-425aec930868-00-tc400qk9kwau.janeway.replit.dev/stocks";
                break;
        }

        const response = await fetch(uri);
        let jsonString = await response.text();

        switch (source) {
            case "Sports News":
                parseSportsNews(jsonString, columnContent);
                break;
            case "Github Trending":
                parseGithub(jsonString, columnContent)
                break;
            case "The New York Times":
                break;
            case "Stocks":
                break;
        }
    } catch (error) {
        console.error('Error fetching response:', error);
        columnContent.textContent = 'Error fetching data';
    }

    newColumn.appendChild(columnHeader);
    newColumn.appendChild(columnContent);

    // Convert text into buttons
    const links = columnContent.querySelectorAll('a');
    links.forEach(link => {
        const button = document.createElement('button');
        button.textContent = link.textContent;
        button.onclick = () => {
            window.location.href = link.href;
        };
        columnContent.appendChild(button);
        columnContent.removeChild(link);
    });

    return newColumn;
}
