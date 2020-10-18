<?php

define('DB_NAME', 'laquila_timetable'); // DATABASE
define('DB_USER', 'root'); // ROOT DEFAULT MYSQL
define('DB_PASSWORD', '');  // PASSOWORD
define('DB_HOST', 'localhost'); // LOCAL IF YOU USE LOCAL.

$mysqli = new mysqli(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME);

?>