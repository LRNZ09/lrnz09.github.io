/* eslint-disable import/no-extraneous-dependencies */

const withPlugins = require('next-compose-plugins')

const fonts = require('next-fonts')
const optimizedImages = require('next-optimized-images')
const transpileModules = require('next-transpile-modules')([
  '@react95/core',
  '@react95/icons',
])

module.exports = withPlugins(
  [
    fonts,
    [
      optimizedImages,
      {
        handleImages: [
          // 'gif',
          'ico',
          // 'jpg',
          'png',
          'svg',
          'webp',
        ],
      },
    ],
    transpileModules,
  ],
  {
    distDir: 'build',
  }
)
