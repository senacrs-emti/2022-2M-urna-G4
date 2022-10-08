<?php
include('includes/IHead.php');
?>

<link rel="stylesheet" href="/admin/styles/login.css">
<section class='loginContainer'>
  <div>
    <h1>PAINEL - TSE</h1>
    <p>Entre com sua conta</p>

    <form action="controllers/LoginController.php" method="post">
      <input type="text" name="username" placeholder="Usuário">
      <input type="password" name="password" placeholder="Senha">
      <input type="submit" name="submit" value="CONECTAR-SE">
    </form>

    <div class="accountText">

      <span>Ainda não possui uma conta? <a href="register.php">Cadastre-se.</a></span>
    </div>
  </div>
</section>