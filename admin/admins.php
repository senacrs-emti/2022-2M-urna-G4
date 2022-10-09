<?php
include('includes/IHeader.php');
include('includes/IHead.php');
include('controllers/AuthController.php');

require_once('controllers/DatabaseController.php');

$db = new Database();
$query = $db->query('SELECT id, username, is_admin as isAdmin FROM users');
?>

<section class='mainContainer'>
  <div class='actions'>
    <button class='new'>Adicionar</button>
    <button class='edit'>Editar</button>
  </div>
  <table>
    <thead>
      <th>#</th>
      <th>Nome</th>
      <th>Administrador</th>
      <th>Ações</th>
    </thead>
    <tbody>
      <?php
        foreach ($query as $key => $value) {
          $id = $value->id;
          $username = $value->username;
          $isAdmin = $value->isAdmin ? 'Sim' : 'Não';

          echo "<tr>
            <td>$id</td>
            <td>$username</td>
            <td>$isAdmin</td>
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