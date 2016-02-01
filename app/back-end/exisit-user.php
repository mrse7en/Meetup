<?php
	$data = json_decode(file_get_contents("php://input"));
	$uemail = mysql_real_escape_string($data->email);
	
	$con = mysql_connect('localhost', 'mrse7en_db', 'mr7@mysql');
	mysql_select_db('meetup', $con);
	
	$qry_em = 'select Email from Registration';
	$qry_res = mysql_query($qry_em);
	$rs = mysql_fetch_assoc($qry_res);
	
	$outp = "";
	$outp .= '{"email":"'  . $rs["Email"] . '",';
	
	print $outp;
	//print $res;
?>