'use strict';

window.i18n = require('i18next/lib/dep/i18next-1.7.1');
require('../../vendor/javascripts/ng-i18next-0.3.0');

angular.module('jm.i18next').config(['$i18nextProvider', function ($i18nextProvider) {
    $i18nextProvider.options = {
        lng: window.language,
        getAsync: false,
        dynamicLoad: true,
        useLocalStorage: false,
        fallbackLng: 'en',
        resGetPath: '/locales/resources.json?lng=__lng__&ns=__ns__',
        supportedLngs: ['en', 'es']
    };
}]);
