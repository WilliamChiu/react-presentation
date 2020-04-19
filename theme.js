let swiss = require('mdx-deck').themes.swiss

let extension = {
  fonts: {
    body: '"Route159", sans-serif',
    heading: '"Mont", sans-serif',
    monospace: '"Roboto Mono", monospace',
  },
  colors: {
    text: '#333',
    background: 'unset',
    primary: '#33e',
  },
  fontWeights: {
    body: 100,
    heading: 700,
  },
  styles: {
    root: {
      textAlign:"left"
    },
    Slide: {
      display:"block",
      padding:"2em",
      textAlign:"left",
      fontSize: [8, 12, 24, 48, 128]
    },
  }
}

export default {...swiss, ...extension}