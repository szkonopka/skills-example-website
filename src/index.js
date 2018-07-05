import * as animLib from './animations.js';
import { TextSlider } from './textSlider.js'

const headers = [
	"test1",
	"test2",
	"test3"
]

const descriptions = [
	"des1",
	"des2",
	"des3"
]

document.addEventListener("DOMContentLoaded", () => {
	const headerHamburger = animLib.getHeaderHamburgerDOMElem();

	headerHamburger.addEventListener("click", () => {
		animLib.toggleMenu();
	});

	const textSlider = new TextSlider(headers, descriptions);
	textSlider.init();
})
