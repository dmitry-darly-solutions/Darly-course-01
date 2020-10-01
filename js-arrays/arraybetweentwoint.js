let arrayBetween = [], arrayResult = [];
let fromPosBetween, toPosBetween;
function createArrayBetween() {
    arrayBetween = document.getElementById('element-between').value;
    arrayBetween = (arrayBetween.toString()).split(',');
    fromPosBetween = arrayBetween[0];
    toPosBetween = arrayBetween[1];
    fromPositionToAnotherBetween(fromPosBetween,toPosBetween);
    displayArrayBetween();
}
function fromPositionToAnotherBetween(fromPositionBetween,toPositionBetween) {
    for(let i = fromPositionBetween,m = 0; i <= toPositionBetween;i++,m++ ){
        arrayResult[m]=i;
    }
}
function displayArrayBetween() {
    document.getElementById('array-between').innerHTML = arrayResult.join();
}