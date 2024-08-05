document.addEventListener('DOMContentLoaded', () => {
    const addItemButton = document.getElementById('add-item-btn');
    const itemList = document.getElementById('item-list');

    addItemButton.addEventListener('click', () => {
        const itemInput = document.getElementById('item');
        const itemName = itemInput.value.trim();

        if (itemName !== '') {
            const listItem = document.createElement('li');
            listItem.textContent = itemName;
            itemList.appendChild(listItem);
            itemInput.value = '';
        }
    });
});
