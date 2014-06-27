<?php

$name = $_REQUEST["name"];
$i = $_REQUEST["i"];
$title = $_REQUEST["title"];
$version = $_REQUEST["version"];
$splash_file = $_REQUEST["splash"];
$splash = "http://ddragon.leagueoflegends.com/cdn/$version/img/champion/$splash_file";

echo <<<EOT
<div class="ChampionInfo" id="$name$i">
    <div class="ChampionInfoHeader">
        <div class="ChampionInfoBlock" style="width: 15%;">
            <span class="ChampionInfoHeading ChampionName">$name</span>
        </div>
        <div class="ChampionInfoBlock" style="width: 15%;">
            <span class="ChampionInfoHeading ChampionTitle">$title</span>
        </div>
        <div class="ChampionInfoBlock FloatRight" style="width: 100px;">
            <span class="ChampionInfoHeading ChampionInfoSubHeading ChampionRemove">Remove</span>
        </div>

    </div>
    <div class="ChampionInfoHeader">
        <div class="ChampionInfoBlock">
            <span class="ChampionInfoHeading ChampionInfoSubHeading ChampionSplashHeading"> Splash </span>
            <img class="ChampionInfoImage ChampionSplash" src="$splash"/>
        </div>

        <div class="ChampionInfoBlock">
            <span class="ChampionInfoHeading ChampionInfoSubHeading ChampionItemsHeading"> Items </span>
            <table class="ItemsDisplayTable">
                <tr>
                    <td><img class="ItemImage ChampionItem1" src="" height="50px" width="50px"/></td>
                    <td><img class="ItemImage ChampionItem2" src="" height="50px" width="50px"/></td>
                    <td><img class="ItemImage ChampionItem3" src="" height="50px" width="50px"/></td>
                    <td rowspan="2"><img class="ItemImage ChampionTrinket" src="" height="50px" width="50px"/></td>
                </tr>
                <tr>
                    <td><img class="ItemImage ChampionItem4" src="" height="50px" width="50px"/></td>
                    <td><img class="ItemImage ChampionItem5" src="" height="50px" width="50px"/></td>
                    <td><img class="ItemImage ChampionItem6" src="" height="50px" width="50px"/></td>
                </tr>
            </table>
        	<div class="ChampionItem1Tooltip"></div>
            <div class="ChampionItem2Tooltip"></div>
            <div class="ChampionItem3Tooltip"></div>
            <div class="ChampionItem4Tooltip"></div>
            <div class="ChampionItem5Tooltip"></div>
            <div class="ChampionItem6Tooltip"></div>
            <div class="ChampionTrinketTooltip"></div>
            
        </div>
        <div class="ChampionInfoBlock">
            <span class="ChampionInfoHeading ChampionInfoSubHeading ChampionRunesHeading"> Runes </span>
            <table class="RuneDisplayTable">
                <tr>
                    <td><img class="RuneMarkImage ChampionMarksImage" src="" height="50px" width="50px"/></td>
                    <td class="RuneDisplayTableStats ChampionMarksStats"></td>
                    <td><img class="RuneSealImage ChampionSealsImage" src="" height="50px" width="50px"/></td>
                    <td class="RuneDisplayTableStats ChampionSealsStats"></td>
                </tr>
                <tr>
                    <td><img class="RuneGlyphImage ChampionGlyphsImage" src="" height="50px" width="50px"/></td>
                    <td class="RuneDisplayTableStats ChampionGlyphsStats"></td>
                    <td><img class="RuneQuintImage ChampionQuintsImage" src="" height="50px" width="50px"/></td>
                    <td class="RuneDisplayTableStats ChampionQuintsStats"></td>
                </tr>
            </table>
        </div>
        <div class="ChampionInfoBlock FloatRight">
            <span class="ChampionInfoHeading ChampionInfoSubHeading ChampionMasteriesHeading"> Masteries </span>
            <table class="MasteriesDisplayTable">
                <tr>
                    <td><img class="MasteryImage ChampionOffensiveTreeImage" src="http://ddragon.leagueoflegends.com/cdn/4.5.4/img/mastery/4162.png" height="50px" width="50px"/></td>
                    <td class="ChampionOffensiveTreeStats"> 0 </td>
                    <td><img class="MasteryImage ChampionDefensiveTreeImage" src="http://ddragon.leagueoflegends.com/cdn/4.5.4/img/mastery/4262.png" height="50px" width="50px"/></td>
                    <td class="ChampionDefensiveTreeStats"> 0 </td>
                    <td><img class="MasteryImage ChampionUtilityTreeImage" src="http://ddragon.leagueoflegends.com/cdn/4.5.4/img/mastery/4362.png" height="50px" width="50px"/></td>
                    <td class="ChampionUtilityTreeStats"> 0 </td>
                </tr>
            </table>
        </div>
        <div class="ChampionInfoBlock FloatRight">
            <table class="LevelDisplayTable">
                <tr>
                    <td class="ChampionInfoTableSubHeading ChampionLevelHeading"> Level </td>
                </tr>
                <tr>
                    <td class="LevelDisplayTableStats ChampionLevel"> 10 </td>
                </tr>
            </table>
            <table class="LevelDisplayTable">
                <tr>
                    <td colspan="4" class="ChampionInfoTableSubHeading ChampionChangeLevelHeading"> Change Level </td>
                </tr>
                <tr>
                    <td class="LevelDisplayTableStats ChampionSetlevel1"> 1 </td>
                    <td class="LevelDisplayTableStats ChampionSetlevelm1"> -1 </td>
                    <td class="LevelDisplayTableStats ChampionSetlevelp1"> +1 </td>
                    <td class="LevelDisplayTableStats ChampionSetlevel18"> 18 </td>
                </tr>
            </table>
        </div>

    </div>

    <div class="ChampionInfoBlock">
        <span class="ChampionInfoHeading ChampionInfoSubHeading">Champion Stats</span>
        <div class="ChampionStatsDisplay">
            <table class="StatsDisplayTable">
                <tr>
                    <td class="StatsDisplayTableKey">Health</td>
                    <td class="StatsDisplayTableValue"><span class="ChampionHp">0</span> (+<span class="ChampionHpperlevel">0</span>)</td>
                    <td class="StatsDisplayTableKey">Health / 5s</td>
                    <td class="StatsDisplayTableValue"><span class="ChampionHpregen">0</span> (+<span class="ChampionHpregenperlevel">0</span>)</td>
                </tr>
                <tr>
                    <td class="StatsDisplayTableKey">Mana</td>
                    <td class="StatsDisplayTableValue"><span class="ChampionMp">0</span> (+<span class="ChampionMpperlevel">0</span>)</td>
                    <td class="StatsDisplayTableKey">Mana / 5s</td>
                    <td class="StatsDisplayTableValue"><span class="ChampionMpregen">0</span> (+<span class="ChampionMpregenperlevel">0</span>)</td>
                </tr>
                <tr>
                    <td class="StatsDisplayTableKey">Attack Damage</td>
                    <td class="StatsDisplayTableValue"><span class="ChampionAttackdamage">0</span> (+<span class="ChampionAttackdamageperlevel">0</span>)</td>
                    <td class="StatsDisplayTableKey">Ability Power</td>
                    <td class="StatsDisplayTableValue"><span class="ChampionAbilitypower">0</span> (+<span class="ChampionAbilitypowerperlevel">0</span>)</td>
                </tr>
                <tr>
                    <td class="StatsDisplayTableKey">Attack Speed</td>
                    <td class="StatsDisplayTableValue"><span class="ChampionAttackspeedoffset">0</span> (+<span class="ChampionAttackspeedperlevel">0</span>%)</td>
                    <td class="StatsDisplayTableKey">Cooldown Reduction</td>
                    <td class="StatsDisplayTableValue"><span class="ChampionCooldownreduction">0%</span> (+<span class="ChampionCooldownreductionperlevel">0</span>%)</td>
                </tr>
                <tr>
                    <td class="StatsDisplayTableKey">Lifesteal</td>
                    <td class="StatsDisplayTableValue"><span class="ChampionLifesteal">0</span>% (+<span class="ChampionLifestealperlevel">0</span>%)</td>
                    <td class="StatsDisplayTableKey">Crit. Chance</td>
                    <td class="StatsDisplayTableValue"><span class="ChampionCrit">0</span>% (+<span class="ChampionCritperlevel">0</span>%)</td>
                </tr>
                <tr>
                    <td class="StatsDisplayTableKey">Armor</td>
                    <td class="StatsDisplayTableValue"><span class="ChampionArmor">0</span> (+<span class="ChampionArmorperlevel">0</span>)</td>
                    <td class="StatsDisplayTableKey">Magic Resist</td>
                    <td class="StatsDisplayTableValue"><span class="ChampionSpellblock">0</span> (+<span class="ChampionSpellblockperlevel">0</span>)</td>
                </tr>
                <tr>
                    <td class="StatsDisplayTableKey">Flat Armor Penetration</td>
                    <td class="StatsDisplayTableValue"><span class="ChampionFarmorpenetration">0</span> (+<span class="ChampionFarmorpenetrationperlevel">0</span>)</td>
                    <td class="StatsDisplayTableKey">Flat Magic Resist Penetration</td>
                    <td class="StatsDisplayTableValue"><span class="ChampionFspellblockpenetration">0</span> (+<span class="ChampionFspellblockpenetrationperlevel">0</span>)</td>
                </tr>
                <tr>
                    <td class="StatsDisplayTableKey">% Armor Penetration</td>
                    <td class="StatsDisplayTableValue"><span class="ChampionParmorpenetration">0</span>% (+<span class="ChampionParmorpenetrationperlevel">0</span>%)</td>
                    <td class="StatsDisplayTableKey">% Magic Resist Penetration</td>
                    <td class="StatsDisplayTableValue"><span class="ChampionPspellblockpenetration">0</span>% (+<span class="ChampionPspellblockpenetrationperlevel">0</span>%)</td>
                </tr>
                <tr>
                    <td class="StatsDisplayTableKey">Move Speed</td>
                    <td class="StatsDisplayTableValue"><span class="ChampionMovespeed">0</span> (+<span class="ChampionMovespeedperlevel">0</span>)</td>
                    <td class="StatsDisplayTableKey">Attack Range</td>
                    <td class="StatsDisplayTableValue"><span class="ChampionAttackrange">0</span> (+<span class="ChampionAttackrangeperlevel">0</span>)</td>
                </tr>
            </table>

        </div>
    </div>
    <div class="ChampionInfoBlock FloatRight">
        <span class="ChampionInfoHeading ChampionInfoSubHeading">Abilities</span>
        <table class="AbilitiesDisplayTable">
            <tr>
                <td>
	                <img class="AbilityImage ChampionPImage" src=" "></img>
	                <div class="ChampionAbilityLevelUpContainer">
		                <span class="ChampionAbilityLevelUp ChampionPLevelUp">+</span>
		                <span class="ChampionAbilityLevelDown ChampionPLevelDown">-</span>
	                </div>
                </td>
                <td><img class="AbilityImage ChampionQImage" src=" "></img>
                	<div class="ChampionAbilityLevelUpContainer">
		                <span class="ChampionAbilityLevelUp ChampionQLevelUp">+</span>
		                <span class="ChampionAbilityLevelDown ChampionQLevelDown">-</span>
	                </div>
                </td>
                <td><img class="AbilityImage ChampionWImage" src=" "></img>
	                <div class="ChampionAbilityLevelUpContainer">
		                <span class="ChampionAbilityLevelUp ChampionWLevelUp">+</span>
		                <span class="ChampionAbilityLevelDown ChampionWLevelDown">-</span>
	                </div>
                </td>
                <td><img class="AbilityImage ChampionEImage" src=" "></img>
	                <div class="ChampionAbilityLevelUpContainer">
		                <span class="ChampionAbilityLevelUp ChampionELevelUp">+</span>
		                <span class="ChampionAbilityLevelDown ChampionELevelDown">-</span>
	                </div>
                </td>
                <td><img class="AbilityImage ChampionRImage" src=" "></img>
                	<div class="ChampionAbilityLevelUpContainer">
		                <span class="ChampionAbilityLevelUp ChampionRLevelUp">+</span>
		                <span class="ChampionAbilityLevelDown ChampionRLevelDown">-</span>
	                </div>
                </td>
            </tr>
            <tr>
            	<td class="ChampionPLevel"></td>
            	<td class="ChampionQLevel"></td>
            	<td class="ChampionWLevel"></td>
            	<td class="ChampionELevel"></td>
            	<td class="ChampionRLevel"></td>
            </tr>
        </table>
        <div class="ChampionPTooltip"></div>
        <div class="ChampionQTooltip"></div>
        <div class="ChampionWTooltip"></div>
        <div class="ChampionETooltip"></div>
        <div class="ChampionRTooltip"></div>
    </div>

</div>
EOT;
?>