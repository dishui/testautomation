# FrontEnd Automation

## Tools

1. mocha for unit test
2. nightwatch page object model for website and server test.
3. smock/shifu launch stateful mock server
4. smocks-magellan-nightwatch plugin to launch app server and mock server instances.
  https://github.com/jhudson8/smocks-magellan-nightwatch
5. Sauce lab to run Sauce browsers to connect through tunnels to app server instances and mock server instances within firewall.
6. 

### Magellan and Nightwatch

To run nightwatch tests with magellan, you need to create a folder test/automation.
as done with boilerplate-ngithwatch repo.
  
    https://github.com/TestArmada/boilerplate-nightwatch

Magellan is to launch browsers and parallel run tests.

    DPRO_LOCATION=./test/automation/conf/data/  NODE_CONFIG_DIR=./test/automation/config magellan --browser=chrome --config=test/automation/magellan.json --serial

    "nightwatch_config": "./test/automation/conf/nightwatch.json"

### Nightwatch

nightwatch.json defines tests src_folders and custom_commands_paths and globals_path.
  
  src_folders contains tests, ./test/automation/tests/careplan
  custom_commands_paths contains lib/commands.
  routes contains each API routes and endpoints collects them in one module.
  globals_paths points to mocks folder where magellan-init and nightwatch-init modues for smocks-magellan-nightwatch

we use nightwatch page object model to structure our tests

if we are automating careplan related use case,all elements that your testcase needs are added to "lib/elements/careplan.js"
    
    module.exports = {
      //  careplan message in BOT
      careplanText: {
        selector: ".CarePlan-heading"
      },
    }

All assertions are grouped into functions and added to "/lib/commands/careplan.js"

    var globals = require("../globals/careplan");
    module.exports = [{
      pVerifyCareplanTxt: function () {
        var selectors = this.elements;
        return this
          .assert.elContainsText(selectors.careplanText.selector,

Add a page reference at "/lib/pages/careplan.js" for commands and elements
    
    var elements = require("../elements/careplan");
    var commands = require("../commands/careplan");
    module.exports = {
      elements: elements,
      commands: commands
    };

All tests under test/automation/tests/careplan/addCarePlan.js

    var BaseTest = require("../../lib/product-base-test");
    var config = require("config");
    var item = config.item.careplan;
    module.exports = new BaseTest({
      tags: ["smoke", "regression"],
      "Load product page": function (client) {
        client.setMockVariant({
            fixture: "ItemPage", variant: "careplan"
          })
          .loadPage(this.appUrl("/product/" + item.id));
      },
      "Add care plan to order": function (client) {
        client.getViewportScale(function (scale) {
          var page = client.page.careplan();
          page.pVerifyCareplanMob();
          page.pVerifyCareplanTxt();
        });
      }
    });



### Smock and Shifu

Shifu smock server take config of API route and endpoints and serve mock json response.

Smock/Shifu is responsible to launch mock server at, say, dev.walmart.com:12002, and serve the json to API route. e.g, dev.walmart.com:12002/product/api/p13n.
Define each API route in ${globals_path}/route/p13n-routes.js and ${globals_path}/endpoints.js.

  register: function (shifu) {
      // P13N Api GET
      shifu.route({
        id: "P13N",
        label: "P13N",
        path: "/product/api/p13n",
        method: "GET",
        config: {
          cors: _corsHeaders
        }
      }).respondWithFile()

Shifu will start the mock server and API json will be served when ajax/fetch requests made to mock server endpoint.
  server = shifu.start({})
  
  ${serverUrl}:mocksPort/product/api/p13n


### App Server and Mock Server instances

nightwatch-init.js defines how smock/shifu will start app server instance and mock server instance. server instances running on appPort and mocksPort.

  module.exports = require('@walmart/shifu-magellan-nightwatch').nightwatch({

    // point to our mock server hapi plugin
    mockServer: require('../mocks/mock-server-hapi-plugin.js'),

    appServer: {
      start: function (options, callback) {
        var mocksPort = options.mocksPort;
        var mocksHttpsPort = options.mocksHttpsPort;

        global.mocksPort = mocksPort;
        global.mocksHttpsPort = mocksHttpsPort;
        
        var appPort = options.appPort;
        var mock_base_file = require("path").join(app_dir, '/config/local-mock.json');
        mock_url_file = mock_url_file.replace(/dev.walmart.com:8000/g, host + ":" + mocksPort);
        mock_url_file_path = require("path").join(__dirname, '../../..', 'config/local-' + appPort + '.json');
        // Write a dynamic file
        shifu.util.writeFile(mock_url_file_path, mock_url_file, callback);

        console.log('-------Starting app server pointing to Mock Service-------')
        var cmd = 'NODE_APP_INSTANCE=' + appPort + ' NODE_CONFIG_DIR=./config PORT=' + appPort + ' ./node_modules/.bin/builder run server';
        console.log(' CMD to start server pointing to Mock Service: ' + cmd);
      }
    }
  })


## Sauce connect

Sauce connect setup tunnels and magellan assign workers to each tunnel and each sauce browser connects through one tunnel.

Starting saucelabs from your local:

1. export SAUCE_CONNECT_VERSION=4.3.13
2. export SAUCE_USERNAME=“your sauce username"
3. export SAUCE_ACCESS_KEY="pull accesskey from your account info in sauce"
4. SAUCE_TUNNEL_ID= xyz

```
 NODE_CONFIG_DIR=./test/automation/config magellan --tags=c1 --config=test/automation/magellan.json
 --serial  --max_workers 3 --max_test_attempts 1 --sauce --create_tunnels  --browsers ipad_9_0_iOS_iPad_Simulator,
 iphone_9_0_iOS_iPhone_Simulator,ipad_8_2_iOS_iPad_Simulator,iphone_8_2_iOS_iPhone_Simulator

```

## scripts

