<?php
include('includes/IHeader.php');
include('includes/IHead.php');
include('controllers/AuthController.php');
?>

<link rel="stylesheet" href="/admin/styles/home.css">

<div class="homeContainer">
  <h1>Olá, <b><?php echo $_SESSION['user']->username ?></b></h1>
  <p>Seja bem vindo ao painel do TSE para as eleições do SenacRS.</p>
</div>

<button onclick="handleTest(1)">Liberar eleitor</button>
<button onclick="handleTest(2)">Votar</button>
<button onclick="handleTest(3)">Criar CSV</button>

<script>
  async function handleTest(t) {
    let res;
    if (t == 1) {
      res = await $.post('../controller/index.php', {
        scope: 'origin-mesario',
        args: {
          election_id: 1,
          voter_document: '123456'
        }
      });
    } else if (t == 2) {
      res = await $.post('../controller/index.php', {
        scope: 'origin-vote',
        args: {
          election_id: 1,
          votes: [12, 13, 22]
        }
      });
    } else if (t == 3) {
      res = await $.post('../controller/index.php', {
        scope: 'create-csv',
        args: {
          a: 1,
        }
      });
    }
    // res = JSON.parse(res);

    console.log(res);
  }
</script>