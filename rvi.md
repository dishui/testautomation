# IT 650-837-5543  $twoO16q2 $walmart4Jet

https://confluence.walmart.com/display/~hyan2/wireshark


# RVI 
    https://gist.github.com/steve-jansen/61a189b6ab961a517f68
    sep stop

    ack ApplicationContext | grep hop-app-core.xml | cut -d":" -f1 > /tmp/x && vi `cat /tmp/x`
    
    ./gradlew clean go && ./gradlew dW
    ./gradlew clean test # for server test
    
    cd atlas-common/frontend // must run from atlas-common, not from homepage/common
    grunt jshint
    grunt server:test
    grunt test:no-cov --grep="holideal-view"

    http://localhost:9875/test.html?grep=common%2F%20recommendations
    http://localhost:9875/test.html?grep=common%2F%20recommendations%2F%20holideal-view
    http://localhost:9875/test.html?grep=common%2F%20recommendations%2F%20models%2F%20holideal-model
    
    git commit --allow-empty -m "trigger ci"

    git submodule status
    git submodule update --remote
    git push origin master --no-verify
    
    $ COUNT=0; while grunt test:no-cov; do (( COUNT++)) ; done; echo "Tries: $COUNT"

    git diff --name-only phase1b
  
    for f in $(git diff --name-only atlas-r-14-18..rec-merge-master | egrep -iv 'irs|p13n|recommendations'); do git diff atlas-r-14-18:$f rec-merge-master:$f | tee -a ~/dev/tmp/production.diff; done;

# Source Map:  

    grunt live --minify=false
    open lib.js and product-view-deferred.js

    https://gecgithub01.walmart.com/GlobalProducts/atlas-common/blob/master/frontend/docs/frontend/build.md#source-maps
    
    cd frontend
    ./GO
    grunt build-js:frontend:core-bundle

    grunt server:sources

############
# Expo cookie, use ?_xf=XXX and WWW_PREVIEW_DATE
############
  https://www.walmart.com/ip/37650848?_xf=CTLtb.N_0Md&WWW_PREVIEW_DATE=1475876304993

  Internal ip addrs are excluded from expo assign. https://jira.walmart.com/browse/PGPABTEST-4152

############
# Graylog
############
  
OO_ASSEMBLY:products AND OO_ENV:prod\-a AND "/product/electrode/api/p13n" AND context_subtype:P\-END AND "page=ProductRvi"

OO_ASSEMBLY:products AND OO_ENV:prod\-a AND "/product/electrode/api/p13n" AND context_subtype:P\-END AND "page=Product"

  http://discovery-graylog.walmart.com/streams/57891326e8aede622eb2f6d5/search?interval=minute&width=1695&relative=172800&page=1&sortOrder=desc&q=OO_ASSEMBLY%3Aproducts%20AND%20OO_ENV%3Aprod%5C-a%20AND%20request_path%3A%5C%2Fproduct%5C%2Fapi%5C%2Fp13n%2A%20AND%20msg%3AResponse%20AND%20context_subtype%3AP%5C-END&rangetype=relative&fields=message%2Csource&sortField=timestamp


  {"name":"stdout","hostname":"m-c02m72h2fd59.homeoffice.wal-mart.com","pid":42487,"level":30,"tags":["info","splunk","logmon","fetch"],"context":null,"data":{"data":{"state":"end","index":12,"url":"http://irs-ws.prod-us.irs-ws.prod.walmart.com/irs-ws/irs/4.0?api_key=01&config_id=2&module=Product&modules_bit_field=0&client_guid=190a790e-b0f6-47e5-8657-edd79dcd8a74&page=Product&parent_item_id=16480941&sem=false&visitor_id=QHp-40xqMQ6fdiS5yegN-Q","receiveTime":699,"translateTime":52,"time":751,"totalTime":751,"retry":0}},"msg":"FETCH","time":"2016-10-17T21:03:17.834Z","v":0}


