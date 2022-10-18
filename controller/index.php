<?php

$scope = $_POST['scope'];
$args = $_POST['args'];

require_once('../admin/controllers/DatabaseController.php');

switch ($scope) {
  case 'origin-mesario':
    echo mesario($args);;
    break;

  case 'origin-vote':
    echo vote($args);
    break;
}

function mesario($args) {
  if (!$args['voter_document']) return 'Documento do eleitor não informado.';

  $voterDocument = $args['voter_document'];

  $db = new Database();
  $voterQuery = $db->singleQuery('SELECT id, `name`, has_voted FROM citizens WHERE voter_document = :voter_document AND is_deleted = false', [
    'voter_document' => $voterDocument
  ]);

  if (!$voterQuery) return 'Documento do eleitor não encontrado.';
  if ($voterQuery->has_voted) return 'Eleitor já votou.';

  $votingQuery = $db->singleQuery('SELECT * FROM voting');
  if ($votingQuery) return 'Já há um eleitor votando neste momento';

  $db->query('INSERT INTO voting (citizen_id) VALUES (:citizen_id)', [
    'citizen_id' => $voterQuery->id
  ]);

  $voterName = $voterQuery->name;
  return "Eleitor $voterName ($voterDocument) está liberado para votar.";
}

function vote($args) {
  $votes = $args['votes'];
  if (!$votes || !is_array($votes)) return 'Nenhum voto foi informado.';

  $db = new Database();
  $getVoterQuery = $db->singleQuery('SELECT * FROM voting');

  if (!$getVoterQuery) return 'Nenhum eleitor está votando neste momento.';

  $voterId = $getVoterQuery->citizen_id;
  $voterQuery = $db->singleQuery('SELECT `name`, voter_document FROM citizens WHERE id = :id', [
    'id' => $voterId
  ]);

  if (!$voterQuery) return 'Erro ao encontrar eleitor.';

  foreach ($votes as $key => $value) {
    $existCandidateQuery = $db->singleQuery('SELECT id FROM candidates WHERE `number` = :number', [
      'number' => $value
    ]);
    
    if (!$existCandidateQuery) return "Candidato de número $value não encontrado.";

    $db->query('INSERT INTO votes (candidate_id) VALUES (:candidate_id)', [
      'candidate_id' => $existCandidateQuery->id
    ]);
    
    echo "Voto do candidato $value registrado.\n";
  }

  $db->query('UPDATE citizens SET has_voted = true WHERE id = :id', [
    'id' => $voterId
  ]);
  $db->query('DELETE FROM voting');
  return "O eleitor $voterQuery->name ($voterQuery->voter_document) votou.";
}