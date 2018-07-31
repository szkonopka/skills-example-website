import * as animLib from './animations.js';
import { TextSlider } from './textSlider.js'

const headers = [
	"<i>The biggest</i> VR arcade in Wrocław",
	"<i>About 100+</i> VR stands",
	"<i>Console gaming</i> zone"
]

const descriptions = [
	"Lorem Ipsum jest tekstem stosowanym w <strong>przemyśle poligraficznym</strong>. Został po raz pierwszy użyty w XV w. przez <strong>nieznanego drukarza</strong>.",
	"Zaczął być <strong>używany przemyśle elektronicznym</strong>, pozostając praktycznie niezmienionym. Spopularyzował się w latach 60. XX w. wraz z publikacją arkuszy Letrasetu, zawierających fragmenty <strong>Lorem Ipsum</strong>.",
	"<strong>Lorem Ipsum</strong> nie jest tylko przypadkowym tekstem. Ma ono korzenie w klasycznej łacińskiej literaturze z 45 roku przed <strong>Chrystusem</strong>, czyli ponad 2000 lat temu!"
]

/*
const popUpWindow = `
	<div id="more-games" class="pop-up">
		<ul class="games">
			<li>Games</li>
		</ul>
	</div>
`
*/

document.addEventListener("DOMContentLoaded", () => {
	const headerHamburger = animLib.getHeaderHamburgerDOMElem();

	loadBookmarkContent(0);

	headerHamburger.addEventListener("click", () => {
		animLib.toggleMenu();
	});

	const moreGamesBtn = animLib.getMoreGamesBtnDOMElem();

	moreGamesBtn.addEventListener("click", () => {
		animLib.showGames();
	});

	const bookmarks = animLib.getBookmarksDOMElems();

	for(let i = 0; i < bookmarks.length; i++)
	{
			bookmarks[i].addEventListener("click", () => {
				animLib.deactiveAllBookmarks(bookmarks);
				animLib.activeBookmark(bookmarks, i);
				loadBookmarkContent(i)
			});
	}

	const textSlider = new TextSlider(headers, descriptions);
	textSlider.init();
})

function loadBookmarkContent(index)
{
	let fetchedUrl = "http://localhost:3000/";

	switch(index)
	{
		case 1:
			fetchedUrl = fetchedUrl + "apps.html";
			break;
		case 2:
			fetchedUrl = fetchedUrl + "movies.html";
			break;
		default:
			fetchedUrl = fetchedUrl + "games.html";
			break;
	}

	fetch(fetchedUrl)
	.then(response => {
		return response.text()
	})
	.then(html => {
		document.querySelector('.examples_library').innerHTML = html;
	});
}
