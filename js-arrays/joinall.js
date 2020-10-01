let separator;
let counterSeparate = 0;
let array = [];
function addElementToArray() {
    array[counterSeparate] = document.getElementById('element-join').value;
    displayArray();
    counterSeparate++;
}
function addSeparator() {
    separator = document.getElementById('element-join').value;
}
function displayArray() {
    document.getElementById('result-element-join').innerHTML = array.join(separator);
}