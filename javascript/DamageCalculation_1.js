var championInfo;
var version;
var champions = {};
var ids = {};
var itemInfo;

$(document).ready(function() {

    $("#addChampList").hide(0);
    $("#addChampButton").hide(0);

    $().AJAX("../etc/riotAPICalls.php", function(json) {
        championInfo = json;
        version = championInfo.version;
        console.log("Champions:");
        console.log(championInfo);
        for (var i in championInfo.data) {
            champions[championInfo.data[i].id] = championInfo.data[i];
            ids[championInfo.data[i].name] = championInfo.data[i].id;
        }
        var sorted = [];
        for (var i in ids) {
            sorted.push([i, ids[i]]);
        }
        sorted.sort();
        for (var i = 0; i < sorted.length; i++) {
            $("#addChampList").append("<option value='" + sorted[i][1] + "'>" + sorted[i][0] + "</option>");
        }
        $("#addChampList").slideDown("slow");
        $("#addChampButton").slideDown("slow");

    }, [{
        key: "url",
        value: "https://prod.api.pvp.net/api/lol/static-data/euw/v1.2/champion"
    }, {
        key: "options",
        value: [{
            key: "champData",
            value: "image,stats,spells"
        }, {
            key: "region",
            value: "euw"
        }]
    }], {
        content: "json",
    });
    $().AJAX("../etc/riotAPICalls.php", function(json) {
        itemInfo = json;
        console.log("Items:");
        console.log(itemInfo);
    }, [{
        key: "url",
        value: "https://prod.api.pvp.net/api/lol/static-data/euw/v1.2/item"
    }, {
        key: "options",
        value: [{
            key: "itemListData",
            //value: "from,gold,image,into,maps,requiredChampion,stats,tags,tree"
            value: "all"
        }, {
            key: "region",
            value: "euw"
        }]
    }], {
        content: "json",
    });

    $("#addChampButton").click(function(e) {
        var champ = champions[$("#addChampList").find({tag: "option"})[$("#addChampList")[0].selectedIndex].value].name;
        if (!championInfo[champ]) {
            championInfo[champ] = [];
        }
        var i = championInfo[champ].length;
        $.AJAX("../etc/championInfo.php", function(text, readyState, status, champion) {

            var i = championInfo[champion].length;
            var id = champion + i;
            //Data Structure
            championInfo[champion].push({
                id: id,
                i: i,
                items: getItemsData({}, 3340, "ChampionTrinket"),
                runes: {},
                masteries: {},
                level: 1,
                abilities: getAbilityData(champion),
                championStats: getChampionData(champion),
                stats: {}
            });
            $(text).appendTo("#selectedChamps");
            setStats(champion, i);
            $("#" + champion + i).children(1, 1).attr("data-name", champion).attr("data-i", i);
            fillChampionInfo(championInfo[champion][i].stats, champion, i);
            fillChampionInfo(championInfo[champion][i].abilities, champion, i);
            fillChampionInfo(championInfo[champion][i].items, champion, i);
            fillChampionInfo({
                ChampionLevel: championInfo[champion][i].level
            }, champion, i);

            $("#" + id).children(1).find({
                className: "ChampionRemove"
            }).click(ChampionRemove);
            $("#" + id).children(1).find({
                className: "ChampionSetlevel1"
            }).click(ChampionSetLevel1);
            $("#" + id).children(1).find({
                className: "ChampionSetlevelp1"
            }).click(ChampionIncreaseLevel);
            $("#" + id).children(1).find({
                className: "ChampionSetlevelm1"
            }).click(ChampionDecreaseLevel);
            $("#" + id).children(1).find({
                className: "ChampionSetlevel18"
            }).click(ChampionSetLevel18);

        }, [{
            key: "name",
            value: champ
        }, {
            key: "i",
            value: i
        }, {
            key: "title",
            value: champions[ids[champ]].title
        }, {
            key: "version",
            value: championInfo.version
        }, {
            key: "splash",
            value: champions[ids[champ]].image.full
        }], {
            args: champ,
            content: "text",
        });
    });
});

