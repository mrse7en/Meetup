<?php
	$data = json_decode(file_get_contents("php://input"));
	$upswd = mysql_real_escape_string($data->password);
	$uemail = mysql_real_escape_string($data->email);
	
	$con = mysql_connect('localhost', 'mrse7en_db', 'mr7@mysql');
	mysql_select_db('meetup', $con);
	
	$qry_em = 'select * from Registration where Email ="' . $uemail . '"';
	$qry_res = mysql_query($qry_em);
	$res = mysql_fetch_assoc($qry_res);
	
	if($uemail ==  $res["Email"] && $upswd ==  $res["Password"])
	{
		session_start();
		$_SESSION['PID'] = $res["PID"];
		print $_SESSION['PID'];
	}
	else print false;
?>