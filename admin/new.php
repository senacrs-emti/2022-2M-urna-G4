<?php
include('includes/IHeader.php');
include('includes/IHead.php');
include('controllers/AuthController.php');

require_once('controllers/DatabaseController.php');

$db = new Database();

if (!isset($_GET['scope'])) {
  header('location: index.php');
  exit();
}

$scope = $_GET['scope'];
$translateScopes = [
  'candidates' => 'candidato',
];

$partiesQuery = $db->query('
  SELECT 
    parties.name as party_name,
    parties.acronym as party_acronym, 
    parties.number as party_number
  FROM parties
');

$rolesQuery = $db->query('
  SELECT
    roles.name as role_name
  FROM roles
')
?>

<link rel="stylesheet" href="/admin/styles/actions.css">

<section class='editContainer'>
  <span>Criando um novo <b><?php echo $translateScopes[$scope] ?></b></span>

  <form action="/admin/controllers/ActionController.php?type=new&scope=<?php echo $scope ?>" method="POST">
    <div class="grid">
      <div class="grid-item">
        <label for="name">Nome</label>
        <input type="text" name="name" id="name" placeholder="Digite o nome do candidato">
      </div>

      <div class="grid-item">
        <label for="name">Partido</label>
        <input list="parties-list" name="parties" id="parties" placeholder="Clique para selecionar um partido">
        <datalist id="parties-list">
          <?php 
            foreach ($partiesQuery as $_ => $value) {
              $partyName = $value->party_name;
              $partyAcronym = $value->party_acronym;
              echo "<option value='$partyAcronym'>$partyName</option>";
            }
          ?>
        </datalist>
      </div>
      
      <div class="grid-item">
        <label for="name">Cargo</label>
        <input list="roles-list" name="roles" id="roles" placeholder="Clique para selecionar um cargo">
        <datalist id="roles-list">
          <?php 
            foreach ($rolesQuery as $_ => $value) {
              $roleName = $value->role_name;
              echo "<option value='$roleName'></option>";
            }
          ?>
        </datalist>
      </div>

      <div class="grid-item">
        <label for="number">Número</label>
        <input type="text" name="number" id="number" placeholder="Digite o número do candidato">
        <p><b>Atenção:</b> O número do partido inicia-se em ?.</p>
      </div>
    </div>

    <div class="buttons">
      <button type="submit">Salvar</button>
      <a href="index.php">Cancelar</a>
    </div>
  </form>
</section>