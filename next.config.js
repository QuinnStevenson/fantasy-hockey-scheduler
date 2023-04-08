/** @type {import('next').NextConfig} */
const yahooData = require("./src/utils/yahooData.json");

module.exports = {

	async redirects() {
  		return [
		  	{
		  		source: '/',
		  		destination: '/prerender',
		  		permanent: false,
		  	}
	  	]
	},
	reactStrictMode: true,
}
