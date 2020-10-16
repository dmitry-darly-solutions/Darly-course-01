const newObject = {};
const reversedObject = {};
let newObjectString = '';
function addObject() {
    newObjectString = '';
    const result = document.getElementById('reverse-input').value.split(',');
    result.forEach(element=>{
        const property = element.split(':');
        Object.defineProperty(newObject,property[0],{
            value:property[1],
            writable:true,
            enumerable:true
        });
    });
    createString(newObject);
    document.getElementById('reverse-before').innerText = newObjectString;
}
function copyReverse() {
    newObjectString = '';
    Object.keys(newObject).forEach(key => {
        Object.defineProperty(reversedObject,newObject[key], {
            value:key,
            writable:true,
            enumerable:true
        })
    });
    createString(reversedObject);
    document.getElementById('reverse-after').innerText = newObjectString;
}
function createString(object){
    Object.keys(object).forEach(key=>{
        newObjectString += `[key:${key} - val:${object[key]}]`;
    });
}