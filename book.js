let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    this.info = function() {
        if (read) {
            return `${title} by ${author}, ${pages} pages, read`;
        }
        else {
            return `${title} by ${author}, ${pages} pages, not yet read`;
        };
    };
};

function addBookToLibrary(myBook) {
    myLibrary.push(myBook);
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
        bookPages.textContent = myLibrary[i].pages + " pages";
        bookContainer.appendChild(bookPages);

        let bookRead = document.createElement('div');
        bookRead.className = "book-read";
        bookRead.textContent = "Book read: "  + myLibrary[i].read;
        bookContainer.appendChild(bookRead);

        bookshelf.appendChild(bookContainer);
    }
};

theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, false);
addBookToLibrary(theHobbit);

theIdiot = new Book("The Idiot", "Fyodor Dostoevsky", 768, true)
addBookToLibrary(theIdiot);

theGreatGatsby = new Book("The Great Gatsby", "F. Scott Fitzgerald", 110, true);
addBookToLibrary(theGreatGatsby);

console.log(myLibrary);

displayBooks();