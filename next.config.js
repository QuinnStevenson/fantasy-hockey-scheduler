/** @type {import('next').NextConfig} */

module.exports = {
	async redirects() {
		let yKey = "WCD77E8N";
		let yClientId = "dj0yJmk9TUdiUTFpU2c2S0g0JmQ9WVdrOVYwTkVOemRGT0U0bWNHbzlNQT09JnM9Y29uc3VtZXJzZWNyZXQmc3Y9MCZ4PWNj";
		let yClientSecret = "72abdce46c9c2e7d79c6bc287426987a11a37b43";

		let yReturnURL = "https://fantasy-hockey-scheduler.vercel.app/posts/api-success";
		let redirect = "https://api.login.yahoo.com/oauth2/request_auth?client_id=" + yClientId + "&redirect_uri=" + yReturnURL + "&response_type=code&language=en-us";

  		return [
		  	{
		  		source: '/',
		  		destination: redirect,
		  		permanent: false,
		  	},
	  	]
	},

	reactStrictMode: true,
}
