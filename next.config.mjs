/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: ['cdn.sanity.io'], // Add the Sanity domain here
	},
};

export default nextConfig;
