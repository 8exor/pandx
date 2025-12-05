    // tailwind.config.js
    // module.exports = {
    //   // ...
    //   plugins: [
    //     require('tailwind-scrollbar'),
    //   ],
      
    // };
    module.exports = {
  theme: {
    extend: {
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
      },
      animation: {
        float: 'float 4s ease-in-out infinite',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'), // your existing plugin stays
  ],
};

    