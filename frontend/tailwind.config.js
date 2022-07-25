/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js, ts, jsx, tsx}",
    "./components/**/*.{js, ts, jsx, tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "split-right-orange-white":
          "linear-gradient(to right, #FC5050 50%, #FFFFFF 50%);",
        "split-bottom-orange-white":
          "linear-gradient(to bottom, #FC5050 50%, #FFFFFF 50%);",
        "split-right-green-white":
          "linear-gradient(to right, #41EAD4 50%, #FFFFFF 50%);",
        "split-bottom-green-white":
          "linear-gradient(to bottom, #41EAD4 70%, #FFFFFF 30%);",
        "split-right-blue-transparent":
          "linear-gradient(to right, rgba(46, 67, 125, 0.8) 50%, rgba(255,255,255,0) 50%);",
        "bg-blue-transparent":
          "linear-gradient(0deg, rgba(46, 67, 125, 0.8), rgba(46, 67, 125, 0.8));",
        "bg-blue-binome":
          "linear-gradient(0deg, rgba(248, 250, 255, 0.8), rgba(248, 250, 255, 0.8));",
      },
    },
    fontFamily: {
      Humanst521BT: "Humanst521BT",
    },
  },
  plugins: [],
}
