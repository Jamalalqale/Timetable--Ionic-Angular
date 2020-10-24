<?php
 header('Access-Control-Allow-Origin: *');
  header("Access-Control-Allow-Credentials: true");
  header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
  header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");
  header("Content-Type: application/json; charset=utf-8");

  include "library/config.php";



  	$data = array();
  	$query = mysqli_query($mysqli, "SELECT * FROM teachers where id=1 ");

  	while($row = mysqli_fetch_array($query)){

  		$data[] = array(
  			'id' => $row['id'],
  			'teacher_name' => $row['teacher_name'],
        'position' => $row['position'],
  			'email' => $row['email'],
  			'phone' => $row['phone'],
        'avatar' => $row['avatar']


  		);
  	}

  	if($query) $result = json_encode(array('success'=>true, 'result'=>$data));
  	else $result = json_encode(array('success'=>false));

  	echo $result;



?>