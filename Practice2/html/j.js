window.onload = dobind;

function dobind() {
    const button = document.getElementById('button');

    function buttonok() {
        button.addEventListener('click', () => {
            button.innerHTML = 'not ok';
        });
    }

    buttonok();
}