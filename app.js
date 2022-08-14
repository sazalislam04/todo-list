// Delete button
    const deleteItems = document.getElementsByClassName('delete-btn');
    for(const delteItem of deleteItems){
        delteItem.addEventListener('click', function(e){
            const listItems = document.getElementById('list-items');
            listItems.removeChild(e.target.parentNode);
        })
    }

document.getElementById('add-btn').addEventListener('click', function(e){
    const inputField = document.getElementById('input-field');
    const inputText = inputField.value;
    inputField.value = '';
    // console.log(inputText);
    const listItems = document.getElementById('list-items');
    const item = document.createElement('p');
    item.innerText = inputText;
    item.classList.add('item');
    const deleteBtn = document.createElement('button');
    // deleteBtn; 
    deleteBtn.addEventListener('click', function(e) {
        const deleteItem = document.getElementById('list-items');
        deleteItem.removeChild(e.target.parentNode);
    })
    deleteBtn.innerText = "X";
    deleteBtn.classList.add('delete-btn');
    deleteBtn.setAttribute('id', 'delete-btn');
    item.appendChild(deleteBtn);
    listItems.appendChild(item);
});


