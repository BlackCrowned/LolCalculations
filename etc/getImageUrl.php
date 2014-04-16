<?php

$version = $_REQUEST["version"];
$group = $_REQUEST["group"];
$file = $_REQUEST["file"];

echo "http://ddragon.leagueoflegends.com/cdn/$version/img/$group/$file";

?>