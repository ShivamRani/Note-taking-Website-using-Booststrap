shownotes();
let text = document.getElementById('addText');
let addtitle = document.getElementById('addTitle');
let addNote = document.getElementById('addBtn');
addNote.addEventListener("click", function (e) {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    let myObj = {
        title: addtitle.value,
        text: text.value
    };
    notesObj.push(myObj);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    text.value = "";
    addtitle.value = "";
    shownotes();
})
function shownotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    let html = "";
    notesObj.forEach(function (element, index) {
        html += `<div class="card my-2 mx-2" style="width: 18rem; background-color:rgb(222, 226, 230);">
        <div class="card-body d-flex flex-column">
          <h5 class="card-title">${element.title}</h5>
          <p class="card-text">${element.text}</p>
          <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-primary mt-auto" style="max-width:111.137px
          ;background-color:rgb(3, 40, 48);">Delete Note</button>
          </div>
      </div>`;
    });
    let notesElem = document.getElementById("notes");
    if (notesObj.length != 0) {
        notesElem.innerHTML = html;
    }
    else {
        notesElem.innerHTML = `You haven't added any note. Use the above section to add note.`
    }
}
function deleteNote(index) {
    console.log(`${index} Note is deleted`);
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    shownotes();
}