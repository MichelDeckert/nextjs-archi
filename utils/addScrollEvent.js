function isClose(element) {
	const windowScrollY = window.scrollY;
	const clientHeight = document.scrollingElement.clientHeight;

	return windowScrollY + clientHeight - element.offsetTop >= clientHeight * 0.1;
}

function showElement(element, delay, cb) {
	if (isClose(element)) {
		setTimeout(() => {
			element.style.transform = "translate(0, 0)";
			element.style.opacity = 1;
		}, delay);
		document.removeEventListener("scroll", cb);
	}
}

export function addScrollEvent(element, delay = 10) {
	document.addEventListener("scroll", function callback() {
		showElement(element, delay, callback);
	});
	document.dispatchEvent(new CustomEvent("scroll"));
}
