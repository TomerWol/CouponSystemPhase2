function autoLogin() {

	function getCookieValue(cname) {
		var name = cname + "=";
		var decodedCookie = decodeURIComponent(document.cookie);
		var ca = decodedCookie.split(';');
		for (var i = 0; i < ca.length; i++) {
			var c = ca[i];
			while (c.charAt(0) == ' ') {
				c = c.substring(1);
			}
			if (c.indexOf(name) == 0) {
				return c.substring(name.length, c.length);
			}
		}
		return "";
	}
	
	var userName = getCookieValue("userName");
	var password = getCookieValue("password");
	var type = getCookieValue("type");

	if (userName != null && password != null && type != null) {
		document.getElementById("user").value = userName;
		document.getElementById("pass").value = password;
		document.getElementById("type").value = type;
	}
}