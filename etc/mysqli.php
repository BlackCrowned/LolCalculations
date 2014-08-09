<?php
	$database = $_REQUEST["database"];
	$username = "LolCalculations";
	$pass = "xyzabe12";
	$table = $_REQUEST["table"];
	$action = $_REQUEST["action"];
	
	$mysqli = new mysqli("localhost", $username, $pass, $database);
	if ($mysqli->connect_errno) {
		echo "Failed to connect to MySQL: " . $mysqli->connect_errno . ": " . $mysqli->connect_error;
	}
	
	if ($action == "insert") {
		$mysqli->query("INSERT INTO " . $table . $_REQUEST["insertOptions"] . " VALUES " . $_REQUEST["insertValues"]);
	}
	
	echo "<p>Script executed</p>";
?>