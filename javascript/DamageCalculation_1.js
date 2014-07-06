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
            ids[championInfo.data[i].key] = championInfo.data[i].id;
        }
        var sorted = [];
        for (var i in ids) {
            sorted.push([i, ids[i]]);
        }
        sorted.sort();
        for (var i = 0; i < sorted.length; i++) {
            $("#addChampList").append("<option value='" + sorted[i][1] + "'>" + champions[sorted[i][1]].name + "</option>");
        }
        $("#addChampList").slideDown("slow");
        $("#addChampButton").slideDown("slow");

    }, {
        url: "https://global.api.pvp.net/api/lol/static-data/euw/v1.2/champion",
        options: [{
            key: "champData",
            value: "image,stats,spells,passive"
        }, {
            key: "region",
            value: "euw"
        }]
    }, {
        content: "json",
    });
    $().AJAX("../etc/riotAPICalls.php", function(json) {
        itemInfo = json;
        console.log("Items:");
        console.log(itemInfo);
    }, {
        url: "https://global.api.pvp.net/api/lol/static-data/euw/v1.2/item",
        options: [{
            key: "itemListData",
            //value: "from,gold,image,into,maps,requiredChampion,stats,tags,tree"
            value: "all"
        }, {
            key: "region",
            value: "euw"
        }]
    }, {
        content: "json",
    });

    $("#addChampButton").click(function(e) {
        var champ = champions[$("#addChampList option")[$("#addChampList")[0].selectedIndex].value].key;
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
                abilityLevel: getAbilityLevelData(champion),
                itemTooltips: getItemTooltipData({}, 3340, "ChampionTrinketTooltip"),
                abilityTooltips: getAbilityTooltipData({}, "P", "ChampionPTooltip", champion),
                abilities: getAbilityData(champion),
                championStats: getChampionData(champion),
                stats: {}
            });

            //TEst
            championInfo[champion][i].items = getItemsData(championInfo[champion][i].items, 3072, "ChampionItem1");
            championInfo[champion][i].items = getItemsData(championInfo[champion][i].items, 3072, "ChampionItem2");
            championInfo[champion][i].items = getItemsData(championInfo[champion][i].items, 3072, "ChampionItem3");
            championInfo[champion][i].items = getItemsData(championInfo[champion][i].items, 3072, "ChampionItem4");
            championInfo[champion][i].items = getItemsData(championInfo[champion][i].items, 3072, "ChampionItem5");
            championInfo[champion][i].items = getItemsData(championInfo[champion][i].items, 3072, "ChampionItem6");
            championInfo[champion][i].itemTooltips = getItemTooltipData(championInfo[champion][i].itemTooltips, 3072, "ChampionItem1Tooltip");
            championInfo[champion][i].itemTooltips = getItemTooltipData(championInfo[champion][i].itemTooltips, 3072, "ChampionItem2Tooltip");
            championInfo[champion][i].itemTooltips = getItemTooltipData(championInfo[champion][i].itemTooltips, 3072, "ChampionItem3Tooltip");
            championInfo[champion][i].itemTooltips = getItemTooltipData(championInfo[champion][i].itemTooltips, 3072, "ChampionItem4Tooltip");
            championInfo[champion][i].itemTooltips = getItemTooltipData(championInfo[champion][i].itemTooltips, 3072, "ChampionItem5Tooltip");
            championInfo[champion][i].itemTooltips = getItemTooltipData(championInfo[champion][i].itemTooltips, 3072, "ChampionItem6Tooltip");
            championInfo[champion][i].abilityTooltips = getAbilityTooltipData(championInfo[champion][i].abilityTooltips, "Q", "ChampionQTooltip", champion);
            championInfo[champion][i].abilityTooltips = getAbilityTooltipData(championInfo[champion][i].abilityTooltips, "W", "ChampionWTooltip", champion);
            championInfo[champion][i].abilityTooltips = getAbilityTooltipData(championInfo[champion][i].abilityTooltips, "E", "ChampionETooltip", champion);
            championInfo[champion][i].abilityTooltips = getAbilityTooltipData(championInfo[champion][i].abilityTooltips, "R", "ChampionRTooltip", champion);

            $(text).appendTo("#selectedChamps");
            setStats(champion, i);
            $("#" + id).children(1, 1).attr("data-name", champion).attr("data-i", i);
            fillChampionInfo(championInfo[champion][i].stats, champion, i);
            fillChampionInfo(championInfo[champion][i].abilities, champion, i);
            fillChampionInfo(championInfo[champion][i].items, champion, i);
            fillChampionInfo({
                ChampionLevel: championInfo[champion][i].level
            }, champion, i);
            fillChampionInfo(championInfo[champion][i].itemTooltips, champion, i);
            fillChampionInfo(championInfo[champion][i].abilityTooltips, champion, i);

            $("#" + id + " .ChampionRemove").click(ChampionRemove);
            $("#" + id + " .ChampionSetlevel1").click(ChampionSetLevel1);
            $("#" + id + " .ChampionSetlevelp1").click(ChampionIncreaseLevel);
            $("#" + id + " .ChampionSetlevelm1").click(ChampionDecreaseLevel);
            $("#" + id + " .ChampionSetlevel18").click(ChampionSetLevel18);
            $("#" + id + " .ChampionAbilityLevelUp").click(ChampionAbilityLevelUp);
            $("#" + id + " .ChampionAbilityLevelDown").click(ChampionAbilityLevelDown);
            $("#" + id + " .ChampionItem1").Tooltip("#" + id + " .ChampionItem1Tooltip");
            $("#" + id + " .ChampionItem2").Tooltip("#" + id + " .ChampionItem2Tooltip");
            $("#" + id + " .ChampionItem3").Tooltip("#" + id + " .ChampionItem3Tooltip");
            $("#" + id + " .ChampionItem4").Tooltip("#" + id + " .ChampionItem4Tooltip");
            $("#" + id + " .ChampionItem5").Tooltip("#" + id + " .ChampionItem5Tooltip");
            $("#" + id + " .ChampionItem6").Tooltip("#" + id + " .ChampionItem6Tooltip");
            $("#" + id + " .ChampionTrinket").Tooltip("#" + id + " .ChampionTrinketTooltip");
            $("#" + id + " .ChampionPImage").Tooltip("#" + id + " .ChampionPTooltip");
            $("#" + id + " .ChampionQImage").Tooltip("#" + id + " .ChampionQTooltip");
            $("#" + id + " .ChampionWImage").Tooltip("#" + id + " .ChampionWTooltip");
            $("#" + id + " .ChampionEImage").Tooltip("#" + id + " .ChampionETooltip");
            $("#" + id + " .ChampionRImage").Tooltip("#" + id + " .ChampionRTooltip");
            

        }, {
            name: champ,
            i: i,
            title: champions[ids[champ]].title,
            version: version,
            splash: champions[ids[champ]].image.full
        }, {
            args: champ,
            content: "text",
        });
    });
});

