﻿'use strict';
var moqJS;
(function (moqJS) {
    // TODO: Implement:
    //  setup
    //  if has no setup should throw exception
    //  setup get
    //  setup set
    var Mock = (function () {
        function Mock(object) {
            this.object = object;
            this._FunctionProxyConfigurations = new moqJS.FunctionProxyConfigurations();
            this._FunctionProxyConfigurations.callBase = true;

            this._setFunctionProxies();
        }
        Object.defineProperty(Mock.prototype, "callBase", {
            get: function () {
                return this._FunctionProxyConfigurations.callBase;
            },
            set: function (value) {
                this._FunctionProxyConfigurations.callBase = value;
            },
            enumerable: true,
            configurable: true
        });


        // TODO: Tests
        Mock.prototype.setup = function (functionCall) {
            return new moqJS.FunctionSetup(functionCall, this._FunctionProxyConfigurations);
        };

        Mock.prototype.verify = function (functionCall, times) {
            this._FunctionProxyConfigurations.isVerifying = true;
            this._FunctionProxyConfigurations.numberOfMatches = 0;

            functionCall(this.object);

            var numberOfMatches = this._FunctionProxyConfigurations.numberOfMatches;

            this._FunctionProxyConfigurations.isVerifying = false;
            this._FunctionProxyConfigurations.numberOfMatches = 0;

            if (!times) {
                return numberOfMatches > 0;
            }

            return times.match(numberOfMatches);
        };

        Mock.prototype._setFunctionProxies = function () {
            var proxies = [];

            for (var propertyName in this.object) {
                var propertyValue = this.object[propertyName];

                if (typeof (propertyValue) != "function") {
                    continue;
                }

                var functionProxy = new moqJS.FunctionProxy(propertyValue, this.object, this._FunctionProxyConfigurations);
                proxies.push(functionProxy);

                this._setFunctionProxy(proxies, proxies.length - 1, propertyName);
            }
        };

        Mock.prototype._setFunctionProxy = function (proxies, proxyNumber, functionName) {
            this.object[functionName] = function () {
                var args = [];
                for (var _i = 0; _i < (arguments.length - 0); _i++) {
                    args[_i] = arguments[_i + 0];
                }
                return proxies[proxyNumber].callFunction(args);
            };
        };
        return Mock;
    })();
    moqJS.Mock = Mock;
})(moqJS || (moqJS = {}));
//# sourceMappingURL=Mock.js.map
