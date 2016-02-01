<?php 
	session_start();
	if(isset($_SESSION['PID'])) print 'authentified';
?>