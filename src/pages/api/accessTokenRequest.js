const yahooData = require("../../utils/yahooData.json");

/*
	Refreshes access token after 1 hour expiration
*/

const handler = async (req, res) => {
	const authHeader = Buffer.from(`${yahooData.clientId}:${yahooData.clientSecret}`, `binary`).toString(`base64`);

	let details = {
		'client_id': yahooData.clientId,
		'client_secret': yahooData.clientSecret,
		'redirect_uri': 'oob',
		'refresh_token': yahooData.refreshToken,
		'grant_type': 'refresh_token'		
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

		return res.end(JSON.stringify(data));		
	} catch (err) {
		return res.end(JSON.stringify({'error': err.message}));
	}
}

export default handler;