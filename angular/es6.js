class UserService {
  constructor($http) {
    this.$http = $http;
  }
  getFullName() {
    return this.$http.get('api/user/details');
  }
}

class MyController {
  constructor(userService) {
    userService.getFullName()
    .then(result => this.userName = result.fullName);
  }
}

angular.module('app')
  .service('userService', UserService)
  .controller('MyController', MyController);
