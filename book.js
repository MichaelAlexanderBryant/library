function book(title, author, pages, read) {
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

theHobbit = new book("The Hobbit", "J.R.R. Tolkien", 295, false);
console.log(theHobbit.info());
