/***************************************************
  getreact cli -- https://code4mk.org
  Authored by code4mk <https://twitter.com/code4mk>
****************************************************/

// ----------------------
// IMPORTS

// Node
const chalk = require('chalk');
const emoji = require('node-emoji');

// Local
const banner = require('./banner.js');

// ----------------------
module.exports = `
================================================================================

${banner}

Usage:

Start a new React-Pack project
${chalk.white.bgRed('getreact new')}

Show help / all options
${chalk.white.bgRed('getreact help')}

Show the current version / check for latest version:
${chalk.white.bgRed('getreact --version')}


================================================================================
`.trim();
