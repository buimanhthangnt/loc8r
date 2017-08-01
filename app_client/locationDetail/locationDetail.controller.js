(function () {
	angular
		.module('loc8rApp')
		.controller('locationDetailCtrl', locationDetailCtrl);
	locationDetailCtrl.$inject = ['$routeParams', '$modal', 'loc8rData'];
	function locationDetailCtrl ($routeParams, $modal, loc8rData) {
		var vm = this;
		vm.locationid = $routeParams.locationid;
		loc8rData.locationById(vm.locationid)
			.then(function success(response) {
				vm.data = {location: response.data};
				vm.pageHeader = {title: vm.data.location.name};
			}, function error(err) {
				console.log(err);
			});
		vm.popupReviewForm = function () {
			var modalInstance = $modal.open({
				templateUrl: '/reviewModal/reviewModal.view.html',
				controller: 'reviewModalCtrl as vm',
				resolve: {
					locationData: function() {
						return {
							locationid: vm.locationid,
							locationName: vm.data.location.name
						};
					}
				}
			});
			modalInstance.result.then(function (response) {
				vm.data.location.reviews.push(response.data);
			}, function error() {
				//let it empty
			});
		};
	}
})();