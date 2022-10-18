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

<button onclick="handleTest()">Oi</button>

<script>
  async function handleTest() {
    // let res = await $.post('../controller/index.php', {
    //   scope: 'origin-mesario',
    //   args: {
    //     voter_document: '123456'
    //   }
    // });
    let res = await $.post('../controller/index.php', {
      scope: 'origin-vote',
      args: {
        votes: [12, 13, 22]
      }
    });
    // res = JSON.parse(res);

    console.log(res);
  }
</script>