const yahooData = require("../../utils/yahooData.json");

/*
	API route handles communicating with the yahoo OAUTH2 endpoint that exchanges an access code for an
	access token and refresh token.  Access token's have a 1 hour lifespan and must be refreshed using
	the refresh token.  This api call only needs to be run once or if something breaks.  Refreshing
	the token is the only thing required after initial authorization.
*/

const handler = async (req, res) => {
	const authHeader = Buffer.from(`${yahooData.clientId}:${yahooData.clientSecret}`, `binary`).toString(`base64`);

	let details = {
		'client_id': yahooData.clientId,
		'client_secret': yahooData.clientSecret,
		'redirect_uri': 'oob',
		'code': yahooData.token,
		'grant_type': 'authorization_code'		
	}

	let formBody = [];

	//Properties of the form body must be URL encoded as yahoo only accepts x-www-form-urlencoded formatting
	for(let property in details) {
		let encodedKey = encodeURIComponent(property);
		let encodedValue = encodeURIComponent(details[property]);
		formBody.push(encodedKey + "=" + encodedValue);
	}

	formBody = formBody.join("&");

	try{
		const response = await fetch(yahooData.tokenURL, {
			method: 'POST',
			headers: {
				'Authorization': `Basic ${authHeader}`,
				'Content-Type': 'application/x-www-form-urlencoded',
			},
			body: formBody
		});

		const data = await response.json();
		console.log(data);
		
		return res.end(JSON.stringify({'success': data}));		
	} catch (err) {
		return res.end(JSON.stringify({'error': err.message}));
	}
}

export default handler;