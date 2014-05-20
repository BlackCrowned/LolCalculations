<?php

$name = $_REQUEST["name"];
$gold = $_REQUEST["gold"];
$stats = $_REQUEST["stats"];
$passives = json_decode($_REQUEST["passives"]);
$description = $_REQUEST["description"];
$version = $_REQUEST["version"];
$image_file = $_REQUEST["image"];
$image = "http://ddragon.leagueoflegends.com/cdn/$version/img/item/$image_file";

echo <<<EOT
<div class="Tooltip ItemTooltip">
    <!-- Image, Name, Gold -->
    <div class="TooltipBlock TooltipContainer">
        <img class="TooltipImage ItemTooltipImage" src="$image" width="25px" height="25px" />
        <div class="TooltipBlock">
            <span class="TooltipHeading ItemTooltipHeading">$name</span>
            <br />
            <span class="">Gold: </span><span class="ItemTooltipGold">$gold</span>
        </div>

    </div>
    <!-- Stats -->
    <div class="TooltipBlock">
        <span class="ItemTooltipStatName">Stat: </span><span class="ItemTooltipStatValue">9000</span>
    </div>
    <!-- Passives + Description -->
    <div class="TooltipBlock">
        <span class="ItemTooltipPassiveType">UNIQUE Passive: </span><span class="ItemTooltipPassiveDescription">Oneshot Everybody</span>
        <br />
        <span class="ItemTooltipDescription">$description</span>
    </div>
</div>
EOT;
?>
