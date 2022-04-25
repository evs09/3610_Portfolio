let notes = document.getElementById("notes");
let title = document.getElementById("notesTitle");
let btn = document.getElementById("clear-btn");

notes.oninput = function() {
    localStorage.setItem('noteText', notes.value);

}

title.oninput = function(){
    localStorage.setItem('noteTitle', title.value);

}

if(localStorage.getItem('noteText') != ""){
    notes.value = localStorage.getItem('noteText');
}

if(localStorage.getItem('noteTitle') != ""){
    title.value = localStorage.getItem('noteTitle');
}

btn.onclick = function() {
    notes.value = "";
    title.value = "";
    localStorage.setItem('noteText', "");
    localStorage.setItem('noteTitle', "");
}