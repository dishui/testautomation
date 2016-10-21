"use strict";
/**
 * Webpack hot configuration
 */
var archDevRequire = require("@walmart/electrode-archetype-react-app-dev/require");
var _ = archDevRequire("lodash");
var path = require("path");
var mergeWebpackConfig = archDevRequire("webpack-partial").default;
var hotConfig = require("./partial/hot");
var baseConfig = require("./base.js");
var defineConfig = require("./partial/define.js");
var devConfig = require("./partial/dev.js");
var WebpackConfig = archDevRequire("webpack-config").default;
var getRootConfig = require("./get-root-config");

var config = module.exports = _.flow(
  mergeWebpackConfig.bind(null, {}, baseConfig),
  defineConfig(),
  devConfig(),
  hotConfig()
)();


config.devServer = {}; // use webpack default verbosity

/****
 * Hot Mods
 */
var babel = _.find(config.module.loaders, {name: "babel"});

// update babel loaders for hot loading
babel.loaders = [].concat(["react-hot"], babel.loaders);
babel.include = path.join(process.cwd(), "client");

module.exports = new WebpackConfig().merge(config).merge(getRootConfig("webpack.config.hot.js"));
