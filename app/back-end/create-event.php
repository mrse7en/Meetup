<?php

	$data = json_decode(file_get_contents("php://input"));
	$uid = $data->uid;
	$ename = $data->ename;
	$egloc = $data->egloc;
	$venue = $data->venue;
	$edate = $data->edate;
	$inattd = $data->inattd;
	echo $uid;
	//db details
	$servername = "localhost";
	$username = "mrse7en_db";
	$password = "mr7@mysql";
	$dbname = "meetup";
	
	// Create connection
	$db = new mysqli($servername, $username, $password, $dbname);
	
	if ($db->connect_error) {
		die("Connection failed: " . $db->connect_error);
	} 
	$sql = 'INSERT INTO event(UID, EventName, GeoLocation, Venue, DateTime, attendees) VALUES ("' . $uid .'", "' . $ename .'", "' . $egloc .'", "' . $venue .'", "' . $edate .'", "' . $inattd .'")';
	
	if ($db->query($sql) === TRUE) {
    	echo "success";
	} else {
		echo "Error: " . $sql . "<br>" . $db->error;
	}
	
	$db->close();
?>
