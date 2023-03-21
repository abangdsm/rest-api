<?php

$data = file_get_contents('coba.json');

$pelanggan = json_decode($data, true);

var_dump($pelanggan);

echo $pelanggan[0]['whatsapp'];
