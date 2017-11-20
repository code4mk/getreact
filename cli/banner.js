/***************************************************
  getreact cli -- https://code4mk.org
  Authored by code4mk <https://twitter.com/code4mk>
****************************************************/

// ----------------------
// IMPORTS

// Local
const package = require('../package.json');

// ----------------------

module.exports = `

  <getreact/> v${package.version}

`.trim();
