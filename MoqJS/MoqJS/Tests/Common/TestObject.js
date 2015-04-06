﻿'use strict';
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Tests;
(function (Tests) {
    var TestObject = (function () {
        function TestObject() {
        }
        Object.defineProperty(TestObject.prototype, "getter", {
            get: function () {
                if (this.onGetterCalled) {
                    this.onGetterCalled();
                }

                return this.getterValue;
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(TestObject.prototype, "setter", {
            set: function (value) {
                this.setterValue = value;

                if (this.onSetterCalled) {
                    this.onSetterCalled(value);
                }
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(TestObject.prototype, "getterAndSetter", {
            get: function () {
                if (this.onGetterOfGetterAndSetterCalled) {
                    this.onGetterOfGetterAndSetterCalled();
                }

                return this.getterAndSetterValue;
            },
            set: function (value) {
                this.getterAndSetterValue = value;

                if (this.onSetterOfGetterAndSetterCalled) {
                    this.onSetterOfGetterAndSetterCalled(value);
                }
            },
            enumerable: true,
            configurable: true
        });


        TestObject.staticFunction = function () {
            if (this.staticFunctionCalled) {
                this.staticFunctionCalled();
            }
        };

        TestObject.prototype.noArgumentsFunction = function () {
            if (this.onNoArgumentsFunctionCalled) {
                this.onNoArgumentsFunctionCalled();
            }
        };

        TestObject.prototype.oneArgumentsFunction = function (arg1) {
            if (this.onOneArgumentsFunctionCalled) {
                this.onOneArgumentsFunctionCalled(arg1);
            }
        };

        TestObject.prototype.manyArgumentsFunction = function (arg1, arg2, arg3) {
            if (this.onManyArgumentsFunctionCalled) {
                this.onManyArgumentsFunctionCalled(arg1, arg2, arg3);
            }
        };

        TestObject.prototype.returning1Function = function () {
            if (this.onReturnung1FunctionCalled) {
                this.onReturnung1FunctionCalled();
            }

            return 1;
        };

        TestObject.prototype.callPrivateFunction = function (arg1) {
            return this._privateFunction(arg1);
        };

        TestObject.prototype._privateFunction = function (arg1) {
            if (this.onPrivateFunctionCalled) {
                this.onPrivateFunctionCalled(arg1);
            }

            return 1;
        };

        TestObject.prototype.callPrivateGetter = function () {
            return this._privateGetter;
        };

        TestObject.prototype.callPrivateSetter = function (value) {
            this._privateSetter = value;
        };

        TestObject.prototype.callPrivateGetterOfGetterAndSetter = function () {
            return this._privateGetterAndSetter;
        };

        TestObject.prototype.callPrivateSetterOfGetterAndSetter = function (value) {
            this._privateGetterAndSetter = value;
        };

        Object.defineProperty(TestObject.prototype, "_privateGetter", {
            get: function () {
                if (this.onPrivateGetterCalled) {
                    this.onPrivateGetterCalled();
                }

                return this.privateGetterValue;
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(TestObject.prototype, "_privateSetter", {
            set: function (value) {
                this.privateSetterValue = value;

                if (this.onPrivateSetterCalled) {
                    this.onPrivateSetterCalled(value);
                }
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(TestObject.prototype, "_privateGetterAndSetter", {
            get: function () {
                if (this.onPrivateGetterOfGetterAndSetterCalled) {
                    this.onPrivateGetterOfGetterAndSetterCalled();
                }

                return this.privateGetterAndSetterValue;
            },
            set: function (value) {
                this.privateGetterAndSetterValue = value;

                if (this.onPrivateSetterOfGetterAndSetterCalled) {
                    this.onPrivateSetterOfGetterAndSetterCalled(value);
                }
            },
            enumerable: true,
            configurable: true
        });

        TestObject.PRIVATE_FUNCTION_NAME = '_privateFunction';
        TestObject.PRIVATE_GETTER_NAME = '_privateGetter';
        TestObject.PRIVATE_SETTER_NAME = '_privateSetter';
        TestObject.PRIVATE_GETTER_AND_SETTER_NAME = '_privateGetterAndSetter';
        return TestObject;
    })();
    Tests.TestObject = TestObject;

    var TestObjectSon = (function (_super) {
        __extends(TestObjectSon, _super);
        function TestObjectSon() {
            _super.apply(this, arguments);
        }
        return TestObjectSon;
    })(TestObject);
    Tests.TestObjectSon = TestObjectSon;
})(Tests || (Tests = {}));
//# sourceMappingURL=TestObject.js.map
