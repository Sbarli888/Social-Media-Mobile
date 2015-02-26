﻿(function () {
    'use strict';
    angular.module('swaksoft.mobile').factory('localStorageService', ['$window', function ($window) {
        var service = {
            set: function(key, value) {
                if (key && value) {
                    if (typeof value === 'object') {
                        $window.localStorage.setItem(key, JSON.stringify(value));
                    } else {
                        $window.localStorage.setItem(key, value);
                    }
                }
            },

            get: function (key) {
                var value = (key) ? $window.localStorage.getItem(key) : null;
                if (!value) return null;

                var parsed;
                try {
                    parsed = JSON.parse(value);
                } catch (e) {
                    parsed = value;
                }

                return parsed;
            },

            remove: function (key) {
                if (key) {
                    $window.localStorage.removeItem(key);
                }
            }
        };

        return service;
   }]);
})();