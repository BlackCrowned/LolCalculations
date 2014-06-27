<?php

$name = $_REQUEST["name"];
$description = $_REQUEST["description"];
$cooldown = $_REQUEST["cooldown"];
$cost = $_REQUEST["cost"];
$details = $_REQUEST["details"];
$version = $_REQUEST["version"];
$image_file = $_REQUEST["image"];
$passive = $_REQUEST["passive"];
$abilityName = $_REQUEST["abilityName"];
$image = "";
if ($passive == 1) {
	$image = "http://ddragon.leagueoflegends.com/cdn/$version/img/passive/$image_file";
}
else {
	$image = "http://ddragon.leagueoflegends.com/cdn/$version/img/spell/$image_file";
}

echo <<<EOT
<div class="Tooltip AbilityTooltip">
	<!-- Image, Name, Max-Level, Passive -->
	<div class="TooltipBlock TooltipContainer">
		<img class="TooltipImage" src="$image"/>
		<span class="">
			<span class="TooltipHeading">$name</span>
			<br/>
			<span class="">$cost</span>
		</span>
		<span class="FloatRight">
			<span class="TooltipSubHeading FloatRight">[$abilityName]</span>
			<br />
			<span class="">$cooldown Seconds Cooldown</span>
		</span>
	</div>
	<!-- Description -->
	<div class="TooltipBlock">
		<span class="AbilityTooltipDescription">$description</span>
	</div>
	<!-- Details -->
	<div class="TooltipBlock">
		<span class="AbilityTooltipDetails">Details coming soon...</span>
	</div>
</div>
EOT;







?>