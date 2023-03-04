/** @type {import('next').NextConfig} */
import Tokens from "./tokens.json";

module.exports = {
	async redirects() {
		let yReturnURL = "https://fantasy-hockey-scheduler.vercel.app/posts/api-success";
		
		let redirect = "https://api.login.yahoo.com/oauth2/request_auth?client_id=" + Tokens['clientId'][0] + "&redirect_uri=" + yReturnURL + "&response_type=code&language=en-us";

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
