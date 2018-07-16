import { Timer } from './utils.js';

export class TextSlider
{
	constructor(headers, descriptions, reloadTime = 6000)
	{
			this.currentSlide = 0;
			this.slides = headers.map((header, index) => {
				return { 'header': header, 'description': descriptions[index] }
			});

			this.headers = document.querySelectorAll('#headers li h1');
			this.descriptions = document.querySelector('#descriptions p');
			this.headersAmount = this.headers.length;
			this.reloadTime = reloadTime;
			this.loader = document.querySelector('.headers__loader_progress');
			this.counter = 0;
	}

	init()
	{
		this.headersList = document.querySelectorAll('#headers li');
		for(let i = 0; i < this.headersAmount; i++)
		{
				this.headers[i].innerHTML = this.slides[i].header;
				this.headers[i].addEventListener('click', () => {
					this.show(i);
				})
		}

		this.deactiveHeaders();
		this.headers[this.currentSlide].classList.add('headers__item_active');
		this.descriptions.innerHTML = this.slides[this.currentSlide].description;

		this.startTimer();
	}

	startTimer()
	{
		const headerSwitchInterval = setInterval(() => {
			if(this.counter === 200)
			{
				this.showNext();
			}
			this.counter++;
			Object.assign(this.loader.style, {
				'width': this.counter / 2 + '%'
			})
		}, this.reloadTime / 200);
	}

	showNext()
	{
		if(this.currentSlide === this.headersAmount - 1)
		{
			this.show(0);
		}
		else
		{
			this.show(this.currentSlide + 1);
		}

	}

	showPrevious()
	{

	}

	show(index)
	{
		this.currentSlide = index;
		this.counter = 0;
		this.deactiveHeaders();
		this.headers[this.currentSlide].classList.add('headers__item_active');
		this.descriptions.innerHTML = this.slides[this.currentSlide].description;
	}

	deactiveHeaders()
	{
		for(let i = 0; i < this.headersAmount; i++)
		{
			this.headers[i].classList.remove('headers__item_active');
		}
	}
}
