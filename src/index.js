import * as animLib from './animations.js';

document.addEventListener("DOMContentLoaded", () => {
		const headerHamburger = animLib.getHeaderHamburgerDOMElem();
		headerHamburger.addEventListener("click", () => {
			animLib.toggleMenu();
		});
		
})
