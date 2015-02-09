define([
  'angular',
  'config'
],
function (angular, config) {
  "use strict";

  var module = angular.module('grafana.routes');

  module.config(function($routeProvider) {
    $routeProvider
      .when('/playlist/', {
        templateUrl: 'app/partials/dashboard.html',
        controller : 'PlaylistProvider',
        reloadOnSearch: false,
      });
  });

  module.controller('PlaylistProvider', function($scope, playlistSrv, $location) { // jshint ignore:line

    var fromURI = $location.search().dashboard;
    var dashboardNames = (fromURI instanceof Array) ? fromURI : [fromURI];
    var dashboards = [];
    var interval = $location.search().interval || config.playlist_timespan;

    // Create urls
    for (var i=0; i<dashboardNames.length; i++) {
      dashboards.push({
        url: '/dashboard/db/'+dashboardNames[i]
      });
    }

    playlistSrv.start(dashboards, interval);
  });

});
