<?php
	$data = json_decode(file_get_contents("php://input"));
	$uid = mysql_real_escape_string($data->PID);
	
	$con = mysql_connect('localhost', 'mrse7en_db', 'mr7@mysql');
	mysql_select_db('meetup', $con);
	
	$qry_em = 'select * from Registration where PID ="' . $uid . '"';
	$qry_res = mysql_query($qry_em);
	$rs = mysql_fetch_assoc($qry_res);
	
	if($uid ==  $rs["PID"])
	{
		$outp = "";
		$outp .= '{"fname":"'  . $rs["FirstName"] . '",';
		$outp .= '"lname":"'   . $rs["LastName"] . '",';
		$outp .= '"dob":"'. $rs["DOB"] . '",'; 
		$outp .= '"email":"'. $rs["Email"] . '",'; 
		$outp .= '"Country":"'. $rs["Country"] . '"}'; 
		$outp ='{"records":['.$outp.']}';
		print $outp;
	}
?>