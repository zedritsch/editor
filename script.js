const nav_tabs = document.getElementsByTagName("a");
const sidebars = document.getElementsByTagName("aside");

/** @param {number} index */
function switchSidebar(index) {
	for (let i = 0; i < 3; i++) {
		nav_tabs[i].className = "";
		sidebars[i + 1].className = "hidden";
	}

	nav_tabs[index].className = "active";
	sidebars[index + 1].className = "";
}

function toggleFullscreen() {
	/** @type {HTMLImageElement} */
	const icon = document.getElementById("maximize");

	if (document.fullscreenElement) {
		document.exitFullscreen();
		icon.src = "img/open_fullscreen.svg";

		return;
	}

	document.documentElement.requestFullscreen();
	icon.src = "img/close_fullscreen.svg";
}