## Redux Route Engine and Redux Store

1. src/store/index.jsx configureStore with rootReducer and initialState.

    import ExEnv from "exenv";
    import thunkMiddleware from "redux-thunk";
    import { createStore, applyMiddleware } from "redux";
    import { reduxAnalyticsMiddleware } from "@walmart/wmreact-analytics";

    import { canary } from "../canary";
    import { rootReducer } from "../reducers";

    const createStoreWithMiddleware = applyMiddleware(
      thunkMiddleware,
      reduxAnalyticsMiddleware({
        callback: (evt) => {
          canary.process(evt);
        }
      })
    )(createStore);

    export const configureStore = (initialState) => {
      // We need to capture the initial state for Beacon analytics.
      // initial state is where the state from Server Side rendering is stored.
      const event = {
        _type: "redux-initial-state",
        state: initialState
      };
      canary.process(event);
      if (ExEnv.canUseDOM && window &&
        (window.location.href.indexOf("http://dev.walmart.com:3000/product/") === 0 ||
          window.location.href.indexOf("http://dev.walmart.com:4000") === 0)) {
        return createStoreWithMiddleware(
          rootReducer,
          initialState,
          window.devToolsExtension ? window.devToolsExtension() : (f) => f
        );
      }
      return createStoreWithMiddleware(rootReducer, initialState);
    };

2. RootReducer  src/reducers/index.jsx
    export const rootReducer = combineReducers({
      isMobile,
      recommendationMap,
      header,
      footer
    });

3. recommendationMap from p13n/reducers/index.jsx
    export const irsDataMap = (state = {}, action) => {
      switch (action.type) {
      case RECEIVE_IRSDATAMAP:
        if (action.irsDataMap) {
          const irsDataObj = get(action, "irsDataMap", {});
          const resultDetail = get(action, "resultDetail", {});
          const opts = get(action, "opts", {});
          const { adaptedData } = transformModules({
            irsDataObj,
            resultDetail,
            opts
          });
          return assign({}, state, {
            ...adaptedData
          });
        }
        return state;
      }
    }
    export const recommendationMap = combineReducers({
      irsDataMap,
      resultDetail,
      visitorId,
    });

  export default recommendationMap;