function fillChampionInfo(data, name, i) {
    for (var c in data) {
        if ( typeof data[c] === "string" && data[c].match(/^url:/)) {
            data[c] = data[c].replace(/url:/, "");
            fillImageSource(data[c], c, name, i);
        }
        else if ( typeof data[c] === "string") {
            fillChampionText(data[c], c, name, i);
        }
        else if ( typeof data[c] === "number") {
            fillChampionData(data[c], c, name, i);
        }
        else if (data[c] instanceof Node) {
            fillChampionElem(data[c], c, name, i);
        }
        else if ( typeof data[c] === "object") {
            fillElemAjax(data[c], c, name, i);
        }
    }
}

function fillChampionData(data, c, name, i) {
    var id = name + i;
    $("#" + id + " ." + c).text(Math.round(data * 1000) / 1000);
}

function fillChampionText(data, c, name, i) {
    var id = name + i;
    $("#" + id + " ." + c).text(data);
}

function fillImageSource(data, c, name, i) {
    var id = name + i;
    $("#" + id + " ." + c).attr("src", data);
}

function fillChampionElem(data, c, name, i) {
    var id = name + i;
    $("#" + id + " ." + c).html("").append(data);
}

function fillElemAjax(data, c, name, i) {
    var id = name + i;
    $("#" + id + " ." + c).load(data.url, data.header, {
        method: "post",
        async: false,
    });
};

function getItemsData(oldData, itemId, slotId) {
    var data = oldData;
    if (!data[slotId]) {
        data[slotId] = {};
    }
    data[slotId] = "url:" + getImageUrl(version, itemInfo.data[itemId].image.group, itemInfo.data[itemId].image.full);

    return data;
}

