# Packaging

## JQuery
    "jquery-ui": "1.12.x",
    "react-day-picker": "^2.3.3",
    "react-dnd": "^2.0.2",
    "react-dnd-html5-backend": "^2.0.0",
    "react-overlays": "^0.6.5",
    "react-select": "^0.8.2",
    "rickshaw": "^1.5.1",
    
  npm i jquery --save
  import $ from 'jquery'; 

## Build and Deploy

build is done with builder run build and dist/ directory is created contains bundle.js and css.
App is tar-ed into a tar ball and publish to maven with appName-package.version-time.commitId.tbz.

### build/build.sh

assets under dist/js is scanned and summarized into configs/assets.json.

with cdn publish, we need to map isomorphic loader to point to cdn.
isomorphic-loader-config.js takes assets file, using $REPO/.isomorphic-loader-config.json, maps to dist/isomorphic-assets.json and maps to publicPath at //i5.../dfw/v1/

isomorphic-loader-config.js

```

```

isomorphic-assets.json

``` 
  "chunks": {
    "main": [
      "bundle.25b669d8b7c9770c886f.js",                                                               
      "style.25b669d8b7c9770c886f.css",
      "style.25b669d8b7c9770c886f-1.css",
      "style.25b669d8b7c9770c886f-2.css",
      "style.25b669d8b7c9770c886f-split.css",
      "../map/bundle.25b669d8b7c9770c886f.js.map",
      "../map/style.25b669d8b7c9770c886f.css.map",
      "../map/style.25b669d8b7c9770c886f-1.css.map",
      "../map/style.25b669d8b7c9770c886f-2.css.map"
    ]
  }
```

## Config

_wml.config = { ccm: {}, ui: {}}

## version

_wml.envInfo = {"APP_SHA":"0fcc24b5765d930d9a9d78aa165f2a3f6a0f90ee","APP_VERSION":"8.24.2-20160922_182659.6a0f90ee"};

