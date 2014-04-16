<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
"http://www.w3.org/TR/html4/loose.dtd">
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <link rel="stylesheet" href="/LolCalculations/style/style_1.css" type="text/css" media="screen" title="no title" charset="utf-8"/>
        <link rel="stylesheet" href="/LolCalculations/style/DamageCalculation_1.css" type="text/css" media="screen" title="no title" charset="utf-8"/>
        <script type="text/javascript" src="/OPLib/OPLib.js"></script>
        <script type="text/javascript" src="/LolCalculations/javascript/DamageCalculation_1.js"></script>
        <title>Damage Calculation</title>
    </head>

    <body>
        <h1>Damage Calculation</h1>
        <div class="Champions" id="addChampDiv">
            <select class="Selectable listbox" id="addChampList" required="required"></select>
            <button class="Selectable button" id="addChampButton">
                Add Champion
            </button>
            <div class="Infobox" id="selectedChamps">
                <span class="InfotextHeading">Selection</span>
                <div class="ChampionInfo">
                    <div class="ChampionInfoHeader">
                        <div class="ChampionInfoBlock" style="width: 15%;">
                            <span class="ChampionInfoHeading" id="name">Riven </span>
                        </div>
                        <div class="ChampionInfoBlock" style="width: 15%;">
                            <span class="ChampionInfoHeading" id="title">the Exile</span>
                        </div>
                        <div class="ChampionInfoBlock FloatRight" style="width: 100px;">
                            <span class="ChampionInfoHeading ChampionInfoSubHeading" id="remove">Remove</span>
                        </div>

                    </div>
                    <div class="ChampionInfoHeader">
                        <div class="ChampionInfoBlock">
                            <span class="ChampionInfoHeading ChampionInfoSubHeading" id="splashHeading"> Splash </span>
                            <img class="ChampionInfoImage" id="splash" src="http://ddragon.leagueoflegends.com/cdn/4.4.3/img/champion/Riven.png"/>
                        </div>

                        <div class="ChampionInfoBlock">
                            <span class="ChampionInfoHeading ChampionInfoSubHeading" id="itemsHeading"> Items </span>
                            <table class="ItemsDisplayTable">
                                <tr>
                                    <td><img class="ItemImage" id="item1" src="http://ddragon.leagueoflegends.com/cdn/4.5.4/img/item/1001.png" height="50px" width="50px"/></td>
                                    <td><img class="ItemImage" id="item2" src="http://ddragon.leagueoflegends.com/cdn/4.5.4/img/item/1004.png" height="50px" width="50px"/></td>
                                    <td><img class="ItemImage" id="item3" src="http://ddragon.leagueoflegends.com/cdn/4.5.4/img/item/1006.png" height="50px" width="50px"/></td>
                                    <td rowspan="2"><img class="ItemImage" id="trinket"src="http://ddragon.leagueoflegends.com/cdn/4.5.4/img/item/3361.png" height="50px" width="50px"/></td>
                                </tr>
                                <tr>
                                    <td><img class="ItemImage" id="item4" src="http://ddragon.leagueoflegends.com/cdn/4.5.4/img/item/1011.png" height="50px" width="50px"/></td>
                                    <td><img class="ItemImage" id="item5" src="http://ddragon.leagueoflegends.com/cdn/4.5.4/img/item/1018.png" height="50px" width="50px"/></td>
                                    <td><img class="ItemImage" id="item6" src="http://ddragon.leagueoflegends.com/cdn/4.5.4/img/item/1026.png" height="50px" width="50px"/></td>
                                </tr>
                            </table>
                        </div>
                        <div class="ChampionInfoBlock">
                            <span class="ChampionInfoHeading ChampionInfoSubHeading" id="runesHeading"> Runes </span>
                            <table class="RuneDisplayTable">
                                <tr>
                                    <td><img class="RuneMarkImage" id="marksImage" src="http://ddragon.leagueoflegends.com/cdn/4.5.4/img/rune/8001.png" height="50px" width="50px"/></td>
                                    <td class="RuneDisplayTableStats" id="marksStats">8.55 AD</td>
                                    <td><img class="RuneSealImage" id="sealsImage" src="http://ddragon.leagueoflegends.com/cdn/4.5.4/img/rune/8001.png" height="50px" width="50px"/></td>
                                    <td class="RuneDisplayTableStats" id="sealsStats">9 Armor</td>
                                </tr>
                                <tr>
                                    <td><img class="RuneGlyphImage" id="glyphsImage" src="http://ddragon.leagueoflegends.com/cdn/4.5.4/img/rune/8001.png" height="50px" width="50px"/></td>
                                    <td class="RuneDisplayTableStats" id="glyphsStats">15% CDR</td>
                                    <td><img class="RuneQuintImage" id="quintsImage" src="http://ddragon.leagueoflegends.com/cdn/4.5.4/img/rune/8001.png" height="50px" width="50px"/></td>
                                    <td class="RuneDisplayTableStats" id="quintsStats">6% LS</td>
                                </tr>
                            </table>
                        </div>
                        <div class="ChampionInfoBlock FloatRight">
                            <span class="ChampionInfoHeading ChampionInfoSubHeading" id="masteriesHeading"> Masteries </span>
                            <table class="MasteriesDisplayTable">
                                <tr>
                                    <td><img class="MasteryImage" id="offesinveTreeImage" src="http://ddragon.leagueoflegends.com/cdn/4.5.4/img/mastery/4162.png" height="50px" width="50px"/></td>
                                    <td id="offesinveTreeStats"> 21 </td>
                                    <td><img class="MasteryImage" id="defensiveTreeImage" src="http://ddragon.leagueoflegends.com/cdn/4.5.4/img/mastery/4262.png" height="50px" width="50px"/></td>
                                    <td id="defensiveTreeStats"> 9 </td>
                                    <td><img class="MasteryImage" id="utilityTreeImage" src="http://ddragon.leagueoflegends.com/cdn/4.5.4/img/mastery/4362.png" height="50px" width="50px"/></td>
                                    <td id="utilityTreeStats"> 0 </td>
                                </tr>
                            </table>
                        </div>
                        <div class="ChampionInfoBlock FloatRight">
                            <table class="LevelDisplayTable">
                                <tr>
                                    <td class="ChampionInfoTableSubHeading" id="levelHeading"> Level </td>
                                </tr>
                                <tr>
                                    <td class="LevelDisplayTableStats" id="level"> 10 </td>
                                </tr>
                            </table>
                            <table class="LevelDisplayTable">
                                <tr>
                                    <td colspan="4" class="ChampionInfoTableSubHeading" id="changeLevelHeading"> Change Level </td>
                                </tr>
                                <tr>
                                    <td class="LevelDisplayTableStats" id="setlevel1"> 1 </td>
                                    <td class="LevelDisplayTableStats" id="setlevelp1"> +1 </td>
                                    <td class="LevelDisplayTableStats" id="setlevelm1"> -1 </td>
                                    <td class="LevelDisplayTableStats" id="setlevel18"> 18 </td>
                                </tr>
                            </table>
                        </div>

                    </div>

                    <div class="ChampionInfoBlock">
                        <span class="ChampionInfoHeading ChampionInfoSubHeading">Champion Stats</span>
                        <div id="StatsDisplay" class="StatsDisplay">
                            <table class="StatsDisplayTable">
                                <tr>
                                    <td>Health</td>
                                    <td><span id="hp">hp</span> (+<span id="hpperlevel">hpperlevel</span>)</td>
                                    <td>Health / 5s</td>
                                    <td><span id="hpregen">hpregen</span> (+<span id="hpregenperlevel">hpregenperlevel</span>)</td>
                                </tr>
                                <tr>
                                    <td>Mana</td>
                                    <td><span id="mp">mp</span> (+<span id="mpperlevel">mpperlevel</span>)</td>
                                    <td>Mana / 5s</td>
                                    <td><span id="mpregen">mp</span> (+<span id="mpregenperlevel">mpregenperlevel</span>)</td>
                                </tr>
                                <tr>
                                    <td>Attack Damage</td>
                                    <td><span id="attackdamage">attackdamage</span> (+<span id="attackdamageperlevel">attackdamageperlevel</span>)</td>
                                    <td>Ability Power</td>
                                    <td><span id="abilitypower">abilitypower</span> (+<span id="abilitypowerperlevel">abilitypowerperlevel</span>)</td>
                                </tr>
                                <tr>
                                    <td>Attack Speed</td>
                                    <td><span id="attackspeedoffset">attackspeedoffset</span> (+<span id="attackspeedperlevel">attackspeedperlevel</span>%)</td>
                                    <td>Cooldown Reduction</td>
                                    <td><span id="cooldownreduction">cooldownreduction%</span> (+<span id="cooldownreductionperlevel">cooldownreductionperlevel</span>%)</td>
                                </tr>
                                <tr>
                                    <td>Lifesteal</td>
                                    <td><span id="lifesteal">lifesteal</span>% (+<span id="lifestealperlevel">lifestealperlevel</span>%)</td>
                                    <td>Crit. Chance</td>
                                    <td><span id="crit">crit</span>% (+<span id="critperlevel">critperlevel</span>%)</td>
                                </tr>
                                <tr>
                                    <td>Armor</td>
                                    <td><span id="armor">armor</span> (+<span id="armorperlevel">armorperlevel</span>)</td>
                                    <td>Magic Resist</td>
                                    <td><span id="spellblock">spellblock</span> (+<span id="spellblockperlevel">spellblockperlevel</span>)</td>
                                </tr>
                                <tr>
                                    <td>Flat Armor Penetration</td>
                                    <td><span id="farmorpenetration">farmorpenetration</span> (+<span id="farmorpenetrationperlevel">farmorpenetrationperlevel</span>)</td>
                                    <td>Flat Magic Resist Penetration</td>
                                    <td><span id="fspellblockpenetration">fspellblockpenetration</span> (+<span id="fspellblockpenetrationperlevel">fspellblockpenetrationperlevel</span>)</td>
                                </tr>
                                <tr>
                                    <td>% Armor Penetration</td>
                                    <td><span id="parmorpenetration">parmorpenetration</span>% (+<span id="parmorpenetrationperlevel">parmorpenetrationperlevel</span>%)</td>
                                    <td>% Magic Resist Penetration</td>
                                    <td><span id="pspellblockpenetration">pspellblockpenetration</span>% (+<span id="pspellblockpenetrationperlevel">pspellblockpenetrationperlevel</span>%)</td>
                                </tr>
                                <tr>
                                    <td>Move Speed</td>
                                    <td><span id="movespeed">movespeed</span> (+<span id="movespeedperlevel">movespeedperlevel</span>)</td>
                                    <td>Attack Range</td>
                                    <td><span id="attackrange">attackrange</span> (+<span id="attackrangeperlevel">attackrangeperlevel</span>)</td>
                                </tr>
                            </table>

                        </div>
                    </div>

                </div>
            </div>
        </div>

    </body>
</html>