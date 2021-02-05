module.exports = {
  theme: {
    extend: {
      colors: {
        monochrome: {
          1: `#111`,
          2: `#222`,
          3: `#333`,
          4: `#444`,
          5: `#555`,
          6: `#666`,
          7: `#777`,
          8: `#888`,
          9: `#999`,
          a: `#aaa`,
          b: `#bbb`,
          c: `#ccc`,
          d: `#ddd`,
          e: `#eee`,
        },
        transparentBlack: {
          1: `#0001`,
          2: `#0002`,
          3: `#0003`,
          4: `#0004`,
          5: `#0005`,
          6: `#0006`,
          7: `#0007`,
          8: `#0008`,
          9: `#0009`,
          a: `#000a`,
          b: `#000b`,
          c: `#000c`,
          d: `#000d`,
          e: `#000e`,
        },
      },
      maxWidth: {
        "235px": "235px",
        "768px": "768px",
        "1000px": "1000px",
      },
      opacity: {
        60: ".6",
        80: ".8",
        90: ".9",
      },
    },
    fontSize: {
      20: "0.2rem",
      25: "0.25rem",
      50: "0.5rem",
      75: "0.75rem",
      90: "0.9rem",
      100: "1rem", //20px
      120: "1.2rem", //24
      150: "1.5rem",
      200: "2rem",
      250: "2.5rem",
      300: "3rem",
      400: "4rem",
    },
    letterSpacing: {
      "09": "0.09em",
      none: "0",
    },
  },
  variants: {},
  plugins: [
    ({ addBase, addUtilities, config, theme }) => {
      addUtilities(
        {
          ".emoji": {
            display: "inline",
            verticalAlign: "baseline",
            height: "1.2em",
            transform: "translateY(0.2em)",
          },
          ".label-adoc": {
            backgroundColor: `#d13438`,
            color: "white",
          },
          ".label-mdx": {
            backgroundColor: `#ffaa44`,
            color: "black",
          },
          ".transition": {
            transition: `150ms all ease-in`,
          },
          ".underline-anchor": {
            textDecoration: `underline theme("colors.blue.400")`,
            textDecorationThickness: "2px",
          },
          ".selection-green": {
            "::selection": {
              backgroundColor: "#00ad5670",
            },
          },
          ".backdrop-blur": {
            backdropFilter: `blur(1px)`,
          },
          ".backdrop-blur-xl": {
            backdropFilter: `blur(100%)`,
          },
          ".hyphens": {
            hyphens: `auto`,
          },
          ".text-shadow": {
            textShadow: `#0008 2px 2px 3px`,
          },
          ".text-shadow-none": {
            textShadow: `none`,
          },
          ".drop-shadow": {
            filter: `drop-shadow(#0008 2px 2px 3px)`,
          },
          ".drop-shadow-none": {
            filter: `none`,
          },
        },
        { variants: ["responsive", "hover"] }
      )
    },
  ],
}
