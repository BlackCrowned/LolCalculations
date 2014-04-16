<?php
$url = $_REQUEST['url'];
$options = json_decode($_REQUEST['options']);
$api_key = "63fac704-cdba-42ba-9baa-12d892c2202c";
$headers = "";

$headers = "?api_key=$api_key";

foreach ($options as $value) {
	$headers .= "&$value->key=$value->value";
}
echo file_get_contents($url . $headers);
?>