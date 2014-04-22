var championInfo;
var version;
var champions = {};
var ids = {};

$(document).ready(function() {
    $().AJAX("../etc/riotAPICalls.php", function(json) {
        championInfo = json;
        version = championInfo.version;
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

    }, [{
        key: "url",
        value: "https://prod.api.pvp.net/api/lol/static-data/euw/v1.2/champion"
    }, {
        key: "options",
        value: [{
            key: "champData",
            value: "image,stats"
        }]
    }], {
        content: "json",
    });

    $("#addChampButton").click(function(e) {
        var champ = champions[$("#addChampList").find({tag: "option"})[$("#addChampList")[0].selectedIndex].value].name;
        $.AJAX("../etc/championInfo.php", function(text, readyState, status, champion) {
            if (!championInfo[champion]) {
                championInfo[champion] = [];
            }
            var i = championInfo[champion].length;
            var id = champion + i;
            //Data Structure
            championInfo[champion].push({
                id: id,
                i: i,
                items: {},
                runes: {},
                masteries: {},
                championStats: getChampionData(champion),
                stats: {}
            });
            setStats(champion, i);
            $(text).attr("id", id).appendTo("#selectedChamps");
            fillChampionData(championInfo[champion][i].stats, champion, i);
        }, [{
            key: "name",
            value: champ
        }, {
            key: "title",
            value: champions[ids[champ]].title
        }, {
            key: "version",
            value: "4.5.4"
        }, {
            key: "splash",
            value: champions[ids[champ]].image.full
        }], {
            args: champ,
            content: "text",
        });
    });
});

function fillChampionData(data, name, i) {
    var id = name + i;
    for (var i in data) {
        $("#" + id).children(1).find({
            className: i
        }).text(data[i]);
    }
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
    championInfo[name][i].stats = championInfo[name][i].championStats;
}
