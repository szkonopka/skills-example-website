export class Timer
{
	constructor(ms)
	{
		this.interval = ms ? ms : 1000;
	}

	run()
	{
		const that = this;
		setInterval((runnableFunc) => {
			runnableFunc(that);
		}, this.interval);
	}
}
