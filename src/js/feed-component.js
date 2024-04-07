async function createColumn(source) {
    const newColumn = document.createElement('div');
    newColumn.className = 'column';

    const columnHeader = document.createElement('div');
    columnHeader.className = 'column-header';
    columnHeader.textContent = source;

    const columnContent = document.createElement('div');
    columnContent.className = 'column-content';

    // Fetch data based on the selected source
    try {
        if (source === 'Sports News') {
            const response = await fetch('https://d4f7d3de-971a-4441-bcef-425aec930868-00-tc400qk9kwau.janeway.replit.dev/sportsnews');
            const data = await response.text();
            columnContent.innerHTML = data; // Set the content of the column to the fetched data
        }
        if (source === 'Github Trending') {
            const response = await fetch('https://d4f7d3de-971a-4441-bcef-425aec930868-00-tc400qk9kwau.janeway.replit.dev/github_trending');
            const data = await response.text();
            columnContent.innerHTML = data; // Set the content of the column to the fetched data
        }
    } catch (error) {
        console.error('Error fetching response:', error);
        columnContent.textContent = 'Error fetching data';
    }

    newColumn.appendChild(columnHeader);
    newColumn.appendChild(columnContent);

    return newColumn;
}