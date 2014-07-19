<?php

$name = $_REQUEST["name"];
$gold = $_REQUEST["gold"];
$recipe_cost = $_REQUEST["recipe_cost"];
$description = $_REQUEST["description"];
$version = $_REQUEST["version"];
$image_file = $_REQUEST["image"];
$image = "http://ddragon.leagueoflegends.com/cdn/$version/img/item/$image_file";

echo <<<EOT
<div class="Tooltip ItemTooltip">
    <!-- Image, Name, Gold -->
    <div class="TooltipBlock TooltipContainer">
        <img class="TooltipImage ItemTooltipImage" src="$image"/>
        <div class="TooltipBlock">
            <span class="TooltipHeading ItemTooltipHeading">$name</span>
            <br />
            <span class="">Gold: </span><span class="ItemTooltipGold">$gold($recipe_cost)</span>
        </div>

    </div>
    <!-- Description -->
    <div class="TooltipBlock">
        <span class="ItemTooltipDescription">$description</span>
    </div>
</div>
EOT;
?>
