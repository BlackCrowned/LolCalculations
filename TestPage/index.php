<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
"http://www.w3.org/TR/html4/loose.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <link rel="stylesheet" href="../style/style_1.css" type="text/css" media="screen" title="no title" charset="utf-8"/>
        <script type="text/javascript" src="/OPLib/OPLib.js"></script>
        <title>Test Page</title>
    </head>
    <body>

        <div class="Selectables">
            <div id="c1" class="Selectable">
                Container 1
            </div>
            <div id="c2" class="Selectable">
                Container 2
            </div>
            <div id="c3" class="Selectable">
                Container 3
            </div>
            <div id="c4" class="Selectable">
                Container 4
            </div>
        </div>
        <button id="toggle1">
            Toggle 1
        </button>
        <button id="toggle2">
            Toggle 2
        </button>
        <button id="toggle3">
            Toggle 3
        </button>
        <button id="toggle4">
            Toggle 4
        </button>
        <button id="toggleall">
            Toggle all
        </button>
        <br />
        <button id="stop1">
            Stop 1
        </button>
        <button id="stop2">
            Stop 2
        </button>
        <button id="stop3">
            Stop 3
        </button>
        <button id="stop4">
            Stop 4
        </button>
        <button id="stopall">
            Stop all
        </button>
        <br />
        <button id="css1">
            Change CSS 1
        </button>
        <button id="css2">
            Change CSS 2
        </button>
        <button id="css3">
            Change CSS 3
        </button>
        <button id="css4">
            Change CSS 4
        </button>
        <button id="cssall">
            Change CSS all
        </button>

        <script type="text/javascript">
            $("button").css("width", 50);

            $("#toggle1").click(function(e) {
                $("#c1").toggle(5000);
            });
            $("#toggle2").click(function(e) {
                $("#c2").toggle(5000);
            });
            $("#toggle3").click(function(e) {
                $("#c3").toggle(5000);
            });
            $("#toggle4").click(function(e) {
                $("#c4").toggle(5000);
            });
            $("#toggleall").click(function(e) {
                $(".Selectable").toggle(5000);
            });
            $("#stop1").click(function(e) {
                $("#c1").stop(5000);
            });
            $("#stop2").click(function(e) {
                $("#c2").stop(5000);
            });
            $("#stop3").click(function(e) {
                $("#c3").stop(5000);
            });
            $("#stop4").click(function(e) {
                $("#c4").stop(5000);
            });
            $("#stopall").click(function(e) {
                $(".Selectable").stop(5000);
            });
            $("#css1").click(function() {
                $("#c1").css("width", 100);
            });
            $("#css2").click(function(e) {
                $("#c2").css("width", 100);
            });
            $("#css3").click(function(e) {
                $("#c3").css("width", 100);
            });
            $("#css4").click(function(e) {
                $("#c4").css("width", 100);
            });
            $("#cssall").click(function(e) {
                $(".Selectable").css("width", 100);
            });
        </script>
    </body>
</html>