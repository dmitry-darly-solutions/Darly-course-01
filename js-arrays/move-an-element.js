const arrayBefore = [];
let arrayAfter = [];
function addElementToArrayMove() {
    arrayBefore.push(document.getElementById('element-move').value);
    displayArrayMoveBefore();
}
function moveElement() {
    const arrayFromTo = (document.getElementById('element-move').value).split(',');
    const fromPosition = arrayFromTo[0];
    const toPosition = arrayFromTo[1];
    if(isNaN(fromPosition)||isNaN(toPosition)) {
        return alert(`${fromPosition} or  ${toPosition} is not a number`);
    }
    fromPositionToAnother(fromPosition,toPosition);
    displayArrayMoveAfter();
}
function fromPositionToAnother(fromPosition,toPosition) {
    if(fromPosition<0) {
        fromPosition = arrayBefore.length - Math.abs(fromPosition);
    }
    if(toPosition<0) {
        toPosition = arrayBefore.length - Math.abs(toPosition);
    }
    arrayAfter = arrayBefore.slice();
    arrayAfter.splice(fromPosition,1);
    arrayAfter.splice(toPosition,0,arrayBefore[fromPosition]);
}
function displayArrayMoveBefore() {
    document.getElementById('move-before').innerHTML = arrayBefore.join();
}
function displayArrayMoveAfter() {
    document.getElementById('move-after').innerHTML = arrayAfter.join();
}