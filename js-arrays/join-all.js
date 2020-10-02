let separator;
const array = [];
function addElementToArray() {
    array.push(document.getElementById('element-join').value);
    displayArray();
}
function addSeparator() {
    separator = document.getElementById('element-join').value;
}
function displayArray() {
    document.getElementById('result-element-join').innerHTML = array.join(separator);
}