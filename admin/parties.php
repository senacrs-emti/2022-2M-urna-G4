<?php
include('includes/IHeader.php');
include('includes/IHead.php');
include('controllers/AuthController.php');

require_once('controllers/DatabaseController.php');

$db = new Database();

$query = $db->query('
  SELECT parties.id, parties.name, parties.website_url
  FROM parties
');
?>


<section class='main'>
  <button class='new'>Adicionar registro</button>
  <table>
    <thead>
      <th>#</th>
      <th>Nome</th>
      <th>Número de candidatos</th>
      <th>Web site</th>
      <th>Ações</th>
    </thead>
    <tbody>
      <?php
        foreach ($query as $key => $value) {
          $id = $value->id;
          $name = $value->name;
          $website_url = $value->website_url;
          $candidates = $db->singleQuery('SELECT COUNT(id) as count FROM candidates WHERE party_id = :party_id', ['party_id' => $value->id]);

          echo "<tr>
            <td>$id</td>
            <td>$name</td>
            <td>$candidates->count</td>
            <td><a href='$website_url'>$website_url</a></td>
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