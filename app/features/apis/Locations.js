angular.module('svBeaconApis')
  .factory('Locations',
    function ($http, $q, $log,
              Validations, Firebases) {
      var Locations = {}, isDefined = Validations.isDefined, isEmpty = Validations.isEmpty;
      var deferred;
      var path = 'events/locations';

      var locations = function() {
        return Firebases.childRef(path);
      }

      Locations.load = function () {
        deferred = isDefined(deferred)?deferred:$q.defer();
        locations().then(function (locations) {
          deferred.resolve(locations);
        })

        return deferred.promise;
      }

      return Locations;


    })
