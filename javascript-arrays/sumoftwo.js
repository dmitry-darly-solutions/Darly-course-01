let counterFirst = 0, counterSecond = 0;
let arrayFirst = [], arraySecond = [], arraySum = [] ;
const elementSum = document.getElementById('element-sum');
function addElementToArrayFirst() {
    arrayFirst[counterFirst] = elementSum.value;
    document.getElementById('result-sum-1').innerHTML = arrayFirst.join();
    counterFirst++;
}
function addElementToArraySecond() {
    arraySecond[counterSecond] = elementSum.value;
    document.getElementById('result-sum-2').innerHTML = arraySecond.join();
    counterSecond++;
}
function displayArrayAll() {
    let length = (arrayFirst.length >= arraySecond.length) ? arrayFirst.length : arraySecond.length;
    for ( let counterSum = 0; counterSum < length; counterSum++) {
        arraySum[counterSum] = (+arrayFirst[counterSum] || 0) + (+arraySecond[counterSum] || 0);
        document.getElementById('result-element-sum').innerHTML = arraySum.join();
    }
}