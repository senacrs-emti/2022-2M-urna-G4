<?php

$scope = $_POST['scope'];
$args = $_POST['args'];

switch ($scope) {
  case 'origin-mesario':
    // TODO: Verificar se o documento do eleitor é válido, dizer que é ele que está votando.
    mesario($args);
    break;

  case 'origin-vote':
    // TODO: Verificar se os votos (array) é valido e computar os votos, posteriormente, confirmar que o eleitor voltou e liberar a maquina do mesário.
    break;
}

function mesario($args) {
  if (!$args['voter_document']) return 'Documento do eleitor não informado.';

  // Verificar se o documento do eleitor é válido e dizer que ele está votando, pensar se vai ser uma propriedade (votando) ou se vai ser uma tabela no banco.
}