'use strict';

angular.module('meetmeApp.version', [
  'meetmeApp.version.interpolate-filter',
  'meetmeApp.version.version-directive'
])

.value('version', '0.1');
