function deleteByEmail() {
    let email = document.querySelector('input[name="email"]').value;

    let rows = Array.from(document.querySelectorAll('tbody tr'));

    let isDeleted = false;
    for (const row of rows) {

        if (row.children[1].textContent == email) {
            row.parentNode.removeChild(row);
            isDeleted = true;
            document.getElementById('result').textContent = 'Deleted.';
        }
    }
    if(isDeleted !== true) {
        document.getElementById('result').textContent = 'Not found.'
    }
}