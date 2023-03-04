/** @type {import('next').NextConfig} */

module.exports = {
	async redirects() {
		let yKey = "HQhJM6Lx";
		let ySecret = "dj0yJmk9NlBlVTN0RDZOcW95JmQ9WVdrOVNGRm9TazAyVEhnbWNHbzlNQT09JnM9Y29uc3VtZXJzZWNyZXQmc3Y9MCZ4PTlh";
		let yReturnURL = "https://fantasy-hockey-scheduler.vercel.app/";

		let redirect = "https://api.login.yahoo.com/oauth2/request_auth?client_id=" + yKey + "&redirect_uri=" + yReturnURL + "&response_type=code&language=en-us";

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
