module.exports = {

  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  
  theme: {
    
    keyframes:{
      'typed':{
        'from': {
          width: '0'
        },
        'to': {
          width: '100%',
          
        },
      },

      'blinking':{
        '0%':{
          border: '0px 0px 0px 2px solid transparent'
          
        },
        '50%':{
          border: '0px 0px 0px 2px solid black'
        },
        '100%': {
          border: '0px solid transparent'
        }
      },

      'pulsing': {
        '0%':{
          backgroundColor: '#2f3136',
          color: '#22C55E'
          
        },
        '50%':{
          backgroundColor: '#22C55E',
          color: '#f2f3f5'
        },
        '100%': {
          backgroundColor: '#2f3136',
          color: '#22C55E'
        }


      },

      'rotate': {
        'from': {
          transform: 'rotate(0deg)'
        },
        'to': {
          transform: 'rotate(180deg)'
          
        },

      },

      'slideUp':{
        'from': {
          margin: '100px 0px 0px 0px',
          opacity: '0'
        },
       
        'to':{
          margin:'0px 0px 0px 0px',
          opacity: '1'
          
        
      }
 
    },
  },
    animation:{

      'typed':'typed 1.5s steps(30, start) forwards, blinking 1s infinite',
      'blinking': 'blinking 1s infinite',
      'pulsing' : 'pulsing 2s infinite',
      'rotate' : 'rotate 0.7s steps(30, end) forwards',
      'slideUp' : 'slideUp 3s 1.8s forwards'

    },
    

    
    extend: {
      screens:{
        'xs': '300px'
      },
      backgroundImage: {

        'gamecube': "url('/src/assets/gamecube.jpg')"

      },
      fontFamily: {
        RobotoMono:["Roboto Mono", 'monospace'] 
  
      },

      colors: {
        gray: {
          1000: '#282b30', 
          900: '#202225',
          800: '#2f3136',
          700: '#36393f',
          600: '#4f545c',
          400: '#d4d7dc',
          300: '#e3e5e8',
          200: '#ebedef',
          100: '#f2f3f5',
        },
        angular: {
          500: '#dd1b16',
        }
      },
    },
  },
  variants: {
    extend: {
      borderRadius: ['hover'],
    },
  },
  plugins: [require("daisyui")],
}
