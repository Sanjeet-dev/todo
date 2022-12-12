window.onload = function() {
    const todoForm = document.querySelector('#todo-list form');
    const todoList = document.querySelector('#todo-list ul');
    const count=document.querySelector(".count");
    let counting=0
  
    // handle form submission
    todoForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = todoForm.querySelector('input[type="text"]');
      const todo = input.value;
  
      //create a new list
      if(todo.length!==0){
      todoList.innerHTML+=`<li class="todo"><span class="check material-symbols-outlined">
      radio_button_unchecked
      </span>${todo}</li>`
      counting++;
      count.textContent=counting+" tasks left";
    }
  
      //clear input field
      input.value = '';
    });
  
    //handle completed todo
  
    todoList.addEventListener('click', (e) => {
      if (e.target.tagName === 'LI') {
        if(e.target.classList!=="completed"){
          e.target.classList.add("completed");
          if(counting>0)
            counting--; // preventing task to go in negative
      count.textContent=counting+" tasks left";


        }
        
      }
    });
  }
  