## CDN

  <script>
    window._wml.cdn={
      md:{
        "a547365dbea4862517ca80bade3d7b9d.png": "//i5.walmartimages.com/dfw/63fd9f59-a1fb/8a15c5bd-b564-4c65-a58c-75dc277d98ba/v1/a547365dbea4862517ca80bade3d7b9d.png",
        "705d33b9d2f07f4677e8ce0d6fc2fb9c.eot": "//i5.walmartimages.com/dfw/63fd9f59-a1fb/8a15c5bd-b564-4c65-a58c-75dc277d98ba/v1/705d33b9d2f07f4677e8ce0d6fc2fb9c.eot",
        "a1814ff16143cc3d60a91bab404fdbf9.woff2": "//i5.walmartimages.com/dfw/63fd9f59-a1fb/8a15c5bd-b564-4c65-a58c-75dc277d98ba/v1/a1814ff16143cc3d60a91bab404fdbf9.woff2",
        "5c474d6968590717f414ded5db58470c.woff": "//i5.walmartimages.com/dfw/63fd9f59-a1fb/8a15c5bd-b564-4c65-a58c-75dc277d98ba/v1/5c474d6968590717f414ded5db58470c.woff",
        "f9d141cf92022490054db967c79864cc.ttf": "//i5.walmartimages.com/dfw/63fd9f59-a1fb/8a15c5bd-b564-4c65-a58c-75dc277d98ba/v1/f9d141cf92022490054db967c79864cc.ttf",
        "bundle.9946b191cf163dda8cfb.js": "//i5.walmartimages.com/dfw/63fd9f59-a1fb/8a15c5bd-b564-4c65-a58c-75dc277d98ba/v1/bundle.9946b191cf163dda8cfb.js",
        "style.9946b191cf163dda8cfb.css": "//i5.walmartimages.com/dfw/63fd9f59-a1fb/8a15c5bd-b564-4c65-a58c-75dc277d98ba/v1/style.9946b191cf163dda8cfb.css",
        "style.9946b191cf163dda8cfb-1.css": "//i5.walmartimages.com/dfw/63fd9f59-a1fb/8a15c5bd-b564-4c65-a58c-75dc277d98ba/v1/style.9946b191cf163dda8cfb-1.css",
        "style.9946b191cf163dda8cfb-2.css": "//i5.walmartimages.com/dfw/63fd9f59-a1fb/8a15c5bd-b564-4c65-a58c-75dc277d98ba/v1/style.9946b191cf163dda8cfb-2.css",
        "style.9946b191cf163dda8cfb-split.css": "//i5.walmartimages.com/dfw/63fd9f59-a1fb/8a15c5bd-b564-4c65-a58c-75dc277d98ba/v1/style.9946b191cf163dda8cfb-split.css"
      },
  </script>

## Async loader, Little loader.

At the bottom of the page, we load the `bundle.${build-id}.js`.
    <script> _wml.perf.mark("before-bundle") </script>
    <script src="https://i5.wal.co/dfw/63fd9f59-bc1c/7fb7089a-1cd2-4d7c-813a-5de7d05d0f86/v1/bundle.ad843d7ce38658e8c011.js"></script>
    // when running with `node server/index.js` on local dev, use relative.
    <script src="/js/bundle.85fe1b9d873bf1077f0d.js"></script>
    <script> _wml.perf.mark("after-bundle") </script>

    if (googleAds) {
      var googleScriptEl = document.createElement("script");
      googleScriptEl.src = "//www.google.com/adsense/search/ads.js";
      googleScriptEl.async = true;
      document.head.appendChild(googleScriptEl);
    };

Other analytics scripts.
    <script>
      window._lload("//fonts.walmart.com/fqp0lia.js", function() {
        Typekit.load();
      });
       _wml.config = {
            ccm: { ... }
      };
      window._wml.seoTags = (function e(r) { ... })({configs:...})
      window.__WML_REDUX_INITIAL_STATE__ = { ... }  // JSON.stringify(store)
      (function(e) {
        var t = e.document;
        BOOMR = e.BOOMR || {};
        BOOMR.plugins = BOOMR.plugins || {};
        BOOMR.plugins.pageMeta = {
          init: function(r) {
            localStorage.setItem(n.localStorageTestKey, n.localStorageTestKey);
            BOOMR.addVar("ref", t.referrer);
            BOOMR.addVar(m_name, e.performance.memory[m_name])
            BOOMR.addVar("wH", e.innerHeight || t.body.clientHeight || t.documentElement.clientHeight);
            BOOMR.addVar("tags", n.pageTags.join("|"));
            return this
          },
          addConversion: function(e, t) {
            BOOMR.addVar("conversion", n.pageConversions.join("|"))
          }
        }
      })(window);
      (function(e) {
        try {
        } catch (t) {}
      })(window);
    </script>


## Electrode server entry point, `server/index.js`

Load the asset using isomorphic loader, read server config in, and and start the server.

```
var extendRequire = require("isomorphic-loader/lib/extend-require");

extendRequire({assetsFile: "dist/isomorphic-assets.json"})
  .then(function () {
    /* eslint-disable global-require */
    require("@walmart/electrode-server")(require("@walmart/electrode-config").config)
      .then(function () {
        // enable component caching based on ccm
        if (confVariable.getBooleanValue(
            confVariable.getConfigVariable("ccm[\"product-app\"].features.enableComponentCache"))) {
          require("./product-ssr-cache-config");
        }

        // setup logger and fetchLogger for electrode-fetch
        var logger = require("@walmart/electrode-ui-logger");
        var fetchLogger = function (level, data) {
          if (isLogging("isLoggingFetchEnabled")) {
            logger.log([level, "splunk", "logmon", "fetch"], {data: data});
          }
        };
        require("@walmart/electrode-fetch").setListener(fetchLogger);
        /* eslint-enable */
      });
  })
```

## Bootstrapping React application electrode-react-webapp and SSR template/index.jsx

Setup page header scripts and populate _wml.config with info known from server.

    import Cookies from "@walmart/electrode-cookies";
    const strip = (text) => text.replace(/^\s*|\s*$/gm, "");
    const dynamicDataLoaderSrc = scriptLoader.loadDynamicDataLoader();
    const defaultCdnHost = "i5.walmartimages.com";
    // An empty script act as a dummy to trick torbit to rewrite the URL so we can
    // look it up and extract the rewritten host name.  It will have the async attr.
    const dummyScript = `//${defaultCdnHost}/dfw/63fd9f59-c534/7237d572-0c98-4eab-974b-3b694e72f5ba/v1/ft.js`;

    const _wmlInitScripts = [`window._wml = {defaultCdnHost: "${defaultCdnHost}"};`];

    const wmlDataResolver = strip(`(function () {
      _wml.config = {ccm: data.get("ccm"), ui: data.get("uiConfig"), expoCookies: data.get("expoCookies")};
      _wml.correlationId = data.get("correlationId");
      _wml.jwt = data.get("jwt");
      _wml.envInfo = data.get("envInfo");
      window._exp = data.get("expData");
    })();`);

    class Index extends React.Component {
       _dynamicDataScript() {
        const {ccm, jwt, correlationId, uiConfig, envInfo} = this.props;
        const jwtScr = jwt ? `_wml.jwt = "${jwt}";` : "";
        const expoCookies = this._getExpoCookies();
        return `_wml.config = {
          ccm: ${JSON.stringify(ccm)},
          ui: ${JSON.stringify(uiConfig)},
          expoCookies: ${JSON.stringify(expoCookies)}
        };
      }

      _injectScripts(scripts) {
        return scripts.map((scripts) =>
          typeof scripts === "string" ?
            <script dangerouslySetInnerHTML={{__html:scripts}}/> :
            scripts.map((scr) => <script {...scr} />));
      }

      render() {
        const {ccm, jwt, correlationId, uiConfig, noPciCompliance, envInfo, typekitId, metaTags, isMobile} = this.props;
        const typeKitSrc = scriptLoader.loadTypeKit(typekitId);

        const scripts = [
          typeKitSrc,
          noPciCompliance ? "" : dynamicDataLoaderSrc,
          noPciCompliance ? "" : wmlDataResolver,
          noPciCompliance ? this._dynamicDataScript() : ""
        ].concat(this.props.unbundledJS.enterHead);
    }


## Inject Initial COmponent HTML and State with Redux Route Engine

  https://github.com/electrode-io/electrode-redux-router-engine/blob/master/lib/redux-router-engine.js#L19

1. The first thing that we need to do on every request is create a new Redux store instance. The only purpose of this store instance is to provide the initial state of our application.
2.  Wrap the router to App page inside <Provider store={store}> to so all components can access store data
    const html = renderToString(
        <Provider store={store}>
          <App />
        </Provider>
    )
    const preloadedState = store.getState()

    // Send the rendered page back to the client
    res.send(renderFullPage(html, preloadedState))

   
   <script>
      window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState)}
   </script>

   const getBootstrapScript = function getBootstrapScript(storeState) {
     return `window.__WML_REDUX_INITIAL_STATE__ = ${encodeScript(JSON.stringify(storeState))};`;
   };


3. On the client side, client/app.jsx, grab the store data and create the store again.

    // Grab the state from a global injected into server-generated HTML
    const preloadedState = window.__PRELOADED_STATE__
    const initialState = window.__WML_REDUX_INITIAL_STATE__;
    // Create Redux store with initial state
    const store = configureStore(initialState);
    const store = createStore(counterApp, preloadedState)

    // Note: Change suffix to `.js` if not using actual JSX.
    ReactDOM.render((
        <ElectrodeApplication
          canary={canary}
          canaryMessage={canaryMessage}
          canaryRules={canaryRules}
          onAnalyticsEvent={analyticsHandler}>
          <Provider store={store}>
            <Router history={browserHistory}>{routes}</Router>
          </Provider>
        </ElectrodeApplication>
      ),
      rootEl
    );

## Electrode server app.js init redux router engine that exports fn to take request object and fill redux store data.

Redux router engine takes `createReduxStore` fn and create the store, and render store data and html string to response.

    return (options.createReduxStore || this.options.createReduxStore).call(this, req, match)
      .then((store) => {
        return {
          status: 200,
          html: this._renderToString(req, store, match, withIds),
          prefetch: stringifyPreloadedState(store.getState())
        };
      });


server/index.js extendRequire electrode-server with configs and set up fetch listener.
```
    var extendRequire = require("isomorphic-loader/lib/extend-require");
    extendRequire({assetsFile: "dist/isomorphic-assets.json"})
      .then(function () {
        require("@walmart/electrode-server")(require("@walmart/electrode-config").config)
          .then(function () {
            require("@walmart/electrode-fetch").setListener(fetchLogger);
          }
        });
```

server/app.js then init reduxRouterEngine.

```
// Export a function that takes in `request` object and returns an html object
module.exports = reduxRouterEngine(routes, function (req) {
  var isMobile = resolveDeviceType(req.headers) === DEVICE_TYPE_MOBILE;
  var isBot = isCrawler(req.headers);
  var isAdsEnabledCCM = uiConfig.ccm["product-app"]
    ? getBooleanValue(uiConfig.ccm["product-app"].features.enableAdsModule) : false;
  var isAdsEnabledCookie = adsCookieValueConverter(req);
  // Ads will be enabled based on the following order if CCM (on) or Cookie present
  var isAdsEnabled = isAdsEnabledCCM || isAdsEnabledCookie;
  var store = configureStore({
    uuid: getUUID(),
    isMobile: isMobile,
    isBot: isBot,
    isAdsEnabled: isAdsEnabled
  });
  var pageType = PRODUCT_PAGE;
  // Matches routes at `/{seoText}/{productId?}` defined in `default.json`
  // seoText is optional but we can't have an optional param in the middle of the route
  // so we make productId optional and check if it exists.
  // if productId is null, we know `seoText` is our `productId`
  var productId = req.params.productId;
  var portalSelectedSellerId = req.query && req.query.portalSelectedSellerId;
  var wmlspartner = req.query && req.query.wmlspartner;
  // if the path has /sellers
  // then the path we are hitting is
  // /:productid/sellers
  if (req.route.path.endsWith("/sellers")) {
    pageType = SELLER_PAGE;
  } else if (!productId) {
    productId = req.params.seoText;
  }

  var payload = {
    productId: productId,
    header: req.headers,
    pageType: pageType,
    selected: !_.isEmpty(wmlspartner),
    portalSelectedSellerId: portalSelectedSellerId
  };

  return Promise.all([
    store.dispatch(HeaderActions.bootstrapHeader(req, quimbyOptions)),
    store.dispatch(FooterActions.bootstrapFooter(req, quimbyOptions)),
    store.dispatch(bootstrapProduct(payload)),
    store.dispatch(bootstrapP13N("Product", req, {
      parentItemId: productId
    }))
  ]).then(function () {
    if (req && req.app && req.app.pageMetadata) {
      req.app.pageMetadata.addSource("iro", seoMetadataAdapter(store.getState()));
    }
    return store;
  });
}, {
  renderWithIds: false
});
```

## CSR with React resolver render or ReactDOM.render

Electrode client/app.js just init ElectrodeApplication.

```
const initialState = window.__WML_REDUX_INITIAL_STATE__;
const store = configureStore(initialState);
// Note: Change suffix to `.js` if not using actual JSX.
ReactDOM.render((
    <ElectrodeApplication
      canary={canary}
      canaryMessage={canaryMessage}
      canaryRules={canaryRules}
      onAnalyticsEvent={analyticsHandler}>
      <Provider store={store}>
        <Router history={browserHistory}>{routes}</Router>
      </Provider>
    </ElectrodeApplication>
  ),
  rootEl
);
```

or using react-resolve

```
import { Resolver } from "react-resolver";

const run = () => {
  const rootEl = document.querySelector(".js-content");
  Resolver.render(() => {
    // Create a store with already bootstrapped initialState
    const store = createStore();
    configureStateGetter(store.getState);

    return (
      <ElectrodeApplication
        canary={canary}
        canaryMessage={canaryHandler}
        canaryRules={CanaryRules}
        onAnalyticsEvent={analyticsHandler}
      >
        <Root store={store} />
      </ElectrodeApplication>
    );
  }, rootEl);
};
```


## Electrode React App.

The `electrode-archetype-react-app` plugin support the app configuration with multiple entry points and allows to select JS and CSS bundles (or "chunks" in the Webpack terms) based on request data. By default, without any configuration, only "main" JS and CSS chunks will be used.

Webpack will create bundles for each app entry point. To do that, place entry.config.js module into your app's client directory:

Here is an example of entry.config.js:

    module.exports = {
      "web": "./app-web.js",
      "ios": "./app-ios.js",
      "android": "./app-android.js"
    };

In order to allow specific chunks selection, use bundleChunkSelector configuration option:

    const config = {
      plugins: {
        "@walmart/electrode-react-webapp": {
          options: {
            bundleChunkSelector: "./server/chunk-selector.js",
            ...
          }
    };

Here chunk-selector.js is a JS module that should be implemented by the application. This module should export the function that implements the bundle selection logic:

module.exports = function (request) {
  const userAgent = request.headers["user-agent"].toLowerCase();

  if (userAgent.indexOf("wmtapp") > 0) {
    return {
      js: "mobile",
      css: "mobile"
    };
  }

  return {
    js: "web",
    css: "web"
  };
};

This code assumes that the app has 2 entry points named "mobile" and "web" declared as entry points in the app's Webpack config.


## WebPack

NODE_ENV=production webpack --config ${npm_package_config_archetype}/config/webpack/webpack.config.js --colors

staticPaths Plugin: static files path prefix "dist"

Webpack config is composed and exported from electrode-archetype-react-app.

    https://github.com/electrode-io/electrode-archetype-react-app/tree/master/config/webpack

It used webpack-partial (https://github.com/webpack-config/webpack-partial) to compose entry/loader/plugin.
base.js contains appEntry and babelConfig/isomorphicConfig.

Webpack use babel-loader to transpiling es6. Babel config specifies module:{[loaders:[]]}
  const webpackConfig = {
    module.exports = {
      entry: './src/app.js',
      output: {
        path: './bin',
        filename: 'app.bundle.js',
      },
      module: {
        loaders: [{
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
      }]
    }
  }

Not supported override webpack configs.
  https://github.com/electrode-io/electrode-archetype-react-component/issues/12
1. we are using webpack-config to merge base.js and flow on top configs from different envs.
  https://www.npmjs.com/package/webpack-config

    var _ = require("lodash");
    var mergeWebpackConfig = require("webpack-partial").default;
    var WebpackConfig = require("webpack-config").default;
    var getRootConfig = require("./get-root-config");

    var baseConfig = require("./base.js");
    var defineConfig = require("./partial/define.js");
    var optimizeConfig = require("./partial/optimize");
    var localesConfig = require("./partial/locales");
    var productionSourcemapsConfig = require("./partial/sourcemaps-remote");

    module.exports = new WebpackConfig().merge(_.flow(
      mergeWebpackConfig.bind(null, {}, baseConfig),
      optimizeConfig(),
      localesConfig(),
      defineConfig(),
      productionSourcemapsConfig()
    )()).merge(getRootConfig("webpack.config.dev.js"));

2. base.js defines base webpack config js object.

a. multiple entry points checked.
    var archetypeNodeModules = path.join(__dirname, "../../node_modules");
    
    var archetypeDevNodeModules = path.join(
      // A normal `require.resolve` looks at `package.json:main`. We instead want
      // just the _directory_ of the module. So use heuristic of finding dir of
      // package.json which **must** exist at a predictable location.
      path.dirname(require.resolve("@walmart/electrode-archetype-react-app-dev/package.json")),
      "node_modules"
    );

    var context = path.join(process.cwd(), "client");
    function appEntry() {
      var entryPath = path.join(context, "entry.config.js");  // client/entry.config.js

      /* eslint-disable no-console, global-require */
      try {
        return require(entryPath);
      } catch (ex) {
        console.log("Entry point configuration is not found, using default entry point...");
      }
      /* eslint-enable no-console, global-require */
      return fs.existsSync(path.join(context, "app.js")) ? "./app.js" : "./app.jsx";
    }

b. output bundle and resolver.
    var entry = appEntry();
    var multiBundle = _.isObject(entry);

    var baseConfig = {
      __wmlMultiBundle: multiBundle,
      cache: true,
      context: context,
      debug: false,
      entry: entry,
      output: {
        path: path.join(process.cwd(), "dist/js"),
        pathinfo: inspectpack ? true : false, // Enable path information for inspectpack
        filename: multiBundle
          ? "[name].bundle.[hash].js"
          : "bundle.[hash].js"
      },
      resolve: {
        root: [archetypeNodeModules, archetypeDevNodeModules, process.cwd()],
        modulesDirectories: ["client", "node_modules", "node_modules/@walmart"],
        extensions: ["", ".js", ".jsx"]
      },
      resolveLoader: {
        root: [archetypeNodeModules, archetypeDevNodeModules, process.cwd()]
      }
    };

    module.exports = _.flow(
      mergeWebpackConfig.bind(null, {}, baseConfig),
      babelConfig(),
      extractStylesConfig(),
      fontsConfig(),
      imagesConfig(),
      statsConfig(),
      isomorphicConfig(),
      jsonConfig()
    )();


4. For webpack dll bundle, we need 2 webpack config, one for 3rd party Vender, config/vendor/webpack.config.js, and one for app bundle.
  
  https://robertknight.github.io/posts/webpack-dll-plugins/
    var baseConfig = require("@walmart/electrode-archetype-react-app/config/webpack/base");
    var defineConfig = require("@walmart/electrode-archetype-react-app/config/webpack/partial/define");
    var optimizeConfig = require("@walmart/electrode-archetype-react-app/config/webpack/partial/optimize");

    var VENDOR_PATH = path.join(process.cwd(), "config/vendor/ads");

    var vendorConfig = function () {
      return function (config) {
        return mergeWebpackConfig(config, {
          entry: path.join(VENDOR_PATH, "load-ads.js"),
          output: {
            path: VENDOR_PATH,
            filename: "load-ads.min.js"
          }
        });
      };
    };

    // Utter hack allowing to reuse the archetype webpack config and in the meantime to not generate
    // source maps and stats for the tealeaf bundle.
    baseConfig.plugins = filter(baseConfig.plugins, function (plugin) {
      return get(plugin, "opts.filename", "").indexOf("stats") === -1;
    });

    module.exports = flow(
      mergeWebpackConfig.bind(null, {}, baseConfig),
      optimizeConfig(),
      defineConfig(),
      vendorConfig()
    )();

5. From gulp task, we call webpack.
  https://github.com/electrode-io/electrode-archetype-react-app/blob/90b2c0e8b575ed2ff4d0ac41d3a1ac8eb08c1865/arch-gulpfile.js
  
  gulpfile.js just require the react-app which has the webpack defined.

    require("electrode-archetype-react-app")();
  
  Now gulp tasks are defined.
    /*
     *
     * For information on how to specify a task, see:
     *
     * https://www.npmjs.com/package/electrode-gulp-helper#taskdata
     *
     */
    const tasks = {  
        "build-dist-dev-static": {
          desc: false,
          task: `webpack --config ${config.webpack}/webpack.config.dev.static.js --colors`
        },
        "build-dist-min": {
          dep: [".production-env"],
          desc: false,
          task: `webpack --config ${config.webpack}/webpack.config.js --colors`
        },
      }
    }

6. Static path.

  By default, the static files are served from dist under CWD.

  config/default.json
    "pathPrefix": "dist"

  Route /html will serve files from dist/html
  Route /js will serve files from dist/js
  Route /images will serve files from dist/images

    const config = require("electrode-confippet").config;
    const staticPathsDecor = require("electrode-static-paths");
    const supports = require("electrode-archetype-react-app/supports");

    supports.cssModuleHook({
      generateScopedName: "[name]__[local]___[hash:base64:5]"
    });

    require("electrode-server")(config, [staticPathsDecor()]);

7. assets.json

After gulp dev, the .isomorphic-loader-config.json will be created.
    {
      "valid": true,
      "version": "1.6.0",
      "timestamp": 1477003340802,
      "context": "client",
      "output": {
        "path": "/",
        "filename": "bundle.dev.js",
        "publicPath": "http://localhost:2992/js/"
      },
      "assets": {
        "marked": {},
        "chunks": {
          "main": [
            "bundle.dev.js",
            "style.65199902dc266f14ecf0.css",
            "style.css",
            "bundle.dev.js.map",
            "style.65199902dc266f14ecf0.css.map",
            "style.css.map"
          ]
        }
      },
      "webpackDev": {
        "skipSetEnv": false,
        "url": "http://localhost:2992",
        "addUrl": false
      },
      "isWebpackDev": true,
      "assetsFile": "/isomorphic-assets.json"
    }

In dist/isomorphic-assets.json
    {
      "marked": {},
      "chunks": {
        "main": [
          "bundle.7984e1c64fc102cdea0a.js",
          "style.7984e1c64fc102cdea0a.css",
          "../map/bundle.7984e1c64fc102cdea0a.js.map",
          "../map/style.7984e1c64fc102cdea0a.css.map"
        ]
      }

server/plugins/webapp/index.js is hapi plugin that hander route to /.

    const registerRoutes = (server, options, next) => {
      return Promise.try(() => loadAssetsFromStats(pluginOptions.stats))
          .then((assets) => {
            const devServer = pluginOptions.devServer;
            pluginOptions.__internals = {
              assets,
              devJSBundle: `http://${devServer.host}:${devServer.port}/js/bundle.dev.js`,
              devCSSBundle: `http://${devServer.host}:${devServer.port}/js/style.css`
            };

            _.each(options.paths, (v, path) => {
              assert(v.content, `You must define content for the webapp plugin path ${path}`);
              server.route({
                method: "GET",
                path,
                config: v.config || {},
                handler: makeRouteHandler(pluginOptions, resolveContent(v.content))
              });
            });
            next();
          })
          .catch(next);
      };
    }

  function makeRouteHandler(options, userContent) {
    const CONTENT_MARKER = "{{SSR_CONTENT}}";
    const BUNDLE_MARKER = "{{WEBAPP_BUNDLES}}";
    const TITLE_MARKER = "{{PAGE_TITLE}}";
    const PREFETCH_MARKER = "{{PREFETCH_BUNDLES}}";
    const WEBPACK_DEV = options.webpackDev;
    const RENDER_JS = options.renderJS;
    const RENDER_SS = options.serverSideRendering;
    const html = fs.readFileSync(Path.join(__dirname, "index.html")).toString();

    return (request, reply) => {
      const renderPage = (content) => {
      return html.replace(/{{[A-Z_]*}}/g, (m) => {
        switch (m) {
        case CONTENT_MARKER:
          return content.html || "";
        case TITLE_MARKER:
          return options.pageTitle;
        case BUNDLE_MARKER:
          return makeBundles();
        case PREFETCH_MARKER:
          return addPrefetch(content.prefetch);
        default:
          return `Unknown marker ${m}`;
        }
      });
    };

  }

## Source Maps Example

Load the URL in your browser. We'll use Chrome: http://logger.walmart.com/
Get the hash revision. From Chrome dev tools console execute: console.log(window._wml.config.ui.applicationSha) . Here it returns: 229ee67e159f5956aa98066cddde2a35c5d2bb9d
From your device terminal, git checkout the revision: git checkout 229ee67e159f5956aa98066cddde2a35c5d2bb9d
Update the frontend:

$ cd project
$ builder run build
From project folder run: builder run server. You should get the following log: Started connect web server on http://0.0.0.0:3000

Go back to the browser and reload the url: http://logger.walmart.com/
Check the source maps are being loaded: in chrome dev tools, network tab, XHR tag. *.map files should be loaded.