4. Component mapStateToProps invoke Async Action fetch dispatch the action to trigger reducer update state.
  export const mapDispatchToProps = (dispatch) => {
    return {
      onAjaxRender: (options) => { dispatch(ajaxRequest(options));
    },
  }

  export const ajaxRequest = (params) => (dispatch) => {
    dispatch(requestRecommendation(opts));
    return fetchWrapper(options);
  }

  export const fetchWrapper = (options) => {
    const rviRequest = p13nFetch(rviOpts)
      .then((p13nJson) => {
        dispatch(receiveIrsDataMap({
              irsData: rviData,
              resultDetail
            }, rviOpts));
      }
  }

3. product/client/app.js 

When client start up, configureStore and give to Provider.

    import { Provider } from "react-redux";
    import "babel-polyfill";
    import "match-media";
    import "match-media/matchMedia.addListener";

    import React from "react";
    import ReactDOM from "react-dom";

    import { routes } from "./routes"; // client/routes.jsx
    import { Router, browserHistory } from "react-router";

    import { Provider } from "react-redux";

    import { ElectrodeApplication } from "@walmart/electrode-application";
    import { setListener } from "@walmart/electrode-fetch";

    import { configureStore } from "@walmart/redux-product-components/lib/store";
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

4. client/routes.jsx

    import React from "react";
    import { Route, IndexRoute} from "react-router";

    import Config from "@walmart/electrode-ui-config";

    import { Page } from "./components/page";
    import { Home } from "./components/home";
    import ProductContainer from "./components/product-container";

    export const routes = (
      <Route path={Config.fullPath()} component={Page}>
        <IndexRoute component={Home}/>
        <Route component={ProductContainer} path={Config.fullPath("/:productId")}/>
        {/* This below route is to handle use cases like /product/1531/#reviews */}
        <Route component={ProductContainer} path={Config.fullPath("/:productId/")}/>
        <Route component={Seller} path={Config.fullPath("/:productId/sellers")}/>
        <Route component={ProductContainer} path={Config.fullPath("/:seoText/:productId")}/>
        <Route component={ProductContainer} path={"/ip/:seoText/:productId"}/>
        <Route component={ProductContainer} path={"/ip/:productId"}/>
      </Route>
    );


5. SSR. http://www.electrode.io/docs/redux_router_engine.html

    import ReduxRouterEngine from 'electrode-redux-router-engine';
    import { routes } from "../../client/routes";
    const Promise = require("bluebird");
    import { createStore } from "redux";

    let rootReducer = (s, a) => s;

    function createReduxStore(req, match) {
      let initialState = {};
      const store = createStore(rootReducer, initialState);
      return Promise.all([
          // DO ASYNC THUNK ACTIONS HERE : store.dispatch(bootstrapApp())
          Promise.resolve({})
        ]).then(() => {
          return store;
      });
    }

    module.exports = (req) => {

      if (!req.server.app.routesEngine) {
        req.server.app.routesEngine = new ReduxRouterEngine({ routes, createReduxStore });
      }

      return req.server.app.routesEngine.render(req);
    };

Or using @walmart/electrode-redux-router-engine, who will render.

    var reduxRouterEngine = require("@walmart/electrode-redux-router-engine");
    module.exports = reduxRouterEngine(routes, function (req) {
      var isMobile = resolveDeviceType(req.headers) === DEVICE_TYPE_MOBILE;
      var store = configureStore({
        isMobile: isMobile    
    });
    var pageType = PRODUCT_PAGE;
    var productId = req.params.productId;
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

6. Or pure client side rendering.

1. checkout/client/container/root.container.jsx

    import React, {Component, PropTypes} from "react";
    import {Provider} from "react-redux";
    import "babel-polyfill";
    import ModalContainer from "@walmart/checkout-state-container/lib/components/modal-container";

    import IntlProvider from "./intl-provider.container";
    import DevTools from "client/devtools";
    import createExceptionHandler from "client/error/exception.handler";
    import Routes from "client/routes/client.routes";
    import modals from "client/modals";
    import EnvInfo from "client/components/env-info";

    export default class Root extends Component {
      constructor(props, context) {
        super(props, context);
        const {store} = props;

        store.reduxCollectedReducer.analytics = analytics;
      }

      componentDidMount() {
        const {analytics} = this.context;
        const {store} = this.props;
        createExceptionHandler(store.dispatch);
      }

      render() {
        const {store} = this.props;
        return (
          <Provider store={store}>
            <IntlProvider messages={{}} defaultLocale="en-US">
              <div>
                <DevTools />
                <Routes />
                <ModalContainer modals={modals}/>
                <EnvInfo/>
              </div>
            </IntlProvider>
          </Provider>
        );
      }
    }

    Root.propTypes = {
      store: PropTypes.object
    };

    Root.contextTypes = {
      analytics: PropTypes.object
    };

2. client/app.jsx

  import React from "react";
  import { Resolver } from "react-resolver";
  import { ElectrodeApplication } from "@walmart/electrode-application";
  import createStore from "./store/store";
  import Root from "./container/root.container";

  const ready = (fn) => {
      document.addEventListener("DOMContentLoaded", fn);
  };

  /**
   * An entry point to an Electrode Checkout application
   */
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

  export const startApplication = () => {
    ready(() => initBridge().then(run));
  };

3. client/store/store.jsx

    const createCheckoutStore = compose(
      applyMiddleware(
        promiseMiddleware,
        exceptionReporter,
        multiMiddleware,
        effectsMiddleware,
        fetchMiddleware,
        thunkMiddleware,
        routerMiddleware(history)
      ),
      DevTools.instrument()
    )(createStore);

    export default (initialState) => appReduxCollector(
      createCheckoutStore
    )(reducer, initialState);


6. Component access Store.
  export const mapStateToProps = (state) => {
    const irsDataMap = get(state, "recommendationMap.irsDataMap", {});
  }
