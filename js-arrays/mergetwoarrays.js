let counterFirstMerge = 0, counterSecondMerge = 0;
let arrayFirstMerge = [], arraySecondMerge = [], arrayMerge = [] ;
const elementSumMerge = document.getElementById('element-merge');
function addElementFirstMerge() {
    arrayFirstMerge[counterFirstMerge] = elementSumMerge.value;
    document.getElementById('result-merge-1').innerHTML = arrayFirstMerge.join();
    counterFirstMerge++;
}
function addElementSecondMerge() {
    arraySecondMerge[counterSecondMerge] = elementSumMerge.value;
    document.getElementById('result-merge-2').innerHTML = arraySecondMerge.join();
    counterSecondMerge++;
}
function displayArrayMerge() {
    arrayMerge = arrayFirstMerge.concat(arraySecondMerge);
    arrayMerge = arrayMerge.filter((item,index) => {
        return arrayMerge.indexOf(item)===index;
    });
    document.getElementById('result-merge').innerHTML = arrayMerge.join();
}