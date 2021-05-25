const basePath = process.env.NODE_ENV === 'production' ? '/rajatdhoot' : '';

module.exports = {
  basePath,
  assetPrefix: `${basePath}/`
};
