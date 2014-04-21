var championInfo;
var championStats;
var version;
var champions = {};
var keys = {};

var championInfo = {};

$(document).ready(function() {
    $().AJAX("../etc/riotAPICalls.php", function(json) {
        championInfo = json;
        version = championInfo.version;
        console.log(championInfo);
        for (var i in championInfo.data) {
            champions[championInfo.data[i].key] = championInfo.data[i];
            keys[championInfo.data[i].name] = championInfo.data[i].key;
            $("#addChampList").append("<option value='" + championInfo.data[i].id + "'>" + championInfo.data[i].name + "</option>");
        }

    }, [{
        key: "url",
        value: "https://prod.api.pvp.net/api/lol/static-data/euw/v1.2/champion"
    }, {
        key: "options",
        value: [{
            key: "champData",
            value: "keys,image"
        }]
    }], {
        content: "json",
    });

    $().AJAX("../etc/riotAPICalls.php", function(json) {
        championStats = json;
        console.log(championStats);

    }, [{
        key: "url",
        value: "https://prod.api.pvp.net/api/lol/static-data/euw/v1.2/champion"
    }, {
        key: "options",
        value: [{
            key: "champData",
            value: "stats"
        }]
    }], {
        content: "json",
    });

    $("#addChampButton").click(function(e) {
        $.AJAX("../etc/championInfo.php", function(text, readyState, status, elem) {
            if (!championInfo["Riven"]) {
                championInfo["Riven"] = [];
            }
            var id = "Riven"/* + Math.random()*/;
            championInfo["Riven"].push(id);
            $(text).attr("id", id).appendTo("#selectedChamps");
        }, [{
            key: "name",
            value: "Riven"
        }, {
            key: "title",
            value: "the Exile"
        }, {
            key: "version",
            value: "4.5.4"
        }, {
            key: "splash",
            value: "Riven.png"
        }], {
            args: e.target,
            content: "text",
        });
    });
});

function fillChampionData(data, id) {
    for (var i in data) {
        //console.log($("#" + id).children(1));
        $("#" + id).children(1).find({className: i}).text(data[i]);
        
    }
}
