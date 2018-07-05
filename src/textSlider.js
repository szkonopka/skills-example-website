export class TextSlider
{
	constructor(headers, descriptions, reloadTime = 2000)
	{
			this.currentSlide = 0;
			this.slides = headers.map((header, index) => {
				return { 'header': header, 'description': descriptions[index] }
			});
			this.headers = document.querySelectorAll('#headers li h1')
			this.descriptions = document.querySelector('#descriptions p');
			this.headersAmount = this.headers.length;
			this.reloadTime = reloadTime;
	}

	init()
	{
		for(let i = 0; i < this.headersAmount; i++)
		{
				this.headers[i].innerText = this.slides[i].header;
		}

		this.deactiveHeaders();
		this.headers[this.currentSlide].classList.add('headers__item_active');
		this.descriptions.innerText = this.slides[this.currentSlide].description;

		this.startTimer();
	}

	startTimer()
	{
		setInterval(() => {
			this.showNext();
		}, this.reloadTime);
	}

	showNext()
	{
		if(this.currentSlide === this.headersAmount - 1)
		{
			this.currentSlide = 0;
		}
		else
		{
			this.currentSlide++;
		}
		this.show(this.currentSlide);
	}

	showPrevious()
	{

	}

	show(index)
	{
		this.deactiveHeaders();
		this.headers[this.currentSlide].classList.add('headers__item_active');
		this.descriptions.innerText = this.slides[this.currentSlide].description;
	}

	deactiveHeaders()
	{
		for(let i = 0; i < this.headersAmount; i++)
		{
			this.headers[i].classList.remove('headers__item_active');
		}
	}
}
