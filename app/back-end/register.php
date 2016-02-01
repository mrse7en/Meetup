<?php

	$data = json_decode(file_get_contents("php://input"));
	$fname = $data->fname;
	$lname = $data->lname;
	$nation = $data->location;
	$email = $data->email;
	$pass = $data->passkey;
	$dob = $data->day .'/'. $data->month .'/'. $data->year;
	$pro_img = 'test';
	
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
	$sql = 'INSERT INTO registration(FirstName, LastName, DOB, Country, Email, Password, Profile_img) VALUES ("' . $fname .'", "' . $lname .'", "' . $dob .'", "' . $nation .'", "' . $email .'", "' . $pass .'", "' . $pro_img .'")';
	
	if ($db->query($sql) === TRUE) {
    	echo "success";
	} else {
		echo "Error: " . $sql . "<br>" . $db->error;
	}
	
	$db->close();
?>
