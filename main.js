let svgContent = require('./alert.svg');
// 通过 CommonJS 规范导入 CSS 模块
require('./main.css');
window.document.getElementById('app').innerHTML = svgContent;

