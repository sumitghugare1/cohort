document.addEventListener('DOMContentLoaded', () => {
    const addbtn = document.getElementById('add-btn');
    const todoinput = document.getElementById('todo-input');
    const todoitemscontainer = document.getElementById('todo-items-container');
    const toggleModeBtn = document.getElementById('toggle-mode-btn');
  
    
    addbtn.addEventListener('click', () => {
      const value = todoinput.value.trim();
      if (value !== '') {
        const li = document.createElement('li');
        li.innerText = value;
  
      
        const delButton = document.createElement('button');
        delButton.innerText = 'x';
        delButton.addEventListener('click', () => {
          li.remove();
        });
  
        li.appendChild(delButton);
        todoitemscontainer.appendChild(li);
        todoinput.value = '';
      }
    });
  
    
    toggleModeBtn.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
      if (document.body.classList.contains('dark-mode')) {
      
        toggleModeBtn.innerHTML = '☀️ <span></span>';
      } else {
        
        toggleModeBtn.innerHTML = '🌙 <span></span>';
      }
    });
  });
  