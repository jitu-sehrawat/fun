async function abc () {
	try {
		await xyz(2, undefined);
		console.log(`success in abc`);
	} catch (e) {
		console.log(`Error in abc: ${JSON.stringify(e)}`);
	}
};


async function xyz (a, b) {
	// a*c;
	let customerError = {};
	customerError.msg = `Error thrown from xyz`;
	throw customerError;
	console.log(`Hi from xyz`);
}

abc();
