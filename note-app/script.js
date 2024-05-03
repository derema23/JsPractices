const notesContainer = document.querySelector('.notes-container');
const createBtn = document.querySelector('.btn');

let notes = document.querySelectorAll(".input-box");

function showNotes(){
    notesContainer.innerHTML = localStorage.getItem("notes");
}

// fonction pour stocker les notes dans le local Storage
function updateStorage(){
    localStorage.setItem("notes", notesContainer.innerHTML);
}

showNotes();

// creer un paragraphe de note
createBtn.addEventListener('click', ()=>{
    let inputBox = document.createElement('p');
    let img = document.createElement('img');

    inputBox.className= 'input-box';
    inputBox.setAttribute('contenteditable','true');
    img.src = 'img/delete.png';

    notesContainer.appendChild(inputBox).appendChild(img);
})

// supprimer une note 
notesContainer.addEventListener('click', function(e){
    if(e.target.tagName === 'IMG'){
        if(confirm('voulez-vous supprimer ?')){
            e.target.parentElement.remove();
        }
        updateStorage();
    }  // & enregistrer une note dans le localStorage 
    else if(e.target.tagName === "P"){
        notes = document.querySelectorAll('.input-box');
        notes.forEach(nt =>{
            nt.onkeyup = function(){
                updateStorage();
            }
        })
    }
})


// INSERER DES SAUTS A LA LIGNE AVEC LA TOUCHE ENTER

document.addEventListener('keydown', event =>{
    if(event.key === 'Enter'){
        document.execCommand('insertLineBreak');
        event.preventDefault();
    }
})