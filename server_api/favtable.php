

<?php
 header('Access-Control-Allow-Origin: *');
  header("Access-Control-Allow-Credentials: true");
  header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
  header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");
  header("Content-Type: application/json; charset=utf-8");

  include "library/config.php";

 $postjson = json_decode(file_get_contents('php://input'), true);


$student_id='$postjson[student_id]';
$timetable_id='$postjson[timetable_id]';



$sql="SELECT * from timetable_costume  where timetable_id='$postjson[timetable_id]' and student_id='$postjson[student_id]' ";

if ($result=mysqli_query($mysqli,$sql))
  {
  $num_rows=mysqli_num_rows($result);


if ($num_rows == 0) {


  $insert_query = mysqli_query($mysqli, "INSERT INTO timetable_costume (timetable_id,student_id) VALUES ('$postjson[timetable_id]','$postjson[student_id]')

    ");


    if($insert_query)

     $result = json_encode(array('success'=>true));
    else
     $result = json_encode(array('success'=>false,'msg'=>'error insert'));

    echo $result;


}
else
{




  $delete_query = mysqli_query($mysqli, "DELETE from  timetable_costume 
        
            where timetable_id= '$postjson[timetable_id]' and student_id='$postjson[student_id]'
    ");

   

    if($delete_query)
     $result = json_encode(array('success'=>true));
    else
     $result = json_encode(array('success'=>false,'msg'=>'error delete'));

    echo $result;

}





  }

else
{


   $result = json_encode(array('success'=>false,'msg'=>'error select'));

    echo $result;

}









  







 ?>