document.addEventListener('DOMContentLoaded',function(){
    const list=document.querySelector('#movie-list ul');
    const forms=document.forms;

    //for deleting movie
    list.addEventListener('click',(e)=>{
        if(e.target.className=='delete'){
            const li=e.target.parentElement;
            li.parentNode.removeChild(li);
        }
    });

    //add movies to the list
    const addForm=forms['add-movie'];
    addForm.addEventListener('submit',function(e){
        e.preventDefault();

        //creating elements
        const value=addForm.querySelector('input[type="text"]').value;
        if(value!="")
        {
            const li=document.createElement('li');
        const movieName=document.createElement('span');
        const deleteBtn=document.createElement('span');        
        
        //add text content
        movieName.textContent=value;
        deleteBtn.textContent='delete';
        
        //adding classes to give css style for new elements also
        movieName.classList.add('name');
        deleteBtn.classList.add('delete');
        
        //append to DOM
        li.appendChild(movieName);
        li.appendChild(deleteBtn);
        list.appendChild(li); //list=u;            
        }
        else{
            alert("Please enter the movie name");
        }
    });
});
