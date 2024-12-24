// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//     flowbite.content(),
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [
//     require('daisyui'),
//     flowbite.plugin(),
//   ],
// }

const withMT = require("@material-tailwind/react/utils/withMT");
import flowbite from "flowbite/plugin";

module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Include your project's files
    "./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}", // Material Tailwind components
    "./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}", // Material Tailwind theme components
    "./node_modules/flowbite/**/*.js", // Include Flowbite components
  ],
  theme: {
    extend: {}, // Extend the theme if needed
  },
  plugins: [
    require("daisyui"), // DaisyUI plugin
    flowbite, // Flowbite plugin
  ],
});


