/** @type {import('next').NextConfig} */

module.exports = {
	async redirects() {
		let yKey = "HQhJM6Lx";
		let yClientId = "dj0yJmk9NlBlVTN0RDZOcW95JmQ9WVdrOVNGRm9TazAyVEhnbWNHbzlNQT09JnM9Y29uc3VtZXJzZWNyZXQmc3Y9MCZ4PTlh";
		let yReturnURL = "https://fantasy-hockey-scheduler.vercel.app/";
        //                https://api.login.yahoo.com/oauth2/request_auth?client_id=dj0yJmk9ak5IZ2x5WmNsaHp6JmQ9WVdrOVNqQkJUMnRYTjJrbWNHbzlNQS0tJnM9Y29uc3VtZXJzZWNyZXQmeD1hYQ--&redirect_uri=oob&response_type=code&language=en-us
		//let redirect = "https://api.login.yahoo.com/oauth2/request_auth?client_id=dj0yJmk9NlBlVTN0RDZOcW95JmQ9WVdrOVNGRm9TazAyVEhnbWNHbzlNQT09JnM9Y29uc3VtZXJzZWNyZXQmc3Y9MCZ4PTlh--&redirect_uri=oob&response_type=code&language=en-us;

  		return [
		  	{
		  		source: '/',
		  		destination: "https://api.login.yahoo.com/oauth2/request_auth?client_id=dj0yJmk9NlBlVTN0RDZOcW95JmQ9WVdrOVNGRm9TazAyVEhnbWNHbzlNQT09JnM9Y29uc3VtZXJzZWNyZXQmc3Y9MCZ4PTlh--&redirect_uri=oob&response_type=code&language=en-us",
		  		permanent: false,
		  	},
	  	]
	},

	reactStrictMode: true,
}
