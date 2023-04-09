/*
	Various API functions to request externally to yahoo.  As this is originates from the browser,  a CORS
	error will be thrown.  To get around this, this site's own internal server is first sent a request, then
	another is made from the backend to yahoo avoiding CORS.
*/

const apiRoutes = {
	'authorizationRequest': '/api/authRequest',
	'accessTokenRequest': '/api/accessTokenRequest',
	'mongodbYahooDataRequest': '/api/dbPosts',
	'leagueRequest': '/api/getLeague',
}

export const getLeague = async() => {
	const res = await fetch(apiRoutes.leagueRequest);

	const final = await res.json();
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
		const newTokenData = await refreshAPI(entry);

		const updateDbData = await updateYahooData(newTokenData, entry);

		return newTokenData;
	} else {
		return entry;
	}
}	

export const authorizeAPI = async () => {
	let options = {
		method: 'POST',
		headers: {'Content-Type': 'application/json'},
		body: JSON.stringify(entry),
	}

	const res = await fetch(apiRoutes.authorizationRequest, options);

	const final = await res.json();
}

export const refreshAPI = async (entry) => {
	let options = {
		method: 'POST',
		headers: {'Content-Type': 'application/json'},
		body: JSON.stringify(entry),
	}

	const res = await fetch(apiRoutes.accessTokenRequest, options);

	const final = await res.json();

	return final;
}