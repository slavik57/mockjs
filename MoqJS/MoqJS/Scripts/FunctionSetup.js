﻿'use strict';
var moqJS;
(function (moqJS) {
    // TODO: support chaining => returns().callback().throws().....
    var FunctionSetup = (function () {
        function FunctionSetup(functionCall, object, functionProxyConfigurations) {
            this.functionCall = functionCall;
            this.object = object;
            this.functionProxyConfigurations = functionProxyConfigurations;
        }
        // TODO: add returnsInOrder and lazyReturnsInOrder....
        //  given list of return values return every call the next value... when finished return undefined
        FunctionSetup.prototype.lazyReturns = function (returnFunction) {
            var _this = this;
            var overrideMode = new moqJS.OverrideFunctionCallMode(function () {
                var args = [];
                for (var _i = 0; _i < (arguments.length - 0); _i++) {
                    args[_i] = arguments[_i + 0];
                }
                return returnFunction.apply(_this.object, args);
            }, 1 /* LazyReturns */);

            this.functionProxyConfigurations.functionCallMode = overrideMode;

            this.functionCall(this.object);

            this.functionProxyConfigurations.functionCallMode = new moqJS.InvokeFunctionCallMode();
        };

        FunctionSetup.prototype.returns = function (value) {
            var overrideMode = new moqJS.OverrideFunctionCallMode(function () {
                return value;
            }, 0 /* Returns */);

            this.functionProxyConfigurations.functionCallMode = overrideMode;

            this.functionCall(this.object);

            this.functionProxyConfigurations.functionCallMode = new moqJS.InvokeFunctionCallMode();
        };

        FunctionSetup.prototype.callback = function (callback) {
            var _this = this;
            var overrideMode = new moqJS.OverrideFunctionCallMode(function () {
                var args = [];
                for (var _i = 0; _i < (arguments.length - 0); _i++) {
                    args[_i] = arguments[_i + 0];
                }
                callback.apply(_this.object, args);
            }, 3 /* Callback */);

            this.functionProxyConfigurations.functionCallMode = overrideMode;

            this.functionCall(this.object);

            this.functionProxyConfigurations.functionCallMode = new moqJS.InvokeFunctionCallMode();
        };

        FunctionSetup.prototype.throws = function (error) {
            var overrideMode = new moqJS.OverrideFunctionCallMode(function () {
                throw error;
            }, 2 /* Throws */);

            this.functionProxyConfigurations.functionCallMode = overrideMode;

            this.functionCall(this.object);

            this.functionProxyConfigurations.functionCallMode = new moqJS.InvokeFunctionCallMode();
        };
        return FunctionSetup;
    })();
    moqJS.FunctionSetup = FunctionSetup;
})(moqJS || (moqJS = {}));
//# sourceMappingURL=FunctionSetup.js.map