function getAbilityLevelData(name) {
    var data = {};
    data.ChampionPLevel = 0;
    data.ChampionPLevelMax = 1;
    data.ChampionQLevel = 0;
    data.ChampionQLevelMax = champions[ids[name]].spells[0].maxrank;
    data.ChampionWLevel = 0;
    data.ChampionWLevelMax = champions[ids[name]].spells[1].maxrank;
    data.ChampionELevel = 0;
    data.ChampionELevelMax = champions[ids[name]].spells[2].maxrank;
    data.ChampionRLevel = 0;
    data.ChampionRLevelMax = champions[ids[name]].spells[3].maxrank;

    return data;
}

function getAbilityData(name) {
    var data = {};

    data.ChampionPImage = "url:" + getImageUrl(version, champions[ids[name]].passive.image.group, champions[ids[name]].passive.image.full);
    data.ChampionQImage = "url:" + getImageUrl(version, champions[ids[name]].spells[0].image.group, champions[ids[name]].spells[0].image.full);
    data.ChampionWImage = "url:" + getImageUrl(version, champions[ids[name]].spells[1].image.group, champions[ids[name]].spells[1].image.full);
    data.ChampionEImage = "url:" + getImageUrl(version, champions[ids[name]].spells[2].image.group, champions[ids[name]].spells[2].image.full);
    data.ChampionRImage = "url:" + getImageUrl(version, champions[ids[name]].spells[3].image.group, champions[ids[name]].spells[3].image.full);
    data.ChampionPLevel = setSkillsLevelBar(name, "ChampionPLevel", 0);
    data.ChampionQLevel = setSkillsLevelBar(name, "ChampionQLevel", 0);
    data.ChampionWLevel = setSkillsLevelBar(name, "ChampionWLevel", 0);
    data.ChampionELevel = setSkillsLevelBar(name, "ChampionELevel", 0);
    data.ChampionRLevel = setSkillsLevelBar(name, "ChampionRLevel", 0);
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

function getItemTooltipData(oldData, itemId, slotId) {
    var data = oldData;
    if (!data[slotId]) {
        data[slotId] = {};
    }

    var name = itemInfo.data[itemId].name;
    var gold = itemInfo.data[itemId].gold.total;
    var description = itemInfo.data[itemId].description;
    var image = itemInfo.data[itemId].image.full;

    data[slotId] = {
        url: "../etc/itemTooltip.php",
        header: {
            name: name,
            gold: gold,
            description: description,
            version: version,
            image: image,
        }
    };

    return data;
};

function getAbilityTooltipData(oldData, abilityName, slotId, championName) {
    var data = oldData;
    if (!data[slotId]) {
        data[slotId] = {};
    }

    var passive;
    var abilityId;
    switch(abilityName) {
        case "P":
        case "Passive":
            passive = 1;
            abilityId = -1;
            abilityName = "Passive";
            break;
        case "Q":
            passive = 0;
            abilityId = 0;
            break;
        case "W":
            passive = 0;
            abilityId = 1;
            break;
        case "E":
            passive = 0;
            abilityId = 2;
            break;
        case "R":
            passive = 0;
            abilityId = 3;
            break;
    }

    var name;
    var description;
    var cooldown;
    var cost;
    var effect;
    var image;

    if (passive == 1) {
        name = champions[ids[championName]].passive.name;
        description = champions[ids[championName]].passive.description;
        cooldown = champions[ids[championName]].passive.cooldownBurn;
        cost = "No cost";
        effect = champions[ids[championName]].passive.effect;
        image = champions[ids[championName]].passive.image.full;
    }
    else {
        name = champions[ids[championName]].spells[abilityId].name;
        description = champions[ids[championName]].spells[abilityId].description;
        cooldown = champions[ids[championName]].spells[abilityId].cooldownBurn;
        if (champions[ids[championName]].spells[abilityId].costBurn == 0) {
            cost = "No cost";
        }
        else {
            cost = champions[ids[championName]].spells[abilityId].costBurn + " " + champions[ids[championName]].spells[abilityId].costType;
        }
        effect = champions[ids[championName]].spells[abilityId].effect;
        image = champions[ids[championName]].spells[abilityId].image.full;
    }

    data[slotId] = {
        url: "../etc/abilityTooltip.php",
        header: {
            name: name,
            description: description,
            cooldown: cooldown,
            cost: cost,
            effect: effect,
            version: version,
            image: image,
            passive: passive,
            abilityName: abilityName,
        }
    };
    return data;
};

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

function setSkillsLevelBar(name, abilityId, level) {
    //TODO
    var maxrank;
    var spellId;
    var elem;

    if (abilityId == "ChampionPLevel") {
        maxrank = 1;
        spellId = 0;
    }
    else {
        switch (abilityId) {
            case "ChampionQLevel":
                spellId = 0;
                break;
            case "ChampionWLevel":
                spellId = 1;
                break;
            case "ChampionELevel":
                spellId = 2;
                break;
            case "ChampionRLevel":
                spellId = 3;
        }
        maxrank = champions[ids[name]].spells[spellId].maxrank;
    }

    elem = $("<div></div>");
    var width = 1 / maxrank * 100;
    for (var i = 0; i < level; i++) {
        elem = $(elem).append("<span class='ChampionAbilityLevel' data-champion-ability-set='true' style='width:" + width + "%;'></span>");
    }
    for (var i = 0; i < (maxrank - level); i++) {
        elem = $(elem).append("<span class='ChampionAbilityLevel' data-champion-ability-set='false' style='width:" + width + "%;'></span>");
    }
    return elem[0];
};

/*
 ******************************************************************************
 ******************************onClick-Handler*********************************
 ******************************************************************************
 */

function ChampionRemove(e) {
    var name = e.target.getAttribute("data-name");
    var i = e.target.getAttribute("data-i");
    $("#" + name + i).fadeOut("fast", "", function(elem) {
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

function ChampionAbilityLevelUp(e) {
    var name = $(e.target).attr("data-name");
    var i = $(e.target).attr("data-i");
    var abilityId = "";
    var data = {};

    if ($(e.target).hasClass("ChampionPLevelUp")) {
        abilityId = "ChampionPLevel";
    }
    else if ($(e.target).hasClass("ChampionQLevelUp")) {
        abilityId = "ChampionQLevel";
    }
    else if ($(e.target).hasClass("ChampionWLevelUp")) {
        abilityId = "ChampionWLevel";
    }
    else if ($(e.target).hasClass("ChampionELevelUp")) {
        abilityId = "ChampionELevel";
    }
    else if ($(e.target).hasClass("ChampionRLevelUp")) {
        abilityId = "ChampionRLevel";
    }

    if (championInfo[name][i].abilityLevel[abilityId] >= championInfo[name][i].abilityLevel[abilityId + "Max"]) {
        championInfo[name][i].abilityLevel[abilityId] = championInfo[name][i].abilityLevel[abilityId + "Max"];
        data[abilityId] = setSkillsLevelBar(name, abilityId, championInfo[name][i].abilityLevel[abilityId]);
    }
    else {
        data[abilityId] = setSkillsLevelBar(name, abilityId, ++championInfo[name][i].abilityLevel[abilityId]);
    }

    fillChampionInfo(data, name, i);
    setStats(name, i);
}

function ChampionAbilityLevelDown(e) {
    var name = $(e.target).attr("data-name");
    var i = $(e.target).attr("data-i");
    var abilityId = "";
    var data = {};

    if ($(e.target).hasClass("ChampionPLevelDown")) {
        abilityId = "ChampionPLevel";
    }
    else if ($(e.target).hasClass("ChampionQLevelDown")) {
        abilityId = "ChampionQLevel";
    }
    else if ($(e.target).hasClass("ChampionWLevelDown")) {
        abilityId = "ChampionWLevel";
    }
    else if ($(e.target).hasClass("ChampionELevelDown")) {
        abilityId = "ChampionELevel";
    }
    else if ($(e.target).hasClass("ChampionRLevelDown")) {
        abilityId = "ChampionRLevel";
    }

    if (championInfo[name][i].abilityLevel[abilityId] <= 0) {
        championInfo[name][i].abilityLevel[abilityId] = 0;
        data[abilityId] = setSkillsLevelBar(name, abilityId, championInfo[name][i].abilityLevel[abilityId]);
    }
    else {
        data[abilityId] = setSkillsLevelBar(name, abilityId, --championInfo[name][i].abilityLevel[abilityId]);
    }

    fillChampionInfo(data, name, i);
    setStats(name, i);
}

function getImageUrl(version, group, file) {
    return "http://ddragon.leagueoflegends.com/cdn/" + version + "/img/" + group + "/" + file;
}
