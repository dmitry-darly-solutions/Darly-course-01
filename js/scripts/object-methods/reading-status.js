$(function(){
    let books=new Array();
    let properties = new Array();
    class Book {
        constructor(author, title, readingStatus) {
            this.author = author;
            this.title = title;
            this.readingStatus = readingStatus;
        }
    }
    $('#object-reading-add').click(function (){
        let author = $('#object-reading-input-author').val();
        let title = $('#object-reading-input-title').val();
        let readingStatus = $('#object-reading-input-reading').is(':checked');
        books.push(new Book(author,title,readingStatus));
    });
    $('#object-reading-show').click(function () {
        let selectedByProperty = $('#object-reading-list').val();
        $('#result-object-reading-property').text(selectedByProperty+':');
        books.forEach(function (item){
            Object.keys(item).forEach(function(key) {
                if(key===selectedByProperty) {
                    properties.push(item[key]);
                }
            });
        });
        $('#result-object-reading').text( properties);
        properties=[];
    });
});