const button = document.querySelector('#botao-confirma-som');
button.addEventListener('click', function () {
  const audio = document.querySelector('#confirma-som');
  audio.play();
});

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
  } else {
    document.getElementById('segundoInput').innerHTML = number;
    pisca.classList.remove('pisca');
  }
}

function branco() {
  const vereador = document.querySelector('.vereador');
  const divDireita = document.querySelector('.d-1-right');
  const d13 = document.querySelector('.d-1-3');
  const d14 = document.querySelector('.d-1-4');

  vereador.remove('vereador');
  divDireita.remove('divDireita');
  d13.remove('d13');
  d14.remove('d14');

  document.querySelector('.texto').innerHTML = 'VOTO EM BRANCO';
}

function corrige() {
  const corrige = document.querySelector('.botao-corrige');
}
