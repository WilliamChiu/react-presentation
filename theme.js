let {swiss, prism} = require('mdx-deck').themes

let extension = {
  fonts: {
    body: '"Route159", sans-serif',
    heading: '"Mont", sans-serif',
    monospace: '"Roboto Mono", monospace',
  },
  colors: {
    text: '#433',
    background: 'unset',
    backdrop: 'unset',
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

export default {...prism, ...swiss, ...extension}