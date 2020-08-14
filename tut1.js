console.log("Magic Notes App Build By Yash")
showNotes();

// when user click add button it save to localStorage

let addBtn = document.getElementById('addBtn');
addBtn.addEventListener('click', function (e) {
    let addTxt = document.getElementById('addTxt');
    let notes = localStorage.getItem('notes')
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes)
    }
    notesObj.push(addTxt.value);
    localStorage.setItem("notes", JSON.stringify(notesObj))
    addTxt.value = "";
    console.log(notesObj)
    showNotes();
})
// notes show to You notes section
function showNotes() {
    let notes = localStorage.getItem('notes')
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes)
    }
    let html = '';
    notesObj.forEach(function (element, index) {
        html +=
            `
        <div  class="mx-3 my-3 noteCard card" style="width: 18rem;">
        <div class="card-body ">
            <h5 class="card-title"> Note${index+1} </h5>
            <p class="card-text"> ${element} </p>
            <button id="${index}"onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
        </div>
    </div>
        `
    });
    let notesElem=document.getElementById('notes');
    if(notesObj.length != 0){
        notesElem.innerHTML=html;
    }
    else{
        notesElem.innerHTML=`Nothing To Show! Use Add Note Above Section`
    }

}
// Delete Note
function deleteNote(index){
    console.log("delet note",index)
    let notes=localStorage.getItem("notes")
    if(notes==null){
        notesObj=[];
    }
    else{
        notesObj=JSON.parse(notes)
    }
    notesObj.splice(index,1)
    localStorage.setItem('notes',JSON.stringify(notesObj))
    showNotes(); 
}

// Search the note
let search=document.getElementById('searchTxt')
search.addEventListener('input',function(){
    let inputVal=search.value.toLowerCase();
    console.log("input triggered",inputVal)
    let noteCards=document.getElementsByClassName('noteCard')
    Array.from(noteCards).forEach(function(element) {
     let cardTxt=element.getElementsByTagName('p')[0].innerText
     if(cardTxt.includes(inputVal)){
         element.style.display="block"
     }
     else{
         element.style.display="none"
     }
    });
})