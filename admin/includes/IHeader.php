<link rel="stylesheet" href="/admin/styles/header.css">

<header>
  <img src="https://2.bp.blogspot.com/-XuQ0NM78ipY/V5q6aQIKUxI/AAAAAAAALtM/mqCb95NBMn8tQfByJuNZ8RVdZk45ZwdcACLcB/s1600/013.png" alt="">
  <nav>
    <ul>
      <li><a href="index.php">Home</a></li>
      <li><a href="roles.php">Cargos</a></li>
      <li><a href="candidates.php">Candidatos</a></li>
      <li><a href="parties.php">Partidos</a></li>
      <li><a href="admins.php">Admins</a></li>
    </ul>
  </nav>

  <form action="/admin/controllers/LogoutController.php" method="POST">
    <button type="submit"><i class='fas fa-user'></i> Desconectar-se</button>
  </form>
</header>