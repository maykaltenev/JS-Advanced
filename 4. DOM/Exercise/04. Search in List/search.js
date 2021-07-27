function search() {
   //1. Select elements
   let searchElement = document.getElementById('searchText');

   let allLiElements = Array.from(document.querySelectorAll('#towns li'));

   //2. Parse search text
   let searchText = searchElement.value;

   //3 Main logic
   //a get Li elements

   allLiElements.forEach(el => {
      el.style.fontWeight = 'normal';
      el.style.textDecoration = 'none';

   });
   //b. clear
   //c. filter all li's which contain the search text
   //d. bold and underline matches lis
   let filterLis = allLiElements
      .filter(x => x.textContent.includes(searchText));

   let mappedLis = filterLis.forEach(x => {
      x.style.fontWeight = 'bold';
      x.style.textDecoration = 'underline';

      //e. show in resultedDiv
   });
   let resultDiv = document.getElementById('result');
   resultDiv.textContent = `${filterLis.length} matches found`;
}
