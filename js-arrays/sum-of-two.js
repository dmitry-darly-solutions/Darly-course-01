const arrayFirst = [], arraySecond = [], arraySum = [] ;
const elementSum = document.getElementById('element-sum');
function addElementToArrayFirst() {
    arrayFirst.push(elementSum.value);
    document.getElementById('result-sum-1').innerHTML = arrayFirst.join();
}
function addElementToArraySecond() {
    arraySecond.push(elementSum.value);
    document.getElementById('result-sum-2').innerHTML = arraySecond.join();
}   
function displayArrayAll() {
    const length = Math.max(arrayFirst.length,arraySecond.length);
    for ( let counterSum = 0; counterSum < length; counterSum++) {
        arraySum[counterSum] = (+arrayFirst[counterSum] || 0) + (+arraySecond[counterSum] || 0);
        document.getElementById('result-element-sum').innerHTML = arraySum.join();
    }
}