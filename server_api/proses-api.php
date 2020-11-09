<?php

  header('Access-Control-Allow-Origin: *');
  header("Access-Control-Allow-Credentials: true");
  header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
  header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");
  header("Content-Type: application/json; charset=utf-8");

  include "library/config.php";
  
  $postjson = json_decode(file_get_contents('php://input'), true);
  $today    = date('Y-m-d');


  if($postjson['aksi']=='register'){

  	$query = mysqli_query($mysqli, "INSERT INTO students SET
  		username = '$postjson[username]',
  		password = '$postjson[password]',
      status = 'y',
  		created_at	  = '$today' 
  	");

  	$idcust = mysqli_insert_id($mysqli);

  	if($query) $result = json_encode(array('success'=>true));
  	else $result = json_encode(array('success'=>false,'msg'=>'error please try again'));

  	echo $result;

  }

  elseif($postjson['aksi']=='getdata'){
  	$data = array();
  	$query = mysqli_query($mysqli, "SELECT * FROM users ");

  	while($row = mysqli_fetch_array($query)){

  		$data[] = array(
  			'user_id' => $row['user_id'],
  			'username' => $row['username'],
  			'password' => $row['password']


  		);
  	}

  	if($query) $result = json_encode(array('success'=>true, 'result'=>$data));
  	else $result = json_encode(array('success'=>false));

  	echo $result;

  }

  elseif($postjson['aksi']=='update'){
  	$query = mysqli_query($mysqli, "UPDATE master_customer SET 
  		name_customer='$postjson[name_customer]',
  		desc_customer='$postjson[desc_customer]' WHERE customer_id='$postjson[customer_id]'");

  	if($query) $result = json_encode(array('success'=>true, 'result'=>'success'));
  	else $result = json_encode(array('success'=>false, 'result'=>'error'));

  	echo $result;

  }

  elseif($postjson['aksi']=='delete'){
  	$query = mysqli_query($mysqli, "DELETE FROM master_customer WHERE customer_id='$postjson[customer_id]'");

  	if($query) $result = json_encode(array('success'=>true, 'result'=>'success'));
  	else $result = json_encode(array('success'=>false, 'result'=>'error'));

  	echo $result;

  }

  elseif($postjson['aksi']=="login"){
    //$password = md5($postjson['password']);
    $query = mysqli_query($mysqli, "SELECT * FROM students WHERE username='$postjson[username]' AND password='$postjson[password]'");
    $check = mysqli_num_rows($query);

    if($check>0){
      $data = mysqli_fetch_array($query);
      $datauser = array(
        'user_id' => $data['id'],
        'username' => $data['username'],
        'password' => $data['password']
      );

      if($data['status']=='y'){
        $result = json_encode(array('success'=>true, 'result'=>$datauser));
      }else{
        $result = json_encode(array('success'=>false, 'msg'=>'Account Inactive')); 
      }

    }else{
      $result = json_encode(array('success'=>false, 'msg'=>'Unregister Account'));
    }

    echo $result;
  }
//

  elseif($postjson['aksi']=="json"){
    //$password = md5($postjson['password']);
    $query = mysqli_query($mysqli, "SELECT * FROM users ");
    $check = mysqli_num_rows($query);

    if($check>0){
      $data = mysqli_fetch_array($query);
      $datauser = array(
        'user_id' => $data['user_id'],
        'username' => $data['username'],
        'password' => $data['password']
      );

 
        $result = json_encode(array('success'=>true, 'result'=>$datauser));
      

    echo $result;
  }





  }









  elseif($postjson['aksi']=="register"){
    $password = md5($postjson['password']);
    $query = mysqli_query($mysqli, "INSERT INTO master_user SET
      username = '$postjson[username]',
      password = '$password',
      status   = 'y'
    ");

    if($query) $result = json_encode(array('success'=>true));
    else $result = json_encode(array('success'=>false, 'msg'=>'error, please try again'));

    echo $result;
  }
  else


?>