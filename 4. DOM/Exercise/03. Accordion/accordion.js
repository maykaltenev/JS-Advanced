function toggle() {
    //1. Select elements
    let button = document.getElementsByClassName('button')[0];

    let textDiv = document.getElementById('extra');
    let a = document.getElementsByClassName('button');


    //2. Parse data

    //3. show/hide text and change button text;

    button.textContent = button.textContent === 'More' ? ' Less' : 'More';

    textDiv.style.display = textDiv.style.display === 'block' ? 'none' : 'block'


    //4. show hide content
}