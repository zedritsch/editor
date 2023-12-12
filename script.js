function toggleFullscreen() {
	/** @type {HTMLImageElement} */
	const ICON = document.getElementById("maximize");

	if (document.fullscreenElement) {
		document.exitFullscreen();
		ICON.src = "img/open_fullscreen.svg";

		return;
	}

	document.body.requestFullscreen();
	ICON.src = "img/close_fullscreen.svg";
}

/** @param {number} index */
function switchSidebar(index) {
	const NAV = document.getElementsByTagName("nav")[0].children;
	const ASIDE = document.getElementsByTagName("aside")[0];

	if (NAV.item(index).className == "active") {
		ASIDE.className = "hidden";
		NAV.item(index).className = "";

		return;
	}

	for (let i = 0; i < NAV.length && i < ASIDE.children.length; i++) {
		if (i == 2) {
			continue;
		}

		NAV.item(i).className = "";
		ASIDE.children.item(i).className = "hidden";
	}

	ASIDE.children.item(index).className = "";
	NAV.item(index).className = "active";
	ASIDE.className = "";
}