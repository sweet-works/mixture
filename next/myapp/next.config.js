const withLess = require('@zeit/next-less')
const withCss = require('@zeit/next-css')
if(typeof require !== 'undefined'){
    require.extensions['.css']=file=>{}
}

module.exports = withLess(withCss({
  /* config options here */
}))

