module.exports = {
  css: {
    loaderOptions: {
      scss: {
        additionalData: `
          @import '@/assets/scss/_mixins.scss';
          @import '@/assets/scss/_variables.scss';
        `,
      },
    },
  },
  publicPath: process.env.NODE_ENV === 'production' ? '/market/' : '/',
};
