<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
"http://www.w3.org/TR/html4/loose.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
		<link rel="stylesheet" href="../style/style_1.css" type="text/css" media="screen" title="no title" charset="utf-8"/>
		<script type="text/javascript" src="/OPLib/OPLib.js"></script>
		<title>Database Page</title>
	</head>
	<body>

		<form>
			<fieldset>
				<legend>Basic MySQL-Options</legend>
				<label>Database</label>
				<input type="text" name="database" placeholder="Database" />
				<br />
				<label>Tablename</label>
				<input type="text" name="table" placeholder="Tablename"/>
				<br />
				<label>Action</label>
				<input type="text" name="action" placeholder="Action"/>
				<br />
			</fieldset>
			<fieldset id="optional">

			</fieldset>
			<fieldset>
				<input type="submit" value="Run Query"/>
			</fieldset>
		</form>

		<script type="text/javascript">
			$(document).ready(function() {
				$("input[name=table]").events("input", function(e) {
					if ($(this).attr("value") == "champions") {
						$("input[name=insertOptions]").attr("value", "(ID, CName, CKey)");
					}
				});
				$("input[name=action]").events("input", function(e) {
					if ($(this).attr("value") == "insert") {
						$("#optional").html("");
						$("#optional").append("<label>Options</label>");
						$("#optional").append("<input type='text' name='insertOptions' />");
						$("#optional").append("<br />");
						$("#optional").append("<label>Values</label>");
						$("#optional").append("<input type='text' name='insertValues' />");
						$("#optional").append("<br />");
					} else {
						$("#optional").html("");
					}
					$("input[name!=action]").events("input");
				});
				$("input[type=submit]").click(function(e) {
					e.preventDefault();
					$.AJAX("../etc/mysqli.php", function(text) {
						$("body").append(text);
					}, {
						database : $("input[name=database]").attr("value"),
						table : $("input[name=table]").attr("value"),
						action : $("input[name=action]").attr("value"),
						insertOptions : $("input[name=insertOptions]").attr("value"),
						insertValues : $("input[name=insertValues]").attr("value")
					});
				});
			});
		</script>

	</body>
</html>