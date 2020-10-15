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
        let result = $('#object-reading-input').val().split(':');
        books.push(new Book(result[0],result[1],result[2]));
    });
    $('#object-reading-show').click(function () {
        $('#result-object-reading-property').text($('#object-reading-input').val()+':');
        books.forEach(function (item){
            Object.keys(item).forEach(function(key) {
                if(key===$('#object-reading-input').val()) {
                    properties.push(item[key]);
                }
            });
        });
        $('#result-object-reading').text(properties);
        properties=[];
    });
});