## irs-ws/irs/4.0? call    
    http://irs-ws.stg.irs-ws.prod.walmart.com/irs-ws/irs/4.0?jsonp=false&callback=&modules_bit_field=0&api_key=01&visitor_id=CpVbJ9zK4kWqPIBXH9Df7E&customer_id_enc=&config_id=6&parent_item_id=21128150,1085407,10450114,21311918,20595713&category=&facet=&dept=&thumbs=&to_shipping_threshold=&client_guid=3d427f54-6519-4471-8cca-6c51dd704843&mode=DATA&cache_pipeline=default

    http://irs-ws.prod-us.irs-ws.prod.walmart.com/irs-ws/irs/4.0?jsonp=false&callback=&modules_bit_field=0&api_key=01&visitor_id=DGnzLK0tTQXzW2vk5tI2T4&customer_id_enc=&config_id=2&parent_item_id=15716903&category=&to_shipping_threshold=&client_guid=3177e07f-9d04-4c27-84cb-1f4ef1cf5a1d&mode=DATA&cache_pipeline&prettyPrint=true&debug=true

    i%2424799089%2C0%3A5438%3A133198%3A1228782%3A1224689%3B10037756%2C0%3A4104%3A4113%3A5063%3B29114188%2C0%3A4104%3A4115%3A5096%3B30414219%2C0%3A4104%3A4115%3A5096%3B10984488%2C0%3A976759%3A976782%3A1001579%3A1001323%3B10450115%2C0%3A976759%3A1071964%3A976788%3A1001466%3B46519525%2C0%3A3944%3A3951%3A132982%3A1231068%3A1172199%3B

    http://irs-ws.prod-us.irs-ws.prod.walmart.com/irs-ws/irs/4.0?api_key=01&config_id=72&module=ProductRvi&modules_bit_field=0&client_guid=bc2b211c-e87e-4816-8021-ee2868008e88&page=ProductRvi&parent_item_id=24799089%2C10037756%2C29114188%2C30414219%2C10984488%2C10450115%2C46519525&sem=false&visitor_id=VWvib58ddOEUz4UFOgem-s

######
## React
######

  https://confluence.walmart.com/display/~vchoud1/React+Home
  https://confluence.walmart.com/display/~vchoud1/Training+and+Learning

Add p13n module to any app.
  https://gecgithub01.walmart.com/R-search-category/search-electrode-app/pull/70/files

    nvm use 4
    npm -v 
    npm install -g npm@3

    rm npm-shrinkwrap.json
    npm run lock
    npm run update-shrinkwrap

    http://quimby-stg.mobile.walmart.com/tempo?tenant=Walmart.com&channel=WWW&pageType=collections

  https://confluence.walmart.com/pages/viewpage.action?spaceKey=PGPTOOLS&title=NPM+and+Nexus
    
    curl -vu <username> https://gecgithub01.walmart.com/api/v3/user
      Paste what you obtained from the Authorization: Basic field into the _auth field for your $HOME/.npmrc file.
    
    git remote add upstream <path-to-main-repo>

    npm version patch
    git push origin master --tags
    npm publish [--tag legacy]
    npm info @walmart/wmreact-p13n@6.1.3

    $ np patch
    $ np 1.0.2
    $ np 1.0.2-beta.3 --tag=beta

    # change npm module, install it directly
    rm -f ./npm-shrinkwrap.json
    npm i @walmart/wmreact-p13n
    npm install /app/workspace-atlas/react/p13n

    npm pack
    npm install ../p13n/

    builder run build-lib && /bin/cp -fr lib ../product/node_modules/\@walmart/wmreact-p13n/ && /bin/cp -fr lib ../product/node_modules/\@walmart/redux-product-components/node_modules/\@walmart/wmreact-p13n/


  ### Test
    /* eslint-disable no-console */
    /* eslint-disable no-undef */
    console.log("component -->", component);

    builder run test 
    builder run check
    
    component.setState({ open: null });
    instance._expandToggle(1);
    expect(component).to.shallowly.have.state().eql({ open: 1 });

    props.productData.tileTitle = "items you viewed";
    expect(component).to.shallowly.find(".TempoItemTile-title").to.have.length(1);


