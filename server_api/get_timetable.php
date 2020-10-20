


<?php
 header('Access-Control-Allow-Origin: *');
  header("Access-Control-Allow-Credentials: true");
  header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
  header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");
  header("Content-Type: application/json; charset=utf-8");

  include "library/config.php";



  	$data = array();
  	$query = mysqli_query($mysqli, "SELECT  timetable.*,courses.name as course_name,courses.credits,teachers.teacher_name
  	 FROM timetable
		join courses
		on timetable.course_id=courses.id
		join teachers
		on timetable.teacher_id=teachers.id


		WHERE timetable.day='mon'
		");

  	while($row = mysqli_fetch_array($query)){

  		$data[] = array(
  			'id' => $row['id'],
  			'course_id' => $row['course_id'],
  			'course_name' => $row['course_name'],
  			'teacher_id' => $row['teacher_id'],
  			'teacher_name' => $row['teacher_name'],
  			'start_time' => $row['start_time'],
  			'end_time' => $row['end_time'],
  			'location' => $row['location'],
  			'room' => $row['room'],
  			'credits' => $row['credits'],  			
  			'created_at' => $row['created_at']

  			


  		);
  	}

  	if($query) $result = json_encode(array('success'=>true, 'result'=>$data));
  	else $result = json_encode(array('success'=>false));

  	echo $result;



?>

