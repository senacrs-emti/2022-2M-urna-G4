<?php

$type = $_GET['type'];
$scope = $_GET['scope'];

if ($type == 'new') {
  switch ($scope) {
    case 'candidates':
      handleCreateNewCandidate($_POST['name'], $_POST['parties'], $_POST['roles'], $_POST['number']);
      break;
    
    default:
      # code...
      break;
  }
}

function handleCreateNewCandidate($name, $partyAcronym, $roles, $number) {
  // print($name, $partyAcronym, $roles, $number);
}

print($type);
echo "<br>";
print_r($_POST);