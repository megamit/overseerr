const config = {
  env: {
    commitTag: process.env.COMMIT_TAG || 'local',
  },
  images: {
    domains: ['image.tmdb.org'],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: /\.(js|ts)x?$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};

if (process.env.BASE_PATH) {
  config.rewrites = async () => ({
    beforeFiles: [
      /* Strip off base path for serving pages */
      {
        source: process.env.BASE_PATH + '/:path*',
        destination: '/:path*',
      },
    ],
  });

  config.publicRuntimeConfig = {
    basePath: process.env.BASE_PATH,
  };
}
module.exports = config;
