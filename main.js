let myLibrary = [];


    var addBookForm = document.getElementById('addBookForm');
    
    let Title = addBookForm.elements.item(0).value;
    let Author = addBookForm.elements.item(1).value;
    let Pages = addBookForm.elements.item(2).value;
    let IsRead = addBookForm.elements.item(3).value;
    let Note = addBookForm.elements.item(4).value;

    let libraryBook = document.getElementById("libraryBook");

    //let LBTitle = document.getElementById("libraryBookTitle").innerHTML;
    //let LBAuthor = document.getElementById("libraryBookAuthor").innerHTML;

function grabInputs(){
    Title = addBookForm.elements.item(0).value;
    Author = addBookForm.elements.item(1).value;
    Pages = addBookForm.elements.item(2).value;
    IsRead = addBookForm.elements.item(3).value;
    Note = addBookForm.elements.item(4).value;
}

function Book(title, author, pages, isRead, note){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
    this.note = note;
    
}

function resetFormInputs(){
    addBookForm.reset();
    /*
    Title = "";
    Author = "";
    Pages = "";
    IsRead = "";
    Note = "";
    */
}

Book.prototype.displayInfo = function(){
    console.log("Title: " + title + " Author: " + author + " Page Count: " + pages + "Read it?" + isRead);
}



function addBookToLibrary(){
    
    grabInputs();
    newBookAdded = new Book(Title, Author, Pages, IsRead, Note);
    myLibrary.push(newBookAdded);

    console.log(myLibrary.length);
    console.log(`Title: ${myLibrary[(myLibrary.length-1)].title}, Author: ${myLibrary[(myLibrary.length-1)].author}`);
    //console.log(`Title: ${myLibrary[0].title}, Author: ${myLibrary[0].author}`);
    console.log(myLibrary);
    resetFormInputs(Title, Author, Pages, IsRead, Note);
    //console.log(Title);
    //console.log("Book added to library.");
    //console.log("This book is called: " + Title + " and it was written by " + Author);
    //updateLibrary(myLibrary);
    addBookDisplay(myLibrary);
}

function updateLibrary(myLibrary){
    
    LBTitle = myLibrary[0].title;
    LBAuthor = myLibrary[0].author;
    document.getElementById("libraryBookTitle").innerText = LBTitle;
    document.getElementById("libraryBookAuthor").innerText = LBAuthor;

    console.log(LBTitle);
}

// create a function to append a new book to the display list

function addBookDisplay(myLibrary){

    const container = document.querySelector("#libraryDisplay");

    clearLibrary(container);

    for (i = 0; i < myLibrary.length; i++){

    const bookToAdd = document.createElement("div");
    bookToAdd.classList.add("bookCard");
    //bookToAdd.textContent = "This is a Book Card for: " + myLibrary[i].title;
    bookToAdd.textContent = "Title: " + "'" + myLibrary[i].title + "'" + " Author: " + myLibrary[i].author;
    container.appendChild(bookToAdd);
    }
}

function clearLibrary(parent){
    while (parent.firstChild){
        parent.removeChild(parent.firstChild);
    }
}