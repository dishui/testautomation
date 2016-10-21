"use strict";

var archDevRequire = require("@walmart/electrode-archetype-react-app-dev/require");
var _ = archDevRequire("lodash");
var mergeWebpackConfig = archDevRequire("webpack-partial").default;
var WebpackConfig = archDevRequire("webpack-config").default;
var getRootConfig = require("./get-root-config");

var coverageConfig = require("./partial/coverage");
var inlineSourcemapsConfig = require("./partial/sourcemaps-inline");
var testConfig = require("./base-test.js");

module.exports = new WebpackConfig().merge(_.flow(
  mergeWebpackConfig.bind(null, {}, testConfig),
  coverageConfig(),
  inlineSourcemapsConfig()
)()).merge(getRootConfig("webpack.config.coverage.js"));
