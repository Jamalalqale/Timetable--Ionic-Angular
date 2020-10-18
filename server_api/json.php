<?php
  include "library/config.php";
$data=array(); 
$q=mysqli_query($mysqli, "SELECT * FROM `users` "); 

while ($row=mysqli_fetch_object($q)){
    $data[]=$row; 
}
echo json_encode($data); 
echo mysqli_error($mysqli); 
?>