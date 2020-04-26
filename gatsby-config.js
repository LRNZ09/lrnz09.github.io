/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 *
 * @format
 */

module.exports = {
	plugins: [
		'gatsby-plugin-typescript',
		{
			resolve: 'gatsby-plugin-manifest',
			options: {
				background_color: '#55AAAA',
				display: 'minimal-ui',
				icon: 'src/assets/images/star.png',
				lang: 'en',
				name: 'Lorenzo Pieri',
				short_name: 'LRNZ09',
				start_url: '/',
				theme_color: '#000E7A',
			},
		},
		'gatsby-plugin-react-helmet',
		'gatsby-plugin-styled-components',
		'gatsby-plugin-offline',
	],
}
