<?php 
$file = fopen("./Datas/partidos.csv", "r    ");

while($line = fgetcsv($file, 1000, ",")){
    if($line[0] != 'COD'){
        $sql = 'INSERT INTO partidos (id, name, acronym, number, is_active) VALUES ('.$line[0].','.$line[1].','.$line[2].','.$line[3].',1 )<br/>';
        echo '<pre>';
        print_r($sql);
        echo '</pre>';
    }
}
fclose($file);

?>