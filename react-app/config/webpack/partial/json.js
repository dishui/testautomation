"use strict";

var archDevRequire = require("@walmart/electrode-archetype-react-app-dev/require");
var mergeWebpackConfig = archDevRequire("webpack-partial").default;

var jsonLoader = archDevRequire.resolve("json-loader");

module.exports = function () {
  return function (config) {
    return mergeWebpackConfig(config, {
      module: {
        loaders: [
          {
            name: "json",
            test: /\.json$/i,
            loader: jsonLoader
          }
        ]
      }
    });
  };
};
