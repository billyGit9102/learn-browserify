(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
console.log("a")
},{}],2:[function(require,module,exports){
var unique = require('./a');
var p = require('./person');
//var p = require('./person');
var data = [1, 2, 2, 3, 4, 5, 5, 5, 6];

console.log(p.default.name);
},{"./a":1,"./person":3}],3:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var person = {
    name: "max",
    sayhi: function () {
        console.log("good morning");
    }
};
//set what to export in this files
exports.default = person;

},{}]},{},[2]);
