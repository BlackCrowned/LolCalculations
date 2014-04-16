$(document).ready(function() {
    var championInfo;
    var version;
    var champions = {};
    var keys = {};

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
        method: "post",
        content: "json",
        async: true
    });

    $("#addChampButton").click(function(e) {
        //TODO
    });
});

