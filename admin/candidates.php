<?php
include('includes/IHeader.php');
include('includes/IHead.php');
include('controllers/AuthController.php');

require_once('controllers/DatabaseController.php');

$db = new Database();
$query = $db->query('
  SELECT 
    candidates.name, candidates.number, parties.website_url as party_url, parties.name as party_name, roles.name as role_name
  FROM candidates
  INNER JOIN parties
  ON candidates.party_id = parties.id

  INNER JOIN roles 
  ON candidates.role_id = roles.id

  ORDER BY candidates.role_id ASC, candidates.number ASC
');
?>

<section class='mainContainer'>
  <div class='actions'>
    <a class='new' href="new.php?scope=candidates&identifier=1">Adicionar</a>
    <button class='edit'>Editar</button>
  </div>
  
  <table>
    <thead>
      <th>Nome</th>
      <th>Cargo</th>
      <th>Número</th>
      <th>Partido</th>
      <th>Ações</th>
    </thead>
    <tbody>
      <?php
        foreach ($query as $key => $value) {
          $name = $value->name;
          $role = $value->role_name;
          $number = $value->number;
          $party = $value->party_name;
          $party_url = $value->party_url;

          echo "<tr>
            <td>$name</td>
            <td>$role</td>
            <td>$number</td>
            <td>$party</td>
            <td>
              <button>
                Deletar
              </button>
            </td>
          </tr>";
        }
      ?>
    </tbody>
  </table>
</section>