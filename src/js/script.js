var selectedWebsites = [];

document.addEventListener('DOMContentLoaded', function () {
    const dropdownContent = document.querySelector('.dropdown-content');
    const container = document.querySelector('.container');
    selectedWebsites = [];

    dropdownContent.addEventListener('click', async function (event) {
        if (event.target.tagName === 'A') {
            const source = event.target.dataset.source;
            if (!selectedWebsites.includes(source) && selectedWebsites.length < 4) {
                selectedWebsites.push(source);
                getUserData().subscribedFeeds.push(source);
                const newColumn = await createColumn(source);
                container.appendChild(newColumn);
            }
        } else if (event.target.classList.contains('remove-btn')) {
            const columnToRemove = event.target.parentNode.dataset.source;
            removeColumn(columnToRemove);
        }
    });

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


