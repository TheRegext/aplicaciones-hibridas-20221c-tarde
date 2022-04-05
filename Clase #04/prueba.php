<?php
 ///Verifico si el email y password exitesn en la base de datos
 $conexion = new mysqli('162.246.17.56', 'folivora_wp121', 'bp43@X4AS@', 'folivora_wp121', 3306);

 if ($conexion->connect_errno) {
     echo "Error al conectarse: " . $conexion->connect_errno;
     exit;
 }