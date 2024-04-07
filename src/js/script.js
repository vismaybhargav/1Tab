document.addEventListener('DOMContentLoaded', function () {
    const dropdownContent = document.querySelector('.dropdown-content');
    const container = document.querySelector('.container');
    let selectedWebsites = [];

    dropdownContent.addEventListener('click', async function (event) {
        if (event.target.tagName === 'A') {
            const source = event.target.dataset.source;
            if (!selectedWebsites.includes(source) && selectedWebsites.length < 4) {
                selectedWebsites.push(source);
                const newColumn = await createColumn(source);
                container.appendChild(newColumn);
            }
        } else if (event.target.classList.contains('remove-btn')) {
            const columnToRemove = event.target.parentNode.dataset.source;
            removeColumn(columnToRemove);
        }
    });

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
                const response = await fetch('https://d4f7d3de-971a-4441-bcef-425aec930868-00-tc400qk9kwau.janeway.replit.dev/git_trending');
                const data = await response.text();
                columnContent.innerHTML = data; // Set the content of the column to the fetched data
            }
            if (source === 'The New York Times') {
                const response = await fetch('https://d4f7d3de-971a-4441-bcef-425aec930868-00-tc400qk9kwau.janeway.replit.dev/nytimes');
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

    function removeColumn(source) {
        const columns = container.querySelectorAll('.column');
        columns.forEach(function (column) {
            if (column.querySelector('.column-header').textContent === source) {
                column.remove();
                const index = selectedWebsites.indexOf(source);
                if (index !== -1) {
                    selectedWebsites.splice(index, 1);
                }
            }
        });
    }
});
