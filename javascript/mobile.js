function bTestForPhone() {
	var aSmartPhoneUserAgentStrings = new Array('iPhone', 'Nokia', 'MOT', 'Android', 'PalmSource', 'webOS', 'SAMSUNG', 'SonyEricsson', 'LG', 'HTC', 'BlackBerry', 'Windows Phone');
	for (var i=0; i < aSmartPhoneUserAgentStrings.length; ++i ) {
		var oRegularExpression = new RegExp(aSmartPhoneUserAgentStrings[i], "i");
		if (navigator.userAgent.match(oRegularExpression)) return true;
	}
	return false;
}

function vAlertOnPhone(a_sMessageMobile, a_sMessageDesktop) {
	if (bTestForPhone()) alert(a_sMessageMobile);
	else alert(a_sMessageDesktop);
}

function vSwitchToMobile(a_sMobileDomain) {
	if (bTestForPhone()) document.location = a_sMobileDomain;
}
