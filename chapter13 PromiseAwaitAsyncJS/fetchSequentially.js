function fetchSequentially(urls) {
	const bodies = [];

	function fetchOne(url){
		return fetch(url)
			.then(response => response.text());
			.then(body => {
				bodies.push(body);
			});
	}

	let p = Promise.resolve(undefined);

	for(url of urls ) {
		p = p.then(() => fetchOne(url));
	}
}