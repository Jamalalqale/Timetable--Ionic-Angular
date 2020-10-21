



<?php
 header('Access-Control-Allow-Origin: *');
  header("Access-Control-Allow-Credentials: true");
  header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
  header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");
  header("Content-Type: application/json; charset=utf-8");

  include "library/config.php";

 $postjson = json_decode(file_get_contents('php://input'), true);

  	$data = array();
  	$query = mysqli_query($mysqli, "SELECT 
      courses.id,
      courses.name as course_name,
      courses.credits,
      teachers.teacher_name

       FROM courses
       join teachers on courses.teacher_id=teachers.id


        WHERE courses.id=$postjson[course_id] ");

  	while($row = mysqli_fetch_array($query)){

  		$data[] = array(
  			'id' => $row['id'],
  			'course_name' => $row['course_name'], 
        'credits' => $row['credits'],  
        'teacher_name' => $row['teacher_name']  			 			
  		

  			


  		);
  	}

  	if($query) $result = json_encode(array('success'=>true, 'result'=>$data));
  	else $result = json_encode(array('success'=>false));

  	echo $result;



?>

