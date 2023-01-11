module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        YesevaOne: ["Yeseva One", "cursive"],
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [],
  },
  variants: {
    extend: {
      width: ["group-hover"],
      height: ["group-hover"],
    },
  },
};
