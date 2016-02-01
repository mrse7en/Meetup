<?php 
	session_id('PID');
	session_start();
	session_destroy();
	session_commit();
?>