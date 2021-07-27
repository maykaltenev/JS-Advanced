function generateReport() {
    let thElements = document.querySelectorAll('th');
    let thBodyElements = document.querySelectorAll('tbody tr');
    let outputElement = document.getElementById('output');

    let infoThElements = [];

    let result = [];

    Array.from(thElements).forEach(th => {
        if (th.children[0].checked) {
            infoThElements.push(th.textContent.toLowerCase().trim());
        } else {
            infoThElements.push(false);
        }
    });

    Array.from(thBodyElements).forEach(trEl => {
        let rowObj = {};
        Array.from(trEl.children).forEach((el, i) => {
            if (infoThElements[i]) {
                let currEll = infoThElements[i];
                rowObj[currEll] = el.textContent;
            }
        });
        result.push(rowObj);
    });
    outputElement.textContent = JSON.stringify(result);
}