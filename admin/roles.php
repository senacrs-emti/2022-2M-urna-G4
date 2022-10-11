<?php
include('includes/IHeader.php');
include('includes/IHead.php');
include('controllers/AuthController.php');

require_once('controllers/DatabaseController.php');

$db = new Database();
$query = $db->query('SELECT id, name FROM roles');
?>

<section class='mainContainer'>
  <div class='actions'>

    <a class='new' href="actions.php?type=new&scope=candidates">Adicionar</a>
    <button class='edit'>Editar</button>

  </div>
  <table>
    <thead>
      <th>#</th>
      <th>Nome</th>
      <th>Número de candidatos</th>
      <th>Ações</th>
    </thead>
    <tbody>
      <?php
        foreach ($query as $key => $value) {
          $id = $value->id;
          $name = $value->name;
          $countQuery = $db->query('SELECT COUNT(id) as count FROM candidates WHERE role_id = :role_id',[ 'role_id' => $id ]);
          $countCandidates = $countQuery[0]->count;

          echo "<tr>
            <td>$id</td>
            <td>$name</td>
            <td>$countCandidates</td>
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