### App, OneOps / Jenkins
    https://gecgithub01.walmart.com/electrode-ops/docs#anchor-create-the-application
    https://gecgithub01.walmart.com/electrode-ops/oneops-env#oneops-cli-setup


    HOST=dev.walmart.com ONEOPS_ENVPROFILE=STAGING ONEOPS_ENVIRONMENT=staging NODE_ENV=production builder run server
    HOST=dev.walmart.com ONEOPS_ENVPROFILE=PROD ONEOPS_ENVIRONMENT=prod-a NODE_ENV=production

    ONEOPS_ENVIRONMENT=staging ONEOPS_ENVPROFILE=STAGING builder run hot

    ONEOPS_CI_NAME=os-54847273-1 ONEOPS_CLOUD=stg-dfw2 ONEOPS_COMPUTE_CI_ID=100826633 ONEOPS_ENVIRONMENT=staging ONEOPS_ENVPROFILE=STAGING builder run server

    react/oneops-env/bin/oo-create-electrode.sh -a <ONEOPS_ASSEMBLY_NAME> <APP_NAME> 
    react/oneops-env/bin/oo-create-electrode.sh -a electrode-test-gs getting-started

    bin/oo-set-deploy.sh -a electrode-test-gs1 from-build 72 http://172.16.102.33/job/electrode-getting-started/

    If you deploy a stg build from Jenkin, then go to stage transition to pull.
    go to OneOps UI, transition of your assembly, do a Pull Design, and Commit & Deploy.

  1. create oneops assembly
    bin/oo-create-electrode.sh -a p13n-electrode p13n-electrode


