/** @type {import('next').NextConfig} */
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
