let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
};

function addBookToLibrary(myBook) {
    myLibrary.push(myBook);
};

function removeBookFromLibrary(event) {
    for (let i = 0; i < myLibrary.length; i++) {
        if ((myLibrary[i].title + " " + myLibrary[i].author) == event.target.id) {
            myBook = myLibrary[i];
            break;
        };
    };
    let idx = myLibrary.indexOf(myBook);
    myLibrary.splice(idx, 1);
    bookshelf.textContent = '';
    displayBooks();    
};

function changeReadStatus(event) {
    for (let i = 0; i < myLibrary.length; i++) {
        if (("read" + myLibrary[i].title + " " + myLibrary[i].author) == event.target.id) {
            myBook = myLibrary[i];
            break;
        };
    };
    let idx = myLibrary.indexOf(myBook);
    myLibrary[idx].read = !myLibrary[idx].read;
};

const bookshelf = document.getElementById('bookshelf');

function displayBooks() {
    library_length = myLibrary.length;
    for (let i = 0; i < library_length; i++) {
        let bookContainer = document.createElement('div');
        bookContainer.className = "book-container";

        let bookTitle = document.createElement('div');
        bookTitle.className = "book-title";
        bookTitle.textContent = myLibrary[i].title;
        bookContainer.appendChild(bookTitle);

        let bookAuthor= document.createElement('div');
        bookAuthor.className = "book-author";
        bookAuthor.textContent = myLibrary[i].author;
        bookContainer.appendChild(bookAuthor);

        let bookPages = document.createElement('div');
        bookPages.className = "book-pages";
        if (myLibrary[i].pages == "1"){
            bookPages.textContent = myLibrary[i].pages + " page";
        }
        else {
            bookPages.textContent = myLibrary[i].pages + " pages";
        }
        bookContainer.appendChild(bookPages);

        let bookRead = document.createElement('div');
        bookRead.className = "book-read";
        bookRead.textContent = "Read";
        let readSwitch = document.createElement('input');
        readSwitch.id = "read" + myLibrary[i].title + " " + myLibrary[i].author;
        readSwitch.className = "bookshelf-checkbox";
        readSwitch.type = "checkbox";
        readSwitch.checked = myLibrary[i].read;
        bookRead.appendChild(readSwitch);
        bookContainer.appendChild(bookRead);

        let removeBook = document.createElement('button');
        removeBook.id = myLibrary[i].title + " " + myLibrary[i].author;
        removeBook.className = "remove-book";
        removeBook.textContent = "Remove";
        bookContainer.appendChild(removeBook);

        bookshelf.appendChild(bookContainer);

        let changeReadListener = document.getElementById(readSwitch.id);
        changeReadListener.addEventListener("click", changeReadStatus);

        let removeBookListener = document.getElementById(removeBook.id);
        removeBookListener.addEventListener("click", removeBookFromLibrary);
    }
};

function openNewBook() {
    document.getElementById("blank").style.height = "100vh";
    document.getElementById("popupForm").style.display = "block";
  };

const submitBook = document.getElementById("submit-button");
submitBook.addEventListener("click", submitNewBook);

function submitNewBook(event) {
    event.preventDefault();
    if ((document.getElementById("title").value == '') ||  (document.getElementById("author").value == '')) {
        return alert('Please include book title and author');
    };
    newTitle = document.getElementById("title").value;
    newAuthor = document.getElementById("author").value;
    newPages = +document.getElementById("pages").value;
    newRead = document.querySelector("#read").checked;
    console.log(newTitle);
    newBook = new Book(newTitle, newAuthor, newPages, newRead);
    console.table(newBook);
    addBookToLibrary(newBook);
    bookshelf.textContent = '';
    displayBooks();
    document.getElementById("blank").style.height = "0vh";
    document.getElementById("popupForm").style.display = "none";
};
  
function cancelNewBook() {
    document.getElementById("blank").style.height = "0vh";
    document.getElementById("popupForm").style.display = "none";
  };