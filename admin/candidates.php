<?php
include('includes/IHeader.php');
include('includes/IHead.php');
include('controllers/AuthController.php');

$MOCK = [
  [
    'id' => 1,
    'name' => 'Ciro Games',
    'number' => '12',
    'party' => 'PDT',
    'party_url' => 'https://www.pdt.org.br/'
  ],
  [
    'id' => 1,
    'name' => 'Ciro Games',
    'number' => '12',
    'party' => 'PDT',
    'party_url' => 'https://www.pdt.org.br/'
  ],
  [
    'id' => 1,
    'name' => 'Ciro Games',
    'number' => '12',
    'party' => 'PDT',
    'party_url' => 'https://www.pdt.org.br/'
  ],
  [
    'id' => 1,
    'name' => 'Ciro Games',
    'number' => '12',
    'party' => 'PDT',
    'party_url' => 'https://www.pdt.org.br/'
  ],
];
?>


<section class='main'>
  <button class='new'>Adicionar registro</button>
  <table>
    <thead>
      <th>Nome</th>
      <th>Numero</th>
      <th>Partido</th>
      <th>Ações</th>
    </thead>
    <tbody>
      <?php
        foreach ($MOCK as $key => $value) {
          $name = $value['name'];
          $number = $value['number'];
          $party = $value['party'];
          $party_url = $value['party_url'];

          echo "<tr>
            <td>$name</td>
            <td>$number</td>
            <td><a href='$party_url'>$party</a></td>
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