function fillChampionInfo(data, name, i) {
    for (var c in data) {
        if ( typeof data[c] === "string" && data[c].match(/http:\/\//g)) {
            fillImageSource(data[c], c, name, i);
        }
        else if ( typeof data[c] === "string") {
            fillChampionText(data[c], c, name, i);
        }
        else {
            fillChampionData(data[c], c, name, i);
        }
    }
}

function fillChampionData(data, c, name, i) {
    var id = name + i;
    $("#" + id).children(1).find({
        className: c
    }).text(Math.round(data * 1000) / 1000);
}

function fillChampionText(data, c, name, i) {
    var id = name + i;
    $("#" + id).children(1).find({
        className: c
    }).text(data);
}

function fillImageSource(data, c, name, i) {
    var id = name + i;
    $("#" + id).children(1).find({
        className: c
    }).attr("src", data);
}

function getItemsData(oldData, itemId, slotId) {
    var data = oldData;
    if (!data[slotId]) {
        data[slotId] = {};
    }
    data[slotId] = getImageUrl(version, itemInfo.data[itemId].image.group, itemInfo.data[itemId].image.full);

    return data;
}

function getAbilityData(name) {
    var data = {};

    data.ChampionQImage = getImageUrl(version, champions[ids[name]].spells[0].image.group, champions[ids[name]].spells[0].image.full);
    data.ChampionWImage = getImageUrl(version, champions[ids[name]].spells[1].image.group, champions[ids[name]].spells[1].image.full);
    data.ChampionEImage = getImageUrl(version, champions[ids[name]].spells[2].image.group, champions[ids[name]].spells[2].image.full);
    data.ChampionRImage = getImageUrl(version, champions[ids[name]].spells[3].image.group, champions[ids[name]].spells[3].image.full);
    //data.ChampionQStats = champions[ids[name]].spells[0].leveltip;
    //data.ChampionWStats = champions[ids[name]].spells[1].leveltip;
    //data.ChampionEStats = champions[ids[name]].spells[2].leveltip;
    //data.ChampionRStats = champions[ids[name]].spells[3].leveltip;
    return data;
}

function getChampionData(name) {
    var data = {};
    data.ChampionHp = champions[ids[name]].stats.hp;
    data.ChampionHpperlevel = champions[ids[name]].stats.hpperlevel;
    data.ChampionHpregen = champions[ids[name]].stats.hpregen;
    data.ChampionHpregenperlevel = champions[ids[name]].stats.hpregenperlevel;
    data.ChampionMp = champions[ids[name]].stats.mp;
    data.ChampionMpperlevel = champions[ids[name]].stats.mpperlevel;
    data.ChampionMpregen = champions[ids[name]].stats.mpregen;
    data.ChampionMpregenperlevel = champions[ids[name]].stats.mpregenperlevel;
    data.ChampionAttackdamage = champions[ids[name]].stats.attackdamage;
    data.ChampionAttackdamageperlevel = champions[ids[name]].stats.attackdamageperlevel;
    data.ChampionAbilitypower = 0;
    data.ChampionAbilitypowerperlevel = 0;
    data.ChampionAttackspeedoffset = 0.625 + champions[ids[name]].stats.attackspeedoffset;
    data.ChampionAttackspeedperlevel = champions[ids[name]].stats.attackspeedperlevel;
    data.ChampionCooldownreduction = 0;
    data.ChampionCooldownreductionperlevel = 0;
    data.ChampionLifesteal = 0;
    data.ChampionLifestealperlevel = 0;
    data.ChampionCrit = champions[ids[name]].stats.crit;
    data.ChampionCritperlevel = champions[ids[name]].stats.critperlevel;
    data.ChampionArmor = champions[ids[name]].stats.armor;
    data.ChampionArmorperlevel = champions[ids[name]].stats.armorperlevel;
    data.ChampionSpellblock = champions[ids[name]].stats.spellblock;
    data.ChampionSpellblockperlevel = champions[ids[name]].stats.spellblockperlevel;
    data.ChampionFarmorpenetration = 0;
    data.ChampionFarmorpenetrationperlevel = 0;
    data.ChampionFspellpenetration = 0;
    data.ChampionFspellpenetrationperlevel = 0;
    data.ChampionParmorpenetration = 0;
    data.ChampionParmorpenetrationperlevel = 0;
    data.ChampionPspellpenetration = 0;
    data.ChampionPspellpenetrationperlevel = 0;
    data.ChampionMovespeed = champions[ids[name]].stats.movespeed;
    data.ChampionMovespeedperlevel = 0;
    data.ChampionAttackrange = champions[ids[name]].stats.attackrange;
    data.ChampionAttackrangeperlevel = 0;

    return data;
}

function setStats(name, i) {
    for (var j in championInfo[name][i].championStats) {
        if (j.indexOf("perlevel") == -1) {
            if (j == "ChampionAttackspeedoffset") {
                championInfo[name][i].stats[j] = championInfo[name][i].championStats[j] * Math.pow(1 + championInfo[name][i].championStats["ChampionAttackspeedperlevel"] / 100, championInfo[name][i].level);
            }
            else {
                championInfo[name][i].stats[j] = championInfo[name][i].championStats[j] + championInfo[name][i].level * championInfo[name][i].championStats[j + "perlevel"];
            }
        }
        else {
            championInfo[name][i].stats[j] = championInfo[name][i].championStats[j];
        }

    }
    fillChampionInfo(championInfo[name][i].stats, name, i);
}

/*
 ******************************************************************************
 ******************************onClick-Handler*********************************
 ******************************************************************************
 */

function ChampionRemove(e) {
    var name = e.target.getAttribute("data-name");
    var i = e.target.getAttribute("data-i");
    $("#" + name + i).fadeOut("slow", "", function(elem) {
        elem.parentNode.removeChild(elem);
    });
}

function ChampionSetLevel1(e) {
    var name = e.target.getAttribute("data-name");
    var i = e.target.getAttribute("data-i");
    fillChampionInfo({
        ChampionLevel: championInfo[name][i].level = 1
    }, name, i);
    setStats(name, i);
}

function ChampionIncreaseLevel(e) {
    var name = e.target.getAttribute("data-name");
    var i = e.target.getAttribute("data-i");
    fillChampionInfo({
        ChampionLevel: ++championInfo[name][i].level >= 18 ? championInfo[name][i].level = 18 : championInfo[name][i].level
    }, name, i);
    setStats(name, i);
}

function ChampionDecreaseLevel(e) {
    var name = e.target.getAttribute("data-name");
    var i = e.target.getAttribute("data-i");
    fillChampionInfo({
        ChampionLevel: --championInfo[name][i].level <= 1 ? championInfo[name][i].level = 1 : championInfo[name][i].level
    }, name, i);
    setStats(name, i);
}

function ChampionSetLevel18(e) {
    var name = e.target.getAttribute("data-name");
    var i = e.target.getAttribute("data-i");
    fillChampionInfo({
        ChampionLevel: championInfo[name][i].level = 18
    }, name, i);
    setStats(name, i);
}

function getImageUrl(version, group, file) {
    return "http://ddragon.leagueoflegends.com/cdn/" + version + "/img/" + group + "/" + file;
}
