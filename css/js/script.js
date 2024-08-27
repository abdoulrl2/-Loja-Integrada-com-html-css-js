document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.produto button');

    buttons.forEach(function(button) {
        button.addEventListener('click', function() {
            alert('Produto adicionado ao carrinho!');
        });
    });
});
