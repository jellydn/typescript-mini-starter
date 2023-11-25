async function delay(timer:number) {
	return new Promise<number>((resolve) => {
		setTimeout(() => {
			resolve(timer);
		}, timer);
	});
}

delay(500).then(
	() => {
		console.log('Hello World from CLI');
	}
);
