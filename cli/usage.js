/*
ReactQL starter kit -- https://reactql.org
Authored by Lee Benson <lee@leebenson.com>
*/

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
${chalk.white.bgRed('reactpack new [options]')}

Show help / all options
${chalk.white.bgRed('reactpack help')}

Show the current version / check for latest version:
${chalk.white.bgRed('reactpack version')}


================================================================================
`.trim();
