<?php
  include "library/config.php";
$input2 = file_get_contents('php://input');
$data = json_decode($input2,true);

 $username = $data['username'];
 $password = $data['password'];


$sqll= "SELECT * from users where username='y' and password='y'";
$result = mysqli_query($connection,$sqll);


if(mysqli_num_rows($result)>0){
	while ($row = mysqli_fetch_assoc($result)){
		
		$response= "correct";
	
}
}

else {
    $response=  "0 results";
}//turn PHP into JSON with json_encode()
        echo json_encode( $response);
?>