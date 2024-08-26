/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'cdn.sanity.io',
				pathname: '/**',
			},
		],
	},
	// async redirects() {
	// 	return [
	// 		{
	// 			source: '/articles/:slug', // Old article URLs
	// 			destination: '/', // Redirect to the homepage or another relevant page
	// 			permanent: true, // Permanent redirect (301 status)
	// 		},
	// 		// Add more redirects as needed
	// 	];
	// },
};

export default nextConfig;
