class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    };
};

class Library {
    constructor() {
        this.myLibrary = [];
        this.bookshelf = document.getElementById('bookshelf');
        this.booksInLibrary = 0;
        this.submit = document.getElementById("submit-button");
        this.submit.addEventListener("click", this.submitBook.bind(this));
    };

    addBook(myBook) {
        this.myLibrary.push(myBook);
        this.booksInLibrary++;
    };

    displayBooks() {
        for (let idx = 0; idx < this.booksInLibrary; idx++) {
            let bookContainer = document.createElement('div');
            bookContainer.className = "book-container";
    
            let bookTitle = document.createElement('div');
            bookTitle.className = "book-title";
            bookTitle.textContent = this.myLibrary[idx].title;
            bookContainer.appendChild(bookTitle);
    
            let bookAuthor= document.createElement('div');
            bookAuthor.className = "book-author";
            bookAuthor.textContent = this.myLibrary[idx].author;
            bookContainer.appendChild(bookAuthor);
    
            let bookPages = document.createElement('div');
            bookPages.className = "book-pages";
            if (this.myLibrary[idx].pages == "1"){
                bookPages.textContent = this.myLibrary[idx].pages + " page";
            }
            else {
                bookPages.textContent = this.myLibrary[idx].pages + " pages";
            }
            bookContainer.appendChild(bookPages);
    
            let bookRead = document.createElement('div');
            bookRead.className = "book-read";
            bookRead.textContent = "Read";
            let readSwitch = document.createElement('input');
            readSwitch.id = "read" + this.myLibrary[idx].title + " " + this.myLibrary[idx].author;
            readSwitch.className = "bookshelf-checkbox";
            readSwitch.type = "checkbox";
            readSwitch.checked = this.myLibrary[idx].read;
            bookRead.appendChild(readSwitch);
            bookContainer.appendChild(bookRead);
    
            let removeBook = document.createElement('button');
            removeBook.id = this.myLibrary[idx].title + " " + this.myLibrary[idx].author;
            removeBook.className = "remove-book";
            removeBook.textContent = "Remove";
            bookContainer.appendChild(removeBook);
    
            this.bookshelf.appendChild(bookContainer);
    
            let changeReadListener = document.getElementById(readSwitch.id);
            changeReadListener.addEventListener("click", this.changeReadStatus.bind(this));
    
            let removeBookListener = document.getElementById(removeBook.id);
            removeBookListener.addEventListener("click", this.removeBook.bind(this));
        };
    };

    removeBook(event) {
        let bookToRemove;
        for (let idx = 0; idx <  this.booksInLibrary; idx++) {
            if ((this.myLibrary[idx].title + " " + this.myLibrary[idx].author) == event.target.id) {
                bookToRemove = idx;
                break;
            };
        };
        this.myLibrary.splice(bookToRemove, 1);
        this.booksInLibrary--;
        this.bookshelf.textContent = '';
        this.displayBooks();    

    };

    changeReadStatus(event) {
        let bookToChange;
        for (let idx = 0; idx < this.booksInLibrary; idx++) {
            if (("read" + this.myLibrary[idx].title + " " + this.myLibrary[idx].author) == event.target.id) {
                bookToChange = idx;
                break;
            };
        };
        this.myLibrary[bookToChange].read = !this.myLibrary[bookToChange].read;
    };

    registerBook() {
        document.getElementById("blank").style.height = "100vh";
        document.getElementById("popupForm").style.display = "block";
    };

    submitBook(event) {
        event.preventDefault();
        if ((document.getElementById("title").value == '') ||  (document.getElementById("author").value == '')) {
            return alert('Please include book title and author');
        };
        let newTitle = document.getElementById("title").value;
        document.getElementById("title").value = '';
        let newAuthor = document.getElementById("author").value;
        document.getElementById("author").value = '';
        let newPages = +document.getElementById("pages").value;
        let newRead = document.querySelector("#read").checked;
        document.querySelector("#read").checked = false;
        let newBook = new Book(newTitle, newAuthor, newPages, newRead);
        this.addBook(newBook);
        this.bookshelf.textContent = '';
        this.displayBooks();
        document.getElementById("blank").style.height = "0vh";
        document.getElementById("popupForm").style.display = "none";
    };

    cancelRegistration() {
        document.getElementById("title").value = '';
        document.getElementById("author").value = '';
        document.querySelector("#read").checked = false;
        document.getElementById("blank").style.height = "0vh";
        document.getElementById("popupForm").style.display = "none";
      };


};

theLibrary = new Library();
