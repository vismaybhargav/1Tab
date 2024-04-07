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
                break;
            case "Github Trending":
                uri = "https://d4f7d3de-971a-4441-bcef-425aec930868-00-tc400qk9kwau.janeway.replit.dev/git_trending";
                break;
            case "The New York Times":
                uri = "https://d4f7d3de-971a-4441-bcef-425aec930868-00-tc400qk9kwau.janeway.replit.dev/nytimes";
                break;
            case "Stocks":
                uri = "https://d4f7d3de-971a-4441-bcef-425aec930868-00-tc400qk9kwau.janeway.replit.dev/stocks";
                break;
            case "Hacker News":
                uri = "https://d4f7d3de-971a-4441-bcef-425aec930868-00-tc400qk9kwau.janeway.replit.dev/hackernews";
                break;
        }

        const response = await fetch(uri);
        let jsonString = await response.text();

        switch (source) {
            case "Sports News":
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
