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
        let shelveBook = document.createElement('div');
        shelveBook.textContent = myLibrary[i].title;
        bookshelf.appendChild(shelveBook);
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