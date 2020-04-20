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
			resolve: 'gatsby-plugin-segment-js',
			options: {
				// devKey: 'SEGMENT_DEV_WRITE_KEY',
				prodKey: 'dJDoEfUVScfsJ1SezkvxdjeOq27xn6zP',
				trackPage: true,
			},
		},
		'gatsby-plugin-offline',
		'gatsby-plugin-react-helmet',
		'gatsby-plugin-styled-components',
		'gatsby-plugin-typescript',
	],
}
