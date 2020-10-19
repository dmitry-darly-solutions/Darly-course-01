function showDOM() {
    document.getElementById('check-result').innerText = document.documentElement.innerHTML;
}
function checkIsDOMElement() {
    const inputValue = document.getElementById('check-input').value;
    const getElementById = document.getElementById(inputValue);
    const getElementsByName = document.getElementsByName(inputValue);
    const getElementsByClassName = document.getElementsByClassName(inputValue);
    const getElementsByTagName = document.getElementsByTagName(inputValue);
    let element = 0;
    if (getElementById !== null) element++;
    if (getElementsByName.length) element += getElementsByName.length;
    if (getElementsByClassName.length) element += getElementsByClassName.length;
    if (getElementsByTagName.length) element += getElementsByTagName.length;
    if (!element) return;
    if (element)
        alert(`${inputValue} is in DOM ${element > 1 ? 'times' : 'time'} `);
}