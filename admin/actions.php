<?php
include('includes/IHeader.php');
include('includes/IHead.php');
include('controllers/AuthController.php');

print_r($_GET);

if (!isset($_GET['type']) || !isset($_GET['scope'])) {
  header('location: index.php');
  exit();
}

$type = $_GET['type'];
$scope = $_GET['scope'];

if ($type != 'new') {
  // $db = new Database();
  // $query = $db->query('SELECT * FROM :table WHERE id = :id', array(':table' => $scope, ':id' => $type));
}
?>

<link rel="stylesheet" href="/admin/styles/actions.css">

<section class='editContainer'>
  <span>Editando candidato <b>Ciro Gaymer</b></span>

  <form action="" method="POST">

    <div class="grid">
      <div class="grid-item">
        <label for="name">Nome</label>
        <input type="text" name="name" id="name" value="Ciro Gaymer">
      </div>

      <div class="grid-item">
        <label for="email">Email</label>
        <input type="email" name="email" id="email" value="">
      </div>

      <div class="grid-item">
        <label for="email">Email</label>
        <input type="email" name="email" id="email" value="">
      </div>

      <div class="grid-item">
        <label for="email">Email</label>
        <input type="email" name="email" id="email" value="">
      </div>
    </div>

    <div class="buttons">
      <button type="submit">Salvar</button>
      <a href="index.php">Cancelar</a>
    </div>
  </form>
</section>