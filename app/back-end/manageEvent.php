<?php
	$data = json_decode(file_get_contents("php://input"));
	$uid = mysql_real_escape_string($data->PID);
	
	$con = mysql_connect('localhost', 'mrse7en_db', 'mr7@mysql');
	mysql_select_db('meetup', $con);
	
	$qry_em = 'select * from event where UID ="' . $uid . '"';
	$qry_res = mysql_query($qry_em);
	$rs = mysql_fetch_assoc($qry_res);
	
	if($uid ==  $rs["UID"])
	{
		$outp = "";
		$outp .= '{"ename":"'  . $rs["EventName"] . '",';
		$outp .= '"egloc":"'   . $rs["GeoLocation"] . '",';
		$outp .= '"venue":"'. $rs["Venue"] . '",'; 
		$outp .= '"datetime":"'. $rs["DateTime"] . '",'; 
		$outp .= '"attendees":"'. $rs["attendees"] . '"}'; 
		$outp ='{"records":['.$outp.']}';
		print $outp;
	}
?>