const button = document.querySelector('#botao-confirma-som')
button.addEventListener('click', function(){
    const audio = document.querySelector('#confirma-som')
    audio.play()
})


// Verificar através de ler o que está escrito no primeiro campo se ele está populado (empty)
// Se o campo não estiver populado, quando chamar a fun escolherNumero, popular este campo.
// Caso já esteja populado, adicionar o valor no segundo campo. 


function escolherNumero(number) {
    const pisca = document.querySelector('.pisca');
    const primeiroInput = document.querySelector('#primeiroInput').innerHTML;
    const segundoInput = document.querySelector('#segundoInput');

    if (primeiroInput === '') {
        document.getElementById('primeiroInput').innerHTML = number;
        pisca.classList.remove('pisca');
        segundoInput.classList.add('pisca');
        console.log('aq');
    } else {
        document.getElementById('segundoInput').innerHTML = number;
        pisca.classList.remove('pisca');
        console.log('aq2');
    }
}
