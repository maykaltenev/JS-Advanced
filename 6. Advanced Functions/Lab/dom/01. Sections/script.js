function create(words) {
   const divEl = document.createElement('div');
   const pEl = document.createElement('p');
   divEl.appendChild(pEl);
   pEl.textContent = words[0];
   pEl.style.display = 'none';

   divEl.addEventListener('click', (ev) => {
      ev.target.querySelector('p').style.display = '';
   });

   document.getElementById('content').appendChild(divEl);
}

function create(words) {

   const pEl = e('p', words[0]);
   pEl.style.display = 'none';
   const divEl = e('div', pEl);
   divEl.addEventListener('click', (ev)=> {
      pEl.style.display = '';
   });


   document.getElementById('content').appendChild(divEl);

   function e(type,content) {
      const result = document.createElement(type);

      if(typeof content == 'string') {
         result.textContent = content;
      } else {
          result.appendChild(content)
      }

      return result;
   }
}