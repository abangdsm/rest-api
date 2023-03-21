<?php

$dbh = new PDO('mysql:host=localhost;dbname=data_json', 'root', '');

$db = $dbh->prepare('SELECT * FROM data_pelanggan');
$db->execute();
$pelanggan = $db->fetchAll(PDO::FETCH_ASSOC);

$data = json_encode($pelanggan);
echo $data;
