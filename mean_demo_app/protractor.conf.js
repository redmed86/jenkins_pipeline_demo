'use strict';

// // Protractor configuration
// var config = {
//   specs: ['modules/*/tests/e2e/*.js']
// };
//
// exports.config = config;
//
// // conf.js
// // var HTTPSProxyAgent = require('https-proxy-agent');
// // var sauceRestAgent = new HTTPSProxyAgent("http://<proxy>:<port>")

exports.config = {
    sauceUser: process.env.SAUCE_USERNAME,
    sauceKey: process.env.SAUCE_ACCESS_KEY,
    //sauceAgent: sauceRestAgent

    // webDriverProxy: 'http://<proxy>:<port>',

    //seleniumAddress: 'http://ondemand.saucelabs.com:80/wd/hub',
    specs: ['modules/*/tests/e2e/*.js'],

    // restartBrowserBetweenTests: true,

    onPrepare: function () {
        var caps = browser.getCapabilities()
    },

    multiCapabilities: [{
        browserName: 'firefox',
        version: 'latest',
        platform: 'OS X 10.10',
        name: "firefox-tests",
        shardTestFiles: true,
        maxInstances: 25,
        'tunnel-identifier': 'Dereks_Tunnel'
    }, {
        browserName: 'chrome',
        version: '41',
        platform: 'Windows 7',
        name: "chrome-tests",
        shardTestFiles: true,
        maxInstances: 25,
        'tunnel-identifier': 'Dereks_Tunnel'
    }],

    onComplete: function () {

        var printSessionId = function (jobName) {
            browser.getSession().then(function (session) {
                console.log('SauceOnDemandSessionID=' + session.getId() + ' job-name=' + jobName);
            });
        }
        printSessionId("Derek's Demo Job- MEAN Stack");
    }
}
