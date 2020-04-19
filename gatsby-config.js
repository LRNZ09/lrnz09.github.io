/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 *
 * @format
 */

module.exports = {
	plugins: [
		{
			resolve: `gatsby-plugin-google-analytics`,
			options: {
				anonymize: true,
				head: true,
				respectDNT: true,
				siteSpeedSampleRate: 10,
				trackingId: 'UA-164007408-1',
			},
		},
		'gatsby-plugin-offline',
		'gatsby-plugin-react-helmet',
		'gatsby-plugin-styled-components',
		'gatsby-plugin-typescript',
	],
}
