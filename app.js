let addBtn = document.querySelector('#addBtn');
let main = document.querySelector('#main');




addBtn.addEventListener('click' , ()=>{
    
    addNote();

})

function saveNote(){

    let notes = document.querySelectorAll('#note textarea');
    // console.log(notes)
      
   let data = [];
   
   notes.forEach(element => {
      
      data.push(element.value)
        
   });

//    console.log(data)
  
 if(data.length === 0){
      
    localStorage.removeItem('notes')
     
 }
 else{
     
     localStorage.setItem('notes' , JSON.stringify(data));  //setItem takes key value to store so notes is key it can be anythingand by it we can get value in future
}


   


}





function addNote(text = ""){
      
    let ele = document.createElement('div');
    ele.setAttribute('id' , 'note');
    
     ele.innerHTML = `
     <div id="tool">
     <i class="save fa-solid fa-floppy-disk"></i>
     <i class="trash fa-solid fa-trash"></i>
      </div>
    <textarea id="textA" placeholder="start writing your new note here...">${text}</textarea>`
     

    
    ele.querySelector('.trash').  addEventListener('click' ,()=>{
        
        ele.remove();
        saveNote();  //so it can save which ever notes left everytime we remove a note
        
    })
    
    ele.querySelector('.save').addEventListener('click',()=>{
        saveNote();
    })


    ele.querySelector('textarea').addEventListener('focusout',()=>{ //automatically saving when clicking outside the note 
          saveNote();
    })

    
    main.appendChild(ele);
    saveNote();  //here cause it store a place its storage the moment its created
  
 }


//self calling function by which we can see the data which is in LS at entering point of page

(
    function() {
        const lsNotes = JSON.parse(localStorage.getItem("notes"));
        if (lsNotes === null) {
            addNote()
        } else {
            lsNotes.forEach(
                (lsNote) => {
                    addNote(lsNote)
                }
            )
        }

    }
)()