function lockedProfile() {
    //let profiles = document.querySelectorAll('#main .profile');
    //   let buttons = document.querySelectorAll('#main .profile button');

    let buttonsElements = Array.from(document.querySelectorAll('#main .profile button'));

    buttonsElements.forEach(el => {
        el.addEventListener('click', toggleButton);


    })

    function toggleButton(e) {
        let button = e.target;
        let profile = button.parentElement;
        let radioButton = profile.querySelector(`input:checked`);
        if (radioButton.value === 'unlock') {
            let hiddenFieldElement = button.previousElementSibling;

            hiddenFieldElement.style.display = hiddenFieldElement.style.display === 'block'
                ? 'none'
                : 'block';
            button.textContent = button.textContent === 'Show more'
                ? 'Hide it'
                : 'Show more';
        }
    }

    /*  // Attach Event listeners to buttons
      for (let index = 0; index < buttons.length; index++) {
          buttons[index].addEventListener('click', () => {
  
              let radioButtonName = `user${index + 1}Locked`
              let radioButton = document.querySelector(`input[name="user${radioButtonName}"]:checked`);
              //Get Radio Button for Profile
  
              if (radioButton.value === 'unlock') {
                
                  let hiddenFieldElement = document.getElementById(`user${index + 1}HiddenFields`);
                  hiddenFieldElement.style.display = hiddenFieldElement.style.display === 'block'
                      ? 'none'
                      : 'block';
                  buttons[index].textContent = buttons[index].textContent === 'Show more'
                      ? 'Hide it'
                      : 'Show more';
              }
          });
      }
  */
}



