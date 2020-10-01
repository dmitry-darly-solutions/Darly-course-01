let moveCounter = 0;
let arrayBefore = [], arrayAfter = [], arrayFromTo = [] ;
let fromPos, toPos, element;
function addElementToArrayMove() {
    arrayBefore[moveCounter] = document.getElementById('element-move').value;
    displayArrayMoveBefore();
    moveCounter++;
}
function moveElement() {
    arrayFromTo = document.getElementById('element-move').value;
    arrayFromTo = (arrayFromTo.toString()).split(',');
    fromPos = arrayFromTo[0];
    toPos = arrayFromTo[1];
    fromPositionToAnother(fromPos,toPos);
    displayArrayMoveAfter();
}
function fromPositionToAnother(fromPosition,toPosition) {
    if(fromPosition<0) {
        fromPosition = arrayBefore.length - Math.abs(fromPosition);
    }
    if(toPosition<0) {
        toPosition = arrayBefore.length - Math.abs(toPosition);
    }
    console.log(fromPosition,toPosition);
    element = arrayBefore[fromPosition];
    arrayAfter = arrayBefore.slice();
    arrayAfter.splice(fromPosition,1);
    arrayAfter.splice(toPosition,0,element);
    console.log(element);
}
function displayArrayMoveBefore() {
    document.getElementById('move-before').innerHTML = arrayBefore.join();
}
function displayArrayMoveAfter() {
    document.getElementById('move-after').innerHTML = arrayAfter.join();
}