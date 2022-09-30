<!DOCTYPE html>
<html lang="pt-br">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Urna Eletrônica</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <div class="tudo">
      <div class="urna">
        <div class="tela">
          <div class="d-1">
            <div class="d-1-left">
              <div class="d-1-1">
                <span class='titulo texto'>SEU VOTO PARA</span>
              </div>
              <div class="d-1-2">
                <span class="vereador">VEREADOR</span>
              </div>
              <div class="d-1-3">

                <div class="numero pisca" id="primeiroInput"></div>
                <div class="numero" id="segundoInput"></div>
                
              </div>
              <div class="d-1-4">
                Nome: Fulano <br />
                Partido: P <br />
                Vice: Beltrano <br />
              </div>
            </div>
            <div class="d-1-right">
              <img src="./assets/img/modelo.png" alt="bolsonaro">
            </div>
          </div>

          <div class="d-2">
            Aperte a tecla: <br />
            CONFIRMA para CONFIRMAR este voto <br />
            CORRIGE para REINICIAR este voto
          </div>
        </div>

        <div class="teclado">
          <div class="teclado-linha">
            <div class="teclado-botao border" onclick="escolherNumero('1')">1</div>
            <div class="teclado-botao border" onclick="escolherNumero('2')">2</div>
            <div class="teclado-botao border" onclick="escolherNumero('3')">3</div>
          </div>
          <div class="teclado-linha">
            <div class="teclado-botao border" onclick="escolherNumero('4')">4</div>
            <div class="teclado-botao border" onclick="escolherNumero('5')">5</div>
            <div class="teclado-botao border" onclick="escolherNumero('6')">6</div>
          </div>
          <div class="teclado-linha">
            <div class="teclado-botao border" onclick="escolherNumero('7')">7</div>
            <div class="teclado-botao border" onclick="escolherNumero('8')">8</div>
            <div class="teclado-botao border" onclick="escolherNumero('9')">9</div>
          </div>
          <div class="teclado-linha">
            <div class="teclado-botao border" onclick="escolherNumero('0')">0</div>
          </div>

          <div class="teclado-linha">
            <div class="teclado-botao botao-branco" onclick="branco()">BRANCO</div>
            <div class="teclado-botao botao-corrige" onclick="corrige()">CORRIGE</div>
            <div class="teclado-botao botao-confirma" id="botao-confirma-som" onclick='confirma()'>CONFIRMA</div>
            <audio id="confirma-som" src="./assets/audios/som-confirma.mp3"></audio>
          </div>
        </div>
      </div>
    </div>
    <script src="script.js"></script>
  </body>
</html>
