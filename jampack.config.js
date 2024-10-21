export default {
  html: {
    minifyJS: true,
    collapseBooleanAttributes: true,
    collapseWhitespace: true,
    conservativeCollapse: true,
    removeComments: true,
    removeEmptyAttributes: true,
    removeEmptyElements: true,
    removeRedundantAttributes: true,
    removeScriptTypeAttributes: true,
    removeStyleLinkTypeAttributes: true,
    processScripts: ['application/ld+json']
  },
  image: {
    external: {
      process: 'download',
    },
  },
  misc: {
    prefetch_links: 'in-viewport',
  },
};
