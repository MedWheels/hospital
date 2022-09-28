module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation : {
        slideL : 'slideL 500ms linear',
        slideR : 'slideR 500ms linear',
        blob: "blob 7s infinite",
       
      },
      keyframes : {
        slideL :{
          '0%' : {transform : 'translateX(-100%)' },
          '100%' : {transform : 'translateX(0)'}
        },
        slideR:{
          '0%' : {transform : 'translateX(100%)'},
          '100%' : {transform : 'translateX(0)'},
        },
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "tranlate(0px, 0px) scale(1)",
          },
        },
      },
    },
      fontFamily: {
        poppins: ["Poppins"],
        yellowtail: ["Yellowtail"],
      },
      backgroundImage: {
        indexbackground: "url('/backgroundIndex.jpg')",
        // navbar:"url('/navbar.jpg')",
      },
    },
  

 variants: {
  extend: {},
},
plugins: [],
};;
