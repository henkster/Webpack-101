const css = require('./app.css'); // with simple css-loader, this will get included in the JS bundle, but browser won't know what to do with it. So, need styles-loader.
const anotherCss = require('./another-app.css');

var mathMod = require('./math-module.js');
var es6Mod = require('./es6-module.js');

console.log('Hello from app.js!');

console.log('2 + 5 = '+ mathMod.add(2, 5));

console.log(es6Mod.repeat(3, 11));