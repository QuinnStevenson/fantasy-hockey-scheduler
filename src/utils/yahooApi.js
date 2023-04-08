const yahooData = require("./yahooData.json");

/*
	Various API functions to request externally to yahoo.  As this is originates from the browser,  a CORS
	error will be thrown.  To get around this, this site's own internal server is first sent a request, then
	another is made from the backend to yahoo avoiding CORS.
*/

const apiRoutes = {
	'authorizationRequest': '/api/authRequest',
	'accessTokenRequest': '/api/accessTokenRequest',
	'mongodbYahooDataRequest': '/api/dbPosts'
}

export const updateYahooData = async(newTokenData, entry) => {
	let newEntry = entry;
	let dateAcquired = new Date();

	newEntry.accessToken = newTokenData.access_token;
	newEntry.timeCreated = dateAcquired

	const res = await fetch(apiRoutes.mongodbYahooDataRequest, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(newEntry),
	});

	const final = await res.json();
}

export const fetchYahooData = async () => {
	const res = await fetch(apiRoutes.mongodbYahooDataRequest,  {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
		},
	});

	const final = await res.json();

	let entry = final.data[0];

	let newDate = new Date();

	let timeDifference = (newDate - Date.parse(entry.timeCreated)) / 1000;

	//Call the refreshAPI function everytime a new access token has expired after one hour.
	if(!entry.timeCreated || timeDifference >= 3600) {
		console.log("SPAWNING NEW TOKEN");
		const newTokenData = await refreshAPI();

		const updateDbData = await updateYahooData(newTokenData, entry);

		console.log("New access_token:");
		return newTokenData.access_token;
	} else {
		console.log("Current access_token:");
		console.log(entry.accessToken);
		return entry.accessToken;
	}
}	

export const authorizeAPI = async () => {
	const res = await fetch(apiRoutes.authorizationRequest);

	const final = await res.json();
}

export const refreshAPI = async () => {
	const res = await fetch(apiRoutes.accessTokenRequest);

	const final = await res.json();

	return final;
}