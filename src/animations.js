export function toggleMenu()
{
	const menu = getMenuDOMElem();
	const headerHamburger = getHeaderHamburgerDOMElem();

	if(menu === null || headerHamburger === null)
		return false;

	menu.classList.toggle('main-menu_active');
	headerHamburger.classList.toggle('header__hamburger_active');

	return true;
}

export function getHeaderHamburgerDOMElem() { return document.querySelector('.header__hamburger') };
export function getMenuDOMElem() { return document.querySelector('.main-menu') };