#### Config.ui, CCM.  window._wml.config.ccm

  in default.json:
    basePath: "/product", "/search", "/cart"
  
  in default.js
    module.exports = {
    "ssrUi": {
      "p13nAPI": {
        "p13nUrl": `http://${process.env.HOST || localHost}:${parseInt(rocess.env.PORT, 10) || defaultListenPort}/search`
      }
    }

  For ajax rendering, it will point to current host:port/cart.
  where we have server route defined for p13n endpoint and plugin.
  For SSR, it will directly go to /search and plugin served there.

  in package.json of electrode-ui-config,
    "main": "lib/index.js",
    "browser": "lib/csindex.js",
  
  when it is server side, it will merge ssrUi configs.
    const mergedConfig = _.defaultsDeep({}, config.ssrUi, config.ui);
  

#### Child Context from parent to child, and `this.props.children`

  http://javascript.tutorialhorizon.com/2015/06/06/using-context-and-childcontext-in-react/
  https://facebook.github.io/react/tips/props-in-getInitialState-as-anti-pattern.html

  A component's children (this.props.children) is an array of components.  
  Keyed children to ensure child component destroyed when substate changed.
  
  Parent : { 
    childContextTypes: {foo, bar}
    getChildContext() {
      return { getTempoConfigByZone: (zone) => {}, allModules: this.props.x};
    render() { return <div>{this.props.children}</div>; }
  }
  
  Children: {
    contextTypes: {foo, bar}
    this.context.getTempoConfigByZone();
  }

#### Store.getState()

  In dispatch, use getState(). Inside component, you do mapStateToProps.
    export const ajaxRequest = (page, parentItemId, queryParams={}) => (dispatch, getState) => {
      const {recommendationMap} = getState();
    }

    import {configureStore} from "../store";
    class Upsell extends Component {
      constructor(props, context) {
        this.store = configureStore({});
        console.log("Upsell state ---> ", this.store.getState());
      }
    }

### Async Action creator, Dispatch an action/Promise, a thunk(delayed fn)

  Wrap timeout inside Promise(resolve, reject) and Timeout callback resolve.
    function timeoutProm(duration = 0) {
      return new Promise((resolve, reject) => {
        setTimeout(resolve, duration);})
    
    var p = timeoutProm(1000).then(() => { return timeoutProm(2000);})
                         .then(() => { throw new Error("hmm");})
                         .catch(err => {return Promise.all([timeoutProm(100), timeoutProm(200)]);})

    return Promise.resolve({data});  // create a promise that is resolved with data immediately.

### Router
  Route components get some useful props injected into them when you render, 

  Inside component, you can access route params by:
    URL parameters:  UpsellContainer.props.params.x // path /inbox/messages/:id
    this.props.location.query.bar   /foo?bar=baz
    const mode = get(this.props, "params.location.query.mode", "csr");

### Analytics Collectors -> Context -> Provider -> Processors -> Canary rules.
  https://gecgithub01.walmart.com/react/analytics

  React.Resolver()
    ReactDOM.render()
      <AnalyticsProvider onEvent={this._onAnalyticsEvent}>
        <CollectorContext {...appContext}>
          <ExceptionCollector>
          <ElectrodeApplication canary={canary}
            onAnalyticsEvent={analyticsHandler}>
            <Provider store={store}>
              <Route path={Config.fullPath()} component={Page}>
                <IndexRoute component={CartContainer}/>
                <Route path={Config.fullPath("/upsell")}
                       component={UpsellContainer}/>
              </Route>
              </Router>
            </Provider>
          </ExceptionCollector>
        </CollectorContext>
      </AnalyticsProvider>

Canary Rules: 
  p13n exports rules, p13nPlacementBeacon etc, Product App import and export it into export const canaryRules = [ p13nPlacementBeacon, ...]

###
# Add To cart
#   http://dev.walmart.com:3000/product/39443649
### 

    irsUrl --->  http://irs-ws.prod-us.irs-ws.prod.walmart.com/irs-ws/irs/4.0?api_key=01&config_id=112&module=ProductConti&modules_bit_field=0&client_guid=5a485402-7100-4879-80be-50fc5480a7fd&page=ProductConti&parent_item_id=16480941&sem=false&visitor_id=VWvib58ddOEUz4UFOgem-s

  import {configureStore} from "../store";
   class Upsell extends Component {
     constructor(props, context) {
       super(props);
       this.store = configureStore({});
       console.log("Upsell state ---> ", this.store.getState()); 

  1. drydock to add item
    cd cart/test/automation/drydock
    npm i 
    node engage —cors
    Browser: http://localhost:1337/drydock

  Beacon:

    https://confluence.walmart.com/display/PGPANALYTICS/Canary
    https://gecgithub01.walmart.com/canary/canary-event-pattern
    https://gecgithub01.walmart.com/canary/canary-event-sequence
    https://confluence.walmart.com/display/PGPANALYTICS/Canary+Changelog


################
# Cart proxy to handle re-routed /cart/api/p13n calls to Atlas
################
1. cart webapp need to re-config routing to route walmart.com/cart/api/p13n calls to Cart Proxy backend.
2. Cart Proxy backend needs to expose "/cart/api/p13n" endpoint and calls irs webservice and return untouched irs webservice json back.
3. query parameters for cart modules. e.g., shipping_threshold.
4. The handler of endpoint /cart/api/p13n needs to perform the following:
  a. perform request query parameters and headers check and value extract.
    https://gecgithub01.walmart.com/GlobalProducts/homepage/blob/master/homepage/src/main/java/com/walmart/atlas/irs/IrsController.java#L36
  b. from cart proxy, we shall be able to access atlas-p13n ccm configurations, so we can resolve query paramater, e.g., config_id, etc.
  c. send http request to irs webservice to fetch response json.
    https://gecgithub01.walmart.com/GlobalProducts/atlas-common/blob/master/atlas-core/src/main/java/com/walmart/atlas/global/views/modules/AjaxP13NRecommendation/AjaxP13NRecommendation.java#L70
  d. send the untouched response json back to browser.

5. Pre-requisitions:
  a. cart proxy need to include altas-common package to re-use irs service code for fetching data.
  b. CORS.
  c. any other deps that pro


###############
# item page carousel 
###############

  nvm use 0.10
  /opt/apache-tomcat/webapps
  . ~/bin/setenv.sh 
  catalina run


  Async action creator ajaxRequest/bootstrapP3N -> fetchWrapper -> 
    
    fetchIrsDataMap(opts) --> irsServiceFetch(reply(json))
      .then(respJson) => 
      if (respJson has result.moduleList) {
        const irsData = responseJSON.result.moduleList.reduce((dataMap, module) => {
          const placementId = getPlacementSuffix(module.placementId);
          dataMap[placementId] = module;
          return dataMap;
          }, {});
        return {irsData, resultDetails};
      else {
        const irsData = adaptAthenaResponseJson(respJson)
      }

    fetchWrapper -> fetchIrsDataMap().then((dataMap) => 
      dispatch(receiveIrsDataMap({
        irsDataMap: json.irsData, resultDetails})))

      const { adaptedData } = transformModules({
        irsDataObj=irsDataMap, resultDetail, opts });

    transformModules(irsDataObj=irsDataMap) {
      map(irsDataObj, (irsData, placementId) => {
        adaptedData["Product-m2"] = transformProducts(irsData)
          irsData.recommendProducts = map(irsData.recommendedItems|recommendedEntities),
              transformPlacementProduct(products);
      }
    }

  4. in fetchIrsDataMap, we shall call fetchIrsDataMap

{\"IRS\":{\"t1\":\"t1\", \"m2\":\"m2\", \"m3\":\"m3\", \"m4\":\"m4\", \"b1\":\"b1\", \"b2\":\"b2\", \"b3\":\"b3\" }, \"ATH\":{\"t1\":\"contentZone3\", \"m2\":\"contentZone3\", \"m3\":\"contentZone4\", \"m4\":\"contentZone5\", \"b1\":\"b1\", \"b2\":\"b2\", \"b3\":\"b3\"}, \"BTV\":{\"m2\":\"m2\", \"m3\":\"contentZone3\",  \"m4\":\"contentZone4\", \"b1\":\"contentZone5\", \"b2\":\"b2\"}}


echo '{"reqId":"049dc482-8a6b-4baa-8f96-48541f5ecd81","pageType":"itempage","tenant":"Walmart.com","cookieInfo":{"vtc":"bnZioywaD1-DyWZ8omix88x","AID":"wmlspartner=wlpa:reflectorid=22222222227037539814:lastupd=1475191281937","CID":"","SP":"s","athrvi":"","ath":"","DL":"94086,37.368804931640625,-122.03630065917969,ip,94086,USA,CA","sps":"i$25059351;52027820;45452302;44488686;46998022;16480941;50690487;11027394;27280906;19790468;35590291;","SSOE":"","exp":"1+1473369590+XX5hE1O9-AIWoZNC5KGSSI+60+"},"dataInput":{"productId":"45452302","categoryId":""},"userClientInfo":{"deviceType":"desktop","userAgent":"","callType":"SERVER"},"zones":{"contentZone3":[{"type":"SlickCarousel"}],"contentZone4":[{"type":"SlickCarousel"}],"contentZone5":[{"type":"SlickCarousel"}]}}' | curl --header 'Host:dev.walmart.com:3000' --header WM_CONSUMER.ID:x --header WM_SVC.NAME:athena --header WM_SVC.VERSION:0.0.1 --header WM_SVC.ENV:qa --header WM_QOS.CORRELATION_ID:12345 -X POST -d @- http://athena.prod-c.walmart.com/irs-ws/2.0/p13n | tee /tmp/x


# ###########################
# http://app.stg0.tempo.platform.glb.prod.walmart.com/page?pageType=valueoftheday
# ###########################

1. tempo end-point > http://json.parser.online.fr/
  
  http://services.prod.tempo.platform.glb.prod.walmart.com/tempo-service-app/services/publishedModules?limit=30&offset=0&startDate=1422633613111&pageType=valueoftheday

  http://services.stg0.tempo.platform.glb.prod.walmart.com/tempo-service-app/services/publishedModules?limit=30&offset=0&startDate=1422633613111&pageType=valueoftheday

  {"contentZone17":"m2",  "contentZone18":"m3", "contentZone19":"m4" }

  {"contentZone17":"P13NClearance",  "contentZone18":"P13NRollbacks", "contentZone19":"P13NSpecialBuys" }
  
  payload -> modules -> {name, type:"P13NRecentlyViewed", module_id, schedule, 
    triggers:{zone: contentZone16}, 
    configs: {items: []}}

  contentZone16 {"name":"Clearance Carousel No Tile", "type":"ItemCarouselCurated"}
  contentZone17 {"name":"Rollbacks Carousel", "type":"ItemCarouselCurated"}
  contentZone18 {"name":"Special Buys Carousel: Week 49", "type":"ItemCarouselCurated"}


  contentZone17=[{configs={}, schedule={start=null, priority=0, end=null, expEnabled=false}, module_id=f41f57e1-cbb4-42de-bc29-4ff6c0b45fac, status=published, name=Test p13n vod, publishedDate=1428538577807, triggers=[{pageType=valueoftheday, zone=contentZone17, pageId=null}], type=P13NVod, version=1}], 

2. For ItemCarouselCurated.hbs.
   List<SimpleProduct> iroProducts(Page page, List<String> productIds, Map<String, Object> tileOptions);
   context.put("iroproducts", CommonModuleUtils.iroProducts(page, productIds,
   
    {{#if iroproducts}}
      {{#if configs.themeButton}}
      {{#each iroproducts}}
          <li class="{{#unless @index}}selected{{/unless}}">
            {{> global/views/product/ItemTile}}
          </li>
      {{/each}}


# ###########################
# SPS cookie, 
# atlas-common/blob/master/frontend/js/common/athena/athcookie.js
# https://jirasupport.walmart.com/browse/USWMTIM-13715
# ###########################

Cookie cookie = httpHeaders.getCookies().get(cookieName);
cookieValue = URLDecoder.decode(cookie.getValue(), "UTF-8");

  1. _addToCartCurrentAjax() update cookie.

    $.cookie("prefper", valueToUpdate, { path: "/", domain: ".walmart.com" });

    _getUpdatedValue: function (newValue) {
      var prefPerCookie = $.cookie("prefper");
      var valueReplace = "PREFSTORE~1" + newValue;
      return prefPerCookie.replace(/PREFSTORE~1(\d+)/, valueReplace);
    },


  2. For PROXY_LOGIN_LEVEL_COOKIE, routes.java

    @RequestMapping(value = "/api/setProxyLogin", method = {},  consumes = "application/json")
    public void setProxyLogin(@RequestBody String json, request, response)
        ProxyLoginModel proxyLoginModel = ProxyLoginModel.getProxyLoginModel(json);
        new SetProxyLoginAjax(req,res,appContext,proxyLoginModel).render();
    }

    public class SetProxyLoginAjax extends Ajax {
      ProxyLoginSetterService proxyLoginSetterService = new ProxyLoginSetterService(proxyLoginModel);
      proxyLoginSetterService.call();
    }

    protected Boolean execute() throws Exception {
      AtlasCookie.PROXY_LOGIN_LEVEL_COOKIE.setValue(ProxyLoginLevel.AUTH);
    }

  3. ath and athrvi cookie.
    product.js: "common/athena/athrvi".createAthRVI(productData.usItemId);


# ############
#  MAPS and Holideal
# ###########

  4. Preso query parameters
    a. cat_id=3944_1078524_1077944
    b. facet:value, cat_id=0&facet=price:$50 - $100
    c. min_price/max_price, max_price=125
    d. _sp, shipping pass
  missing:
    e. featured category
    f. best sellers in category
    g. top brand ?

  5. Questions:
    a. how does earch/category


####
# P13n Tempo Zone
####
1. TempoWrapper maps moduleType to ReactComponentClass for zones in the wrapper.

    const MODULE_TYPE_COMPONENT_MAP = {
      BannerMessage,
      CategoryCarouselCurated,
      HomepageSavingCenter,
      HighlightedDepartments,
      MultiStoryPOVResponsive,
      SingleStoryPOVResponsive,
      WMXOMPAdController,
      SEOCustomHTML
    };

  const { quimbyData: { homepage }, } = this.props;
  <TempoWrapper zoneNameModuleMap={homepage} moduleTypeComponentMap={MODULE_TYPE_COMPONENT_MAP}>

2. Fetcher get dataMap[b1] and reducer transformModules()
  irsData = responseJSON.result.moduleList.reduce(
    (dataMap, module) => { dataMap[b1]=module}, 
  
  Reducer in RECEIVE_IRSDATAMAP => {...adaptedData} = transformModules()
  It got augmented in transformProducts() with recommendedProducts and reted as adaptedData["Product-b1"]
    irsData.recommendedProducts = map(irsData.recommendedEntities,
      partial(transformProductNew, placementId))
    adaptedData = {Product-b1: recommendedProducts: []}

2. P13NRecommendation has props.irsData, props.moduleData..., pass to CarouselWrapper -> TempoTileCarousel
    "irsData": PropTypes.object,
    "moduleData": PropTypes.object,
    "products": PropTypes.array,    <-- for RVI to re-construct moduleData
    "resultDetail": PropTypes.object,
    "parentEntities": PropTypes.array,
    "handleClick": PropTypes.func

3. TempoTileCarousel moduleData = constructModuleData(irsData, placementId)
  <TempoTileCarousel irsData={irsData} moduleData={moduleData} parentEntities={parentEntities} />

    configs: {
        title: irsData ? irsData.moduleTitle : "",
        titleColor: "#222",
        display: "carousel",
        themeColor,
        themeImage: null,
        firstTile: null,
        themeButton: null,
        themeButtonColor: null,
        themeTextColor: null,
        seeAllLink: null,
        seeAllLinkHexCode: null,
        athenaEnabled: "false",
        carouselType: "horizontal",
        tileOptions: {
          price: "on",
          itemFlag: "on",
          productTitle: "double",
          ratingsReviews,
          deliveryPass: "on",
          actions: "none"
        },
        products: irsData ? irsData.recommendedProducts : []
      }

4. For RVI, re-construct moduleData(products), configs.title is empty.

    _renderP13NCarousel(products) {
      const {isTrending} = this.state;
      const moduleData = constructModuleData(products);
      return (this.state.hasOwnProperty("updateCarousel") && this.state.updateCarousel) ? null :
        <CarouselWrapper moduleData={moduleData} isRVI={true} isTrending={isTrending} />

5. On click, fetchIrsDataMap() with ajax call.
  placementId is b3. adaptedData["ProductRvi-b3"]

  Async Fetch Action:
  bootstrapP13N() / ajaxRequest() =>
   => fetchWrapper() => fetchIrsDataMap() => irsServiceFetch () => 
     dispatch(receiveIrsDataMap(dataMap));

  handleClick() => fetchIrsDataMap(page="ProductRviRec").then((data) => {
    const irsData = transformPlacementProducts({data.irsData, this.props.placementId});
      => map(irsDataObj, (irsData, currentPlacementId) => {
        const transformPlacementProduct = partial(transformProductNew, placementId);
        adaptedData[placementId] = transformProducts({...});

  returned irsData.adaptedData["b3"], different than irsDataMap["ProductRvi-b3"]
    
    const products = irsData.adaptedData["b3"].recommendedProducts
    setState({product})

  irsData = responseJSON.result.moduleList.reduce((dataMap, module) => {
    const placementId = getPlacementSuffix(module.placementId);
    dataMap[placementId] = module;
    return dataMap;
  }, {});

  export const receiveIrsDataMap = (json, opts) => {
    return {
      type: RECEIVE_IRSDATAMAP,
      irsDataMap: json.irsData,
      resultDetail: json.resultDetail,
      visitorId: json.visitorId,
      opts
    };
  };

6. reducer:
  home -> quimbyData -> homepage -> contentZone1 -> configs {}

7. 
