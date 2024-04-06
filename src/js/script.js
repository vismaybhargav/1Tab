document.addEventListener('DOMContentLoaded', function () {
    const dropdownContent = document.querySelector('.dropdown-content');
    const container = document.querySelector('.container');
    let selectedWebsites = [];

    dropdownContent.addEventListener('click', function (event) {
        if (event.target.tagName === 'A') {
            const source = event.target.dataset.source;
            if (!selectedWebsites.includes(source) && selectedWebsites.length < 4) {
                selectedWebsites.push(source);
                const newColumn = createColumn(source);
                container.appendChild(newColumn);
            }
        } else if (event.target.classList.contains('remove-btn')) {
            const columnToRemove = event.target.parentNode.dataset.source;
            removeColumn(columnToRemove);
        }
    });

    function createColumn(source) {
        const newColumn = document.createElement('div');
        newColumn.className = 'column';

        const columnHeader = document.createElement('div');
        columnHeader.className = 'column-header';
        columnHeader.textContent = source;

        const columnDivider = document.createElement('div');
        columnDivider.className = 'column-divider'; // Add class for styling

        const columnContent = document.createElement('div');
        columnContent.className = 'column-content';
        columnContent.textContent = 'Content for ' + source; // You can change this as per your requirement

        newColumn.appendChild(columnHeader);
        newColumn.appendChild(columnDivider); // Append the divider
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
