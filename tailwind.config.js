const plugin = require("tailwindcss/plugin");

module.exports = {
  plugins: [
    plugin(function ({ addUtilities, addComponents, e, prefix, config }) {
      // Add your custom styles here
    }),
  ],
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      height: {
        "1400px": "1400px",
      },
      backgroundImage: {
        coding: "url('img/bgimg.jpg')",
      },
    },
  },
  plugins: [],
};
