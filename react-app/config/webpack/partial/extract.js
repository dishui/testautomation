"use strict";

var archDevRequire = require("@walmart/electrode-archetype-react-app-dev/require");
var mergeWebpackConfig = archDevRequire("webpack-partial").default;

var ExtractTextPlugin = archDevRequire("extract-text-webpack-plugin");
var CSSSplitPlugin = archDevRequire("css-split-webpack-plugin").default;
var atImport = archDevRequire("postcss-import");
var cssnext = archDevRequire("postcss-cssnext");

var autoprefixer = archDevRequire("autoprefixer-stylus");
var cssLoader = archDevRequire.resolve("css-loader");
var styleLoader = archDevRequire.resolve("style-loader");
var stylusLoader = archDevRequire.resolve("stylus-relative-loader");
var postcssLoader = archDevRequire.resolve("postcss-loader");

var cssModuleSupport = process.env.npm_package_config_electrode_archetype_react_app_webpack_css_modules === "true"; // eslint-disable-line max-len

module.exports = function () {
  return function (config) {
    var stylusQuery = cssLoader + "?-autoprefixer!" + stylusLoader + "?" +
      JSON.stringify({
        precacheImportVariables: [
          { $tenant: "sams" },
          { $tenant: "walmart" }
        ]
      });
    var cssQuery = cssLoader + "?modules&-autoprefixer!" + postcssLoader;
    var loaders = [{
      name: "extract-stylus",
      test: /\.styl$/,
      loader: ExtractTextPlugin.extract(styleLoader, stylusQuery)
    }];

    if (cssModuleSupport) {
      loaders.push({
        name: "extract-css",
        test: /\.css$/,
        loader: ExtractTextPlugin.extract(styleLoader, cssQuery)
      });
    }

    return mergeWebpackConfig(config, {
      module: {
        loaders: loaders
      },
      postcss: function () {
        return cssModuleSupport ? [atImport, cssnext({
          browsers: ["last 2 versions", "ie >= 9", "> 5%"]
        })] : [];
      },
      stylus: {
        use: [autoprefixer({browsers: ["last 2 versions", "ie >= 9", "> 5%"]})]
      },
      plugins: [
        new ExtractTextPlugin(config.__wmlMultiBundle
          ? "[name].style.[hash].css"
          : "style.[hash].css"),

        /*
        preserve: default: false. Keep the original unsplit file as well.
        Sometimes this is desirable if you want to target a specific browser (IE)
        with the split files and then serve the unsplit ones to everyone else.
         */
        new CSSSplitPlugin({size: 4000, imports: true, preserve: true})
      ]
    });
  };
};
