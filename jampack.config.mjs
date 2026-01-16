const default_options = {
  html: {
    sort_attributes: true,
  },
  image: {
    external: {
      process: 'download',
    },
  },
  cdn: {
    // https://jampack.divriots.com/features/optimize-images-cdn/
    // treat cdn images as external images
    process: 'off',
  },
};

export default default_options;

