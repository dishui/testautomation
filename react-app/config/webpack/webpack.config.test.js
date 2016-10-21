"use strict";

var archDevRequire = require("@walmart/electrode-archetype-react-app-dev/require");
var _ = archDevRequire("lodash");
var mergeWebpackConfig = archDevRequire("webpack-partial").default;
var WebpackConfig = archDevRequire("webpack-config").default;
var getRootConfig = require("./get-root-config");

var testConfig = require("./base-test.js");
var inlineSourcemapsConfig = require("./partial/sourcemaps-inline");

module.exports = new WebpackConfig().merge(_.flow(
  mergeWebpackConfig.bind(null, {}, testConfig),
  inlineSourcemapsConfig()
)()).merge(getRootConfig("webpack.config.test.js"));
