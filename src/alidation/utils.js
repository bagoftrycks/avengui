/* eslint-disable */

/**
 * From
 * https://github.com/semisleep/simple-vue-validator/blob/master/src/utils.js
 */

/**
 * MIT License
 *
 * Copyright (c) 2016 semisleep
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

'use strict';

var deepEqual = require('deep-equal');

// This implementation of debounce was taken from the blog of David Walsh.
// See here: https://davidwalsh.name/javascript-debounce-function
module.exports.debounce = function debounce(func, wait, immediate) {
  var timeout;

  return function () {
    var context = this;
    var args = arguments;
    var later = function () {
      timeout = null;
      if (!immediate) {
        func.apply(context, args);
      }
    };

    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) {
      func.apply(context, args);
    }
  };
};

module.exports.format = function (template) {
  var args = Array.prototype.slice.call(arguments, 1);
  return template.replace(/{(\d+)}/g, function (match, number) {
    return typeof args[number] != 'undefined' ? args[number] : match;
  });
};

module.exports.isArray = function isArray(arg) {
  if (typeof Array.isArray === 'function') {
    return Array.isArray(arg);
  }

  return Object.prototype.toString.call(arg) === '[object Array]';
};

module.exports.isEmpty = function (value) {
  if (module.exports.isArray(value)) {
    return !value.length;
  } else if (value === undefined || value === null) {
    return true;
  } else {
    return !String(value).trim().length;
  }
};

module.exports.isEqual = function isEqual(o1, o2) {
  return deepEqual(o1, o2);
};

module.exports.isFunction = function isFunction(arg) {
  return typeof arg === 'function';
};

module.exports.isNaN = function isNaN(arg) {
  return arg !== arg;
};

module.exports.isNull = function isNull(arg) {
  return arg === null;
};

module.exports.isString = function isString(arg) {
  return typeof arg === 'string' || arg instanceof String;
};

module.exports.isUndefined = function isUndefined(arg) {
  return typeof arg === 'undefined';
};

module.exports.omit = function omit(obj, key) {
  var result = {};

  for (var name in obj) {
    if (name !== key) {
      result[name] = obj[name];
    }
  }

  return result;
};

/* eslint-enable */
