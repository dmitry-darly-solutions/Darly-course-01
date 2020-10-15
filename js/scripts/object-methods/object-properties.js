let student={};
function objectPropAdd() {
    let result = document.getElementById('object-prop-input').value.split(':');
    if (result.length !== 2){
        alert('please input data in format of Name:Value');
        return;
    }
    student[result[0]] = result[1];
}
function objectPropShow(){
    document.getElementById('result-object-prop')
        .innerText = Object.keys(student).toString();
}

