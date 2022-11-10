<?php 
$file = fopen("./Datas/cargos.csv", "r");

while($line = fgetcsv($file, 1000, ",")){
    if($line[0] != 'COD'){
        $sql = 'INSERT INTO roles (id, name, suplete, vice) VALUES ('.$line[0].','.$line[1].','.$line[3].','.$line[4].' )<br/>';
        echo '<pre>';
        print_r($sql);
        echo '</pre>';
    }
}
fclose($file);

?>