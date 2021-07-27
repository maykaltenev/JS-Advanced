function extractText() {
    const liElements = document.querySelectorAll('li');
    let elementText = [...liElements].map(e => e.textContent);
    let textArea = document.getElementById('result');
    textArea.value = elementText.join('\n');
}