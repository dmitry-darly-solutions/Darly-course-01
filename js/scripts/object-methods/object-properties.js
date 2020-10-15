$(function(){
    let student={};
    $('#object-prop-add').click(function (){
        let result = $('#object-prop-input').val().split(':');
        if (result.length !== 2){
            alert('please input data in format of Name:Value');
            return;
        }
        student[result[0]] = result[1];
    });
    $('#object-prop-show').click(function () {
        $('#result-object-prop').text(Object.keys(student));
    });
});
