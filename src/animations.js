export function toggleMenu()
{
	const menu = getMenuDOMElem();
	const headerHamburger = getHeaderHamburgerDOMElem();
	const logoSrcLight = './img/vr-logo-w.svg';
	const logoSrcDark = './img/vr-logo.svg';
	const logoContainer = document.querySelector('#logo img');
	const currentLogoSrc = logoContainer.getAttribute('src');

	if(menu === null || headerHamburger === null)
		return false;

	menu.classList.toggle('main-menu_active');
	headerHamburger.classList.toggle('header__hamburger_active');

	if(currentLogoSrc === logoSrcLight)
		setTimeout(() => {
			logoContainer.setAttribute('src', logoSrcDark);
		}, 200);
	else
		logoContainer.setAttribute('src', logoSrcLight);

	return true;
}

export function showGames()
{
	const windowPopUp = getWindowPopUp();
	windowPopUp.classList.toggle('library_active');
}

export function getHeaderHamburgerDOMElem() { return document.querySelector('.header__hamburger') };
export function getMenuDOMElem() { return document.querySelector('.main-menu') };
export function getMoreGamesBtnDOMElem() { return document.querySelector('#more-games') };
function getWindowPopUp() { return document.querySelector('.library') };
