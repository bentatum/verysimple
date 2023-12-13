const Prism = require('prismjs');
const loadLanguages = require('prismjs/components/');

loadLanguages(['html']);

module.exports = function (source) {
  const code = Prism.highlight(source, Prism.languages.html, 'html');
  return `export default ${JSON.stringify(code)}`;
};