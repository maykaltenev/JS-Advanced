function addItem() {
    // select input field

    let text = document.getElementById('newItemText').value;
    // read input value

    const liElement = document.createElement('li');

    //create new <li> element
    liElement.textContent = text;
    //set ext of new element to input value
    //select list from page

    const ulElement = document.getElementById('items');

    ulElement.appendChild(liElement);
    document.getElementById('newItemText').value = '';
}