let properties = new Array();
function addObject() {
    const newObject = {};
    const result = document.getElementById('reverse-input').value.split(',');
    result.forEach(element=>{
        const property = element.split(':');
        console.log(property[0],property[1]);
    });
    //Object.defineProperty(newObject,property name, {
    //value:propertyValue,
    //writable: false
    // });
    //console.log(result);
    //Object.defineProperty()
}
function copyReverse() {
    const selectedByProperty = document.getElementById('object-reading-list').value;
    document.getElementById('result-object-reading-property').innerHTML = `${selectedByProperty}:`;
    books.forEach(function (item){
        Object.keys(item).forEach(function(key) {
            if(key===selectedByProperty) {
                properties.push(item[key]);
            }
        });
    });
    document.getElementById('result-object-reading').innerHTML= properties.toString();
    properties=[];
}