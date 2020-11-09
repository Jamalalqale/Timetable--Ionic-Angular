<?php
 header('Access-Control-Allow-Origin: *');
  header("Access-Control-Allow-Credentials: true");
  header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
  header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");
  header("Content-Type: application/json; charset=utf-8");

  include "library/config.php";

 $postjson = json_decode(file_get_contents('php://input'), true);

    $result = mysqli_query($mysqli, "SELECT * FROM students WHERE username='$postjson[username]' AND password='$postjson[password]'");

if ($result)
  {

  $num_rows=mysqli_num_rows($result);

if ($num_rows != 0) {



      $data = mysqli_fetch_array($result);
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

    }

    else{
      $result = json_encode(array('success'=>false, 'msg'=>'Unregister Account'));
    }


}

    else
    {

    	   $result = json_encode(array('success'=>false, 'msg'=>'Something went wrong'));
    }

    echo $result;



?>