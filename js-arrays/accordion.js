document.getElementById('accordionContainer').addEventListener("click",doSmth);
function doSmth(event) {
    let target = event.target;
    if (target.className == 'accordion') {
        console.dir(target);
        highlight(target.nextElementSibling);
    }
}
function highlight(node) {
    node.classList.toggle('show');
}