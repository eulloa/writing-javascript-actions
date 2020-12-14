const request = require("request-promise");

const options = {
	method: "GET",
	uri: "https://icanhazdadjokes.com/",
	headers: {
		Accept: "application/json",
		"User-Agent": "Writing JS action GitHub Learning Lab course"
	},
	json: true
};

async function getJoke() {
	const res = await request(options);
	return res && res.joke;
}

module.export = getJoke;
