<?php
include('includes/IHead.php');
?>

<link rel="stylesheet" href="/admin/styles/login.css">
<section class='loginContainer'>
  <div>
    <h1>PAINEL - TSE</h1>
    <p>Crie sua conta</p>

    <form action="controllers/RegisterController.php" method="post">
      <input type="text" name="username" placeholder="Usuário">
      <input type="password" name="password" placeholder="Senha">
      <input type="password" name="password2" placeholder="Confirme sua senha">
      <input type="submit" name="submit" value="CADASTRAR-SE">
    </form>

    <div class="accountText">
      <span>Possui uma conta? <a href="register.php">Entre.</a></span>
    </div>
  </div>
</section>