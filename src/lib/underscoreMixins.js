'use strict';

/*
 * Mixins for underscore.js
 *
 * These are helper methods that are not included in underscore.js by default.
 *
 */

var _ = require('underscore');
var EMAIL_REGEXP=/\S+@\S+\.\S+/;

_.mixin({
  /*
   * Compact an object by removing all null or undefined elements
   *
   * Examples
   *
   *  _.compactObject({ a: null, b: 'something', c: undefined })
   *  # => { b: 'something' }
   *
   */
  compactObject: function(obj) {
    _.each(obj, function(val, key) {
      if(_.isUndefined(val) || _.isNull(val)) {
        delete obj[key];
      }
    });

    return obj;
  },

  /*
   * Compact an Array by removing all `empty` elements
   *
   * Examples:
   *
   *  _.removeEmpty([ 'something', {}, null]);
   *  # => [ 'something' ]
   */
  removeEmpty: function(arr) {
    return _.compact(_.map(arr, function(val) {
      if (_.isEmpty(val) && (_.isArray(val) || _.isObject(val))) {
        return null;
      }

      return val;
    }));
  },

  /*
   * Check if a string is an email address
   */
  isEmail: function(str) {
    return EMAIL_REGEXP.test(str);
  }
});
