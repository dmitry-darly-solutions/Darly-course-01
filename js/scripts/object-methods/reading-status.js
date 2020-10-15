let books=new Array();
let properties = new Array();
class Book {
    constructor(author, title, readingStatus) {
        this.author = author;
        this.title = title;
        this.readingStatus = readingStatus;
    }
}
function addBook() {
    let author = document.getElementById('object-reading-input-author').value;
    let title = document.getElementById('object-reading-input-title').value;
    let readingStatus = document.getElementById('object-reading-input-reading').checked;
    console.log(readingStatus);
    books.push(new Book(author,title,readingStatus));
}
function sortProperty() {
    let selectedByProperty = document.getElementById('object-reading-list').value;
    document.getElementById('result-object-reading-property').innerHTML = `${selectedByProperty}:`;
    books.forEach(function (item){
        Object.keys(item).forEach(function(key) {
            if(key===selectedByProperty) {
                properties.push(item[key]);
            }
        });
    });
    document.getElementById('result-object-reading').innerHTML= properties.toString();
    properties=[];
}
