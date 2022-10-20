<?php

if (!isset($_POST['scope']) || !isset($_POST['args'])) {
  echo 'Não foi possível processar a requisição.';
  exit;
}

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
  if (!isset($args['election_id'])) return 'O ID da eleição não foi informado.';
  if (!isset($args['voter_document'])) return 'Documento do eleitor não informado';
  $electionId = $args['election_id'];
  $voterDocument = $args['voter_document'];

  $db = new Database();
  $voterQuery = $db->singleQuery('SELECT `id`, `name` FROM `citizens` WHERE `voter_document` = :voter_document AND `is_died` = false AND `is_canceled` = false', [
    'voter_document' => $voterDocument
  ]);
  if (!$voterQuery) return 'Documento do eleitor não encontrado.';
  
  $voterName = $voterQuery->name;
  $hasVotedQuery = $db->singleQuery('SELECT * FROM `citizens_votes` WHERE `election_id` = :election_id AND `citizen_id` = :citizen_id', [
    'election_id' => $electionId,
    'citizen_id' => $voterQuery->id
  ]);
  if ($hasVotedQuery) return "Eleitor $voterName ($voterDocument) já votou.";

  $votingQuery = $db->singleQuery('SELECT * FROM `voting`');
  if ($votingQuery) return 'Já há um eleitor votando neste momento.';

  $db->query('INSERT INTO `voting` (`citizen_id`) VALUES (:citizen_id)', [
    'citizen_id' => $voterQuery->id
  ]);

  return "Eleitor $voterName ($voterDocument) está liberado para votar.";
}

function vote($args) {
  if (!isset($args['election_id'])) return 'O ID da eleição não foi informado.';
  if (!isset($args['votes']) || !is_array($args['votes'])) return 'Nenhum voto foi informado.';
  $electionId = $args['election_id'];
  $votes = $args['votes'];

  $db = new Database();
  $getVoterQuery = $db->singleQuery('SELECT * FROM `voting`');
  if (!$getVoterQuery) return 'Nenhum eleitor está votando neste momento.';

  $voterId = $getVoterQuery->citizen_id;
  $voterQuery = $db->singleQuery('SELECT `name`, `voter_document`, `zone`, `section`, `state` FROM `citizens` WHERE `id` = :id', [
    'id' => $voterId
  ]);
  if (!$voterQuery) return 'Não foi possível encontrar eleitor.';

  foreach ($votes as $_ => $value) {
    $existCandidateQuery = $db->singleQuery('SELECT `id` FROM `candidates` WHERE `number` = :number', [
      'number' => $value
    ]);
    
    if (!$existCandidateQuery) return "Candidato de número $value não encontrado.";

    $db->query('INSERT INTO `elections_votes` (`election_id`, `candidate_id`, `zone`, `section`, `state`) VALUES (:election_id, :candidate_id, :zone, :section, :state)', [
      'election_id' => $electionId,
      'candidate_id' => $existCandidateQuery->id,
      'zone' => $voterQuery->zone,
      'section' => $voterQuery->section,
      'state' => $voterQuery->state
    ]);
    
    echo "Voto do candidato $value registrado.\n";
  }

  $db->query('INSERT INTO `citizens_votes` (`election_id`, `citizen_id`) VALUES (:election_id, :citizen_id)', [
    'election_id' => $electionId,
    'citizen_id' => $voterId
  ]);
  $db->query('DELETE FROM `voting`');
  
  return "O eleitor $voterQuery->name ($voterQuery->voter_document) votou.";
}