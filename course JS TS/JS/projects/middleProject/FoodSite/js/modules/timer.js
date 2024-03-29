function timer(timerID, deadline) {

	//Timer method or feedback report

	let getTimeRemaining = (endtime) => {
		const t = Date.parse(endtime) - Date.parse(new Date()),
			  days = Math.floor((t / (1000 * 60 * 60 * 24))), 
			  hours = Math.floor((t / (1000 * 60 * 60) % 24)),
			  minutes = Math.floor((t / 1000 / 60) % 60),
			  seconds = Math.floor((t / 1000) % 60);

		return {
			"total": t, 
			 "days": days, 
			 "hours": hours,
			 "minutes": minutes,
			 "seconds": seconds
		};
	};


	const getZero = (num) => {
		if(num >= 0 && num <  10) {
			return `0${num}`;
		}

		return num;
	};

	const setClock = (selector, endTime) => {
		const timer = document.querySelector(selector),
			  days = timer.querySelector("#days"),
			  hours = timer.querySelector("#hours"),
			  minutes = timer.querySelector("#minutes"),
			  seconds = timer.querySelector("#seconds"), 
			  timeInterval = setInterval(updateClock, 1000);

		updateClock();

		function updateClock() {
			const t = getTimeRemaining(endTime);

			days.innerHTML = getZero(t.days);
			hours.innerHTML = getZero(t.hours); 
			minutes.innerHTML = getZero(t.minutes);
			seconds.innerHTML = getZero(t.seconds);

			if(t.total <= 0) {
				clearInterval(timeInterval);
			}
		}
	};

	setClock(timerID, deadline);

}

export default timer;