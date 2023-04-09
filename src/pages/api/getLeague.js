const handler = async(req, res) => {
	let url = 'https://fantasysports.yahooapis.com/fantasy/v2/league/'

	console.log("hello");

	const response = await fetch(url);

	console.log(response);

	res.json({status: 200, data: response});
}

export default handler;