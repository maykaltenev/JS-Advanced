function focused() {

    Array.from(document.querySelectorAll('input')).forEach(i => {
        i.addEventListener('focus', onFocus);

        i.addEventListener('blur', onBlur);
    });
    function onFocus(ev) {
        ev.target.parentNode.className = 'focused';
    }

    function onBlur(ev) {

        ev.target.parentNode.className = ''

    }
}

    // select all input fields
    // add listener for focus event
    // on focus => select input parent => apple class 'focused'
