# Packaging

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
    <script>
        _wml.perf.mark("before-bundle")
    </script>
    <script src="https://i5.wal.co/dfw/63fd9f59-bc1c/7fb7089a-1cd2-4d7c-813a-5de7d05d0f86/v1/bundle.ad843d7ce38658e8c011.js"></script>
    <script>
        _wml.perf.mark("after-bundle")
    </script>

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
      window.__WML_REDUX_INITIAL_STATE__ = { ... }
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

## Redux Route Engine

Electrode server app.js init redux router engine that exports fn to take request object and fill redux store data.

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


