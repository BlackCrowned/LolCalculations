<?php

$name = $_REQUEST["name"];
$description = $_REQUEST["description"];
$cooldown = $_REQUEST["cooldown"];
$cost = $_REQUEST["cost"];
$details = $_REQUEST["details"];
$version = $_REQUEST["version"];
$image_file = $_REQUEST["image"];
$passive = $_REQUEST["image"];
$image = "";
if ($passive == 1) {
	$image = "http://ddragon.leagueoflegends.com/cdn/$version/img/passive/$image_file";
}
$image = "http://ddragon.leagueoflegends.com/cdn/$version/img/spell/$image_file";


echo <<<EOT
<div class="Tooltip">
	<!-- Image, Name, Max-Level, Passive -->
</div>
EOT;







?>