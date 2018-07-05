class Slider
{
		constructor(
			slideNameElement = ".slide",
			rightBtnElement = "#slide-right",
			leftBtnElement = "#slide-left"
		)
		{
			this.currentSlide = 1;
			this.slides = document.querySelector(slideNameElement);
			this.slidesAmount = this.slides.length;
			this.rightBtn = document.querySelector(rightBtnElement);
			this.leftBtn = document.querySelector(leftBtnElement);
		}

		init()
		{
			for(let i = 0; i < this.slidesAmount; i++)
			{
				Object.assign(slide.style {
					'position': 'absolute',
					'left': (i * 100) + '%',
					'width': '100%'
					'transition': 'left ' + 1 + 's',
					'overflow': 'hidden'
				})
			}
		}

		slideRight()
		{

		}

		slideLeft()
		{

		}
}

export default Slider;
