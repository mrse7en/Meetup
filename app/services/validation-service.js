'use strict';
meetme.factory('fakeQueryService', function($timeout, $q) {
    var FAKE_TIMEOUT = 2000;
    return function(username, fakeInvalidData) {
      var defer = $q.defer();
      $timeout(function() {
        fakeInvalidData.indexOf(username) == -1
            ? defer.resolve()
            : defer.reject();
      }, FAKE_TIMEOUT);
      return defer.promise;
    }
  })
  .directive('fakeRemoteRecordValidator', ['$timeout', 'fakeQueryService', function($timeout, fakeQueryService) {
    return {
      require: 'ngModel',
      link : function(scope, element, attrs, ngModel) {
        var seedData = scope.$eval(attrs.fakeRemoteRecordValidator);
        ngModel.$parsers.push(function(value) {
          valid(false);
          loading(true);
          fakeQueryService(value, seedData).then(
            function() {
              valid(true);
              loading(false);
            },
            function() {
              valid(false);
              loading(false);
            }
          );
          return value;
        });

        function valid(bool) {
          ngModel.$setValidity('record-taken', bool);
        }

        function loading(bool) {
          ngModel.$setValidity('record-loading', !bool);
        }
      }
    }
  }])
  .directive('matchValidator', function() {
    return {
      require: 'ngModel',
      link : function(scope, element, attrs, ngModel) {
        ngModel.$parsers.push(function(value) {
          ngModel.$setValidity('match', value == scope.$eval(attrs.matchValidator));
          return value;
        });
      }
    }
  })
  .directive('passwordCharactersValidator', function() {
    var PASSWORD_FORMATS = [
      /[^\w\s]+/, //special characters
     // /[A-Z]+/, //uppercase letters
      /\w+/, //other letters
      /\d+/ //numbers
    ];
    return {
      require: 'ngModel',
      link : function(scope, element, attrs, ngModel) {
        ngModel.$parsers.push(function(value) {
          var status = true;
          angular.forEach(PASSWORD_FORMATS, function(regex) {
            status = status && regex.test(value);
          });
          ngModel.$setValidity('password-characters', status);
          return value;
        });
      }
    };
 });