const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

button.addEventListener('click', function() {
    const chapterName = input.value.trim();
  
    if (chapterName !== '') {
      const listItem = document.createElement('li');
      const deleteButton = document.createElement('button');
  
      listItem.textContent = chapterName;
      deleteButton.textContent = '❌';
      deleteButton.classList.add('delete');
  
      listItem.appendChild(deleteButton);
      list.appendChild(listItem);
  
      deleteButton.addEventListener('click', function() {
        listItem.remove();
      });
  
      input.focus();
      input.value = '';
    }
  });