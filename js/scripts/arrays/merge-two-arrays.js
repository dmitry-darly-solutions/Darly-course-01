const arrayFirstMerge = [], arraySecondMerge = [];
const elementSumMerge = document.getElementById('element-merge');
function addElementFirstMerge() {
    arrayFirstMerge.push(elementSumMerge.value);
    document.getElementById('result-merge-1').innerHTML = arrayFirstMerge.join();
}
function addElementSecondMerge() {
    arraySecondMerge.push(elementSumMerge.value);
    document.getElementById('result-merge-2').innerHTML = arraySecondMerge.join();
}
function displayArrayMerge() {
    let arrayMerge = arrayFirstMerge.concat(arraySecondMerge);
    arrayMerge = arrayMerge.filter((item,index) => {
        return arrayMerge.indexOf(item)===index;
    });
    document.getElementById('result-merge').innerHTML = arrayMerge.join();
}