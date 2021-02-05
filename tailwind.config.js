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
      }
    }
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
          }
        },
        { variants: ["responsive", "hover"] }
      )
    },
  ],
}
