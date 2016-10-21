"use strict";

var archDevRequire = require("@walmart/electrode-archetype-react-app-dev/require");
var mergeWebpackConfig = archDevRequire("webpack-partial").default;
var DefinePlugin = archDevRequire("webpack").DefinePlugin;

module.exports = function () {
  return function (config) {
    return mergeWebpackConfig(config, {
      plugins: [
        new DefinePlugin({
          // Signal production, so that webpack removes
          // non-production code that is in conditionals
          // like: `if (process.env.NODE_ENV === "production")`
          "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
          "process.env.ELECTRODE_TENANT": JSON.stringify(process.env.ELECTRODE_TENANT || "walmart"),
          "process.env.ELECTRODE_LOCALE": JSON.stringify(process.env.ELECTRODE_LOCALE || "en")
        })
      ]
    });
  };
};
