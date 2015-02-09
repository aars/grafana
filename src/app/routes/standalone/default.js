define([
  'angular',
  'config',
  'store',
  './fromDB',
  './fromFile',
  './fromScript',
  './playlist'
],
function (angular, config, store) {
  'use strict';

  var module = angular.module('grafana.routes');

  module.config(function($routeProvider) {
    $routeProvider
    .when('/', {
      redirectTo: function() {
        return store.get('grafanaDashboardDefault') || config.default_route;
      }
    });
  });

});
