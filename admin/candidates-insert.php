<?php 
$file = fopen("./Datas/candidatos.csv", "r");

while($line = fgetcsv($file, 1000, ",")){
    if($line[0] != 'CARGO'){
        $sql = 'INSERT INTO candidates (role, full_name, display_name, photo, state, party, number) VALUES ('.$line[0].','.$line[1].','.$line[2].','.$line[3].','.$line[4].','.$line[5].','.$line[6].','.$line[7].')<br/>';
        echo '<pre>';
        echo $sql;
        echo '</pre>';
    }
}
fclose($file);

?>