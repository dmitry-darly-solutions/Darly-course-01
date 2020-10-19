const books = new Array();
let properties = new Array();

class Book {
    constructor(author, title, readingStatus) {
        this.author = author;
        this.title = title;
        this.readingStatus = readingStatus;
    }
}

function addBook() {
    const author = document.getElementById('object-reading-input-author').value;
    const title = document.getElementById('object-reading-input-title').value;
    const readingStatus = document.getElementById('object-reading-input-reading').checked;
    books.push(new Book(author, title, readingStatus));
}

function sortProperty() {
    const selectedByProperty = document.getElementById('object-reading-list').value;
    document.getElementById('result-object-reading-property').innerHTML = `${selectedByProperty}:`;
    books.forEach(function (item) {
        Object.keys(item).forEach(function (key) {
            if (key === selectedByProperty) {
                properties.push(item[key]);
            }
        });
    });
    document.getElementById('result-object-reading').innerHTML = properties.toString();
    properties = [];
}
