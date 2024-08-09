/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://www.latzwebdesign.com', // Replace with your site's URL
    generateRobotsTxt: true, // (optional) Generate a robots.txt file
    // Exclude specific routes (optional)
    exclude: ['/admin/*'],
    // Additional settings (optional)
    // outDir: './out', // Output directory for the generated files
    // priority: 0.7,
    // changefreq: 'daily',
  };