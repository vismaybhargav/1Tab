document.addEventListener('DOMContentLoaded', function () {
    const addColumnBtn = document.querySelector('.add-column-btn');
    const container = document.querySelector('.container');

    addColumnBtn.addEventListener('click', function () {
        const columns = container.querySelectorAll('.column');

        // Check if the number of columns is less than 4
        if (columns.length < 4) {
            const newColumn = document.createElement('div');
            newColumn.className = 'column';
            newColumn.textContent = 'New Column';
            container.appendChild(newColumn);
        }
    });
});
