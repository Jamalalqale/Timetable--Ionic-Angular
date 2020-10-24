

<?php
 header('Access-Control-Allow-Origin: *');
  header("Access-Control-Allow-Credentials: true");
  header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
  header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");
  header("Content-Type: application/json; charset=utf-8");

  include "library/config.php";

 $postjson = json_decode(file_get_contents('php://input'), true);


 	$query = mysqli_query($mysqli, "DELETE from notes 
  		

            where id='$postjson[note_id]'


  	");

  	$idcust = mysqli_insert_id($mysqli);

  	if($query) $result = json_encode(array('success'=>true));
  	else $result = json_encode(array('success'=>false,'msg'=>'error please try again'));

  	echo $result;






 ?>