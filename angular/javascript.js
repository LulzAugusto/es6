// avoid
angular.module('app')
  .controller('MyController', function($scope, ...) {
    // controller definition
  });

// better
angular.module('app')
  .controller('MyController', MyController);

function MyController($scope, ...) {
  // controller definition
}
