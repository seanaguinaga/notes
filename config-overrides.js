const { override, addBabelPlugins } = require("customize-cra");

module.exports = override(
  addBabelPlugins(
    "magiql/babel",
    "babel-plugin-styled-components",
  ),
);
