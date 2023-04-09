/*
	Refreshes access token after 1 hour expiration
*/

const handler = async (req, res) => {
	const tokenData = req.body;

	const authHeader = Buffer.from(`${tokenData.clientId}:${tokenData.clientSecret}`, `binary`).toString(`base64`);	

	const details = {
		'client_id': tokenData.clientId,
		'client_secret': tokenData.clientSecret,
		'redirect_uri': 'oob',
		'refresh_token': tokenData.refreshToken,
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
		const response = await fetch(tokenData.tokenURL, {
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