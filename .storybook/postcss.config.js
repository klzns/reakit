const path = require("path");
const scopify = require("postcss-scopify");

function getId(filename) {
  const example = path.dirname(filename);
  const component = path.basename(path.dirname(path.dirname(example)));
  return `${component}-${path.basename(example)}`
    .replace(/([A-Z])/g, "-$1")
    .toLowerCase()
    .replace(/^-/, "");
}

module.exports = {
  exec: true,
  plugins: [(root) => scopify(`#${getId(root.source.input.file)}`)(root)],
};
