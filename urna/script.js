


function escolherNumero(number) {
  const pisca = document.querySelector(".pisca");
  const primeiroInput = document.querySelector("#primeiroInput").innerHTML;
  const segundoInput = document.querySelector("#segundoInput");
  const segundoInputText = document.querySelector("#segundoInput").innerHTML;

  if (primeiroInput === "") {
    document.getElementById("primeiroInput").innerHTML = number;
    pisca.classList.remove("pisca");
    segundoInput.classList.add("pisca");
  } else if (segundoInputText === "") {
    document.getElementById("segundoInput").innerHTML = number;
    pisca.classList.remove("pisca");

    const juncaoDoisNumeros = `${primeiroInput}${number}`;
    escolhaENula(juncaoDoisNumeros);
  }
}

function branco() {
  document.querySelector(".textoBranco").innerHTML = "VOTO EM BRANCO";
  const vereadorBranco = document.querySelector(".vereador");
  const divDireitaBranco = document.querySelector(".d-1-right");
  const d13Branco = document.querySelector(".d-1-3");
  const d14Branco = document.querySelector(".d-1-4");

  d14Branco.remove("d14Branco");
  vereadorBranco.remove("vereadorBranco");
  divDireitaBranco.remove("divDireitaBranco");
  d13Branco.remove("d13Branco");
  
}

function corrige() {
  document.location.reload();
}

function escolhaENula(number) {
  const divDireita = document.querySelector(".d-1-right");
 
  if (number == 72) {
    divDireita.remove("divDireita");
    document.querySelector(".d-1-4").innerHTML = "VOTO NULO";
  }
}

const button = document.querySelector("#botao-confirma-som");
button.addEventListener("click", function () {
const audio = document.querySelector("#confirma-som");
audio.play();
});


