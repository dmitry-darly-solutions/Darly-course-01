const arrayResult = [];
function createArrayBetween() {
    const arrayBetween = (document.getElementById('element-between').value).split(',');
    fromPositionToAnotherBetween(arrayBetween[0],arrayBetween[1]);
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