document.getElementById('accordionContainer').addEventListener('click', (event) => {
    let target = event.target;
    if (target.className == 'accordion') {
        target.nextElementSibling.classList.toggle('show');
    }
});