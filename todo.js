function addTask(){
    const newTask = document.createElement('li');
    const taskList = document.getElementById('list');
    taskList.appendChild(newTask);
    newTask.textContent = document.getElementById('inputtask').value;
    document.getElementById('inputtask').value = '';
    deltask(newTask)
  }
  
  function deltask(newTask){
    const delbtn = document.createElement('button');
    delbtn.textContent = "Delete";
    newTask.appendChild(delbtn);
    delbtn.onclick = function(){
      newTask.remove(); 
    }
  }
  