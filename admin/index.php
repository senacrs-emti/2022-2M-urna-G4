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