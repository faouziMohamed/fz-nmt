const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

module.exports = withPlugins([
  [optimizedImages, {}],
  {
    async redirects() {
      return [
        {
          source: '/about',
          destination: '/home',
          permanent: true,
        },
      ];
    },
  },
  {
    future: {
      webpack5: true,
    },
  },
]);
