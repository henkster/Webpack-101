const css = require('./app.css'); // with simple css-loader, this will get included in the JS bundle, but browser won't know what to do with it. So, need styles-loader.
const anotherCss = require('./another-app.css');

console.log('Hello from app